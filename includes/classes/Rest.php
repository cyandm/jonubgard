<?php

/**
 * Rest API
 * this class is used to register rest routes and handle requests
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use WP_REST_Request;
use WP_REST_Response;

class Rest
{

	protected static $namespace = 'cyn/v1';

	public static function init()
	{
		add_action('rest_api_init', [__CLASS__, 'registerRoutes']);
	}

	public static function registerRoutes()
	{
		self::makeRoute('/contact_form', 'POST', [__CLASS__, 'createForm']);
		self::makeRoute('/travelogue_form', 'POST', [__CLASS__, 'createTravelogueForm']);
	}

	public static function createForm(WP_REST_Request $request)
	{

		$body = $request->get_body_params();

		$phone = isset($body['phone']) ? sanitize_text_field($body['phone']) : '';
		$name = isset($body['name']) ? sanitize_text_field($body['name']) : '';
		$message = isset($body['message']) ? sanitize_textarea_field($body['message']) : '';

		// Validate required fields
		if (empty($phone) || empty($name) || empty($message)) {
			return new WP_REST_Response(['error' => 'تمام فیلدها الزامی هستند'], 400);
		}

		// Validate phone number (Iranian format)
		if (!preg_match('/^[0-9]{11}$/', $phone)) {
			return new WP_REST_Response(['error' => 'شماره تلفن معتبر نیست'], 400);
		}

		$new_post = wp_insert_post([
			'post_type' => 'contact_form',
			'post_title' => $name,
			'post_status' => 'private',
			'meta_input' => [
				'_name' => $name,
				'_phone' => $phone,
				'_message' => $message,
			]
		]);

		if (is_wp_error($new_post)) {
			return new WP_REST_Response(['error' => 'خطا در ثبت فرم، لطفاً دوباره تلاش کنید'], 500);
		}

		return new WP_REST_Response(['message' => 'فرم با موفقیت ارسال شد'], 200);
	}

	public static function createTravelogueForm(WP_REST_Request $request)
	{
		// Rate limiting: Check if user has submitted too many requests
		$user_ip = self::getClientIp();
		$rate_limit_key = 'travelogue_form_' . md5($user_ip);
		$rate_limit_count = get_transient($rate_limit_key);

		if ($rate_limit_count !== false && $rate_limit_count >= 5) {
			return new WP_REST_Response(['error' => 'تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً چند دقیقه صبر کنید.'], 429);
		}

		$body = $request->get_body_params();

		$name = isset($body['name']) ? sanitize_text_field($body['name']) : '';
		$email = isset($body['email']) ? sanitize_email($body['email']) : '';
		$phone = isset($body['phone']) ? sanitize_text_field($body['phone']) : '';
		$travelogue_destination = isset($body['travelogue_destination']) ? sanitize_text_field($body['travelogue_destination']) : '';
		$message = isset($body['message']) ? sanitize_textarea_field($body['message']) : '';

		// Validate input length
		if (strlen($name) > 100) {
			return new WP_REST_Response(['error' => 'نام نمی‌تواند بیشتر از 100 کاراکتر باشد'], 400);
		}
		if (strlen($travelogue_destination) > 200) {
			return new WP_REST_Response(['error' => 'مقصد سفر نمی‌تواند بیشتر از 200 کاراکتر باشد'], 400);
		}
		if (strlen($message) > 8000) {
			return new WP_REST_Response(['error' => 'پیام نمی‌تواند بیشتر از 8000 کاراکتر باشد'], 400);
		}

		// Validate required fields
		if (empty($name) || empty($phone) || empty($message)) {
			return new WP_REST_Response(['error' => 'فیلدهای نام، شماره تماس و سفرنامه الزامی هستند'], 400);
		}

		// Validate phone number (Iranian format)
		if (!preg_match('/^[0-9]{11}$/', $phone)) {
			return new WP_REST_Response(['error' => 'شماره تلفن معتبر نیست'], 400);
		}

		// Validate email if provided
		if (!empty($email) && !is_email($email)) {
			return new WP_REST_Response(['error' => 'ایمیل معتبر نیست'], 400);
		}

		// Create post first
		$new_post = wp_insert_post([
			'post_type' => 'written_travelogues',
			'post_title' => $name,
			'post_status' => 'private',
			'meta_input' => [
				'_name' => $name,
				'_email' => $email,
				'_phone' => $phone,
				'_travelogue_destination' => $travelogue_destination,
				'_message' => $message,
			]
		]);

		if (is_wp_error($new_post)) {
			return new WP_REST_Response(['error' => 'خطا در ثبت فرم، لطفاً دوباره تلاش کنید'], 500);
		}

		// Handle file uploads
		$uploaded_images = [];
		$allowed_mime_types = [
			'image/png',
			'image/jpeg',
			'image/jpg',
			'image/webp',
			'image/heic',
			'image/heif',
		];

		$allowed_extensions = ['png', 'jpg', 'jpeg', 'webp', 'heic', 'heif'];
		$max_file_size = 10 * 1024 * 1024; // 10MB
		$max_file_count = 12; // Maximum 12 files

		if (!empty($_FILES['images']) && is_array($_FILES['images']['name'])) {
			require_once(ABSPATH . 'wp-admin/includes/image.php');
			require_once(ABSPATH . 'wp-admin/includes/file.php');
			require_once(ABSPATH . 'wp-admin/includes/media.php');

			$files = $_FILES['images'];
			$file_count = count($files['name']);

			// Validate file count
			if ($file_count > $max_file_count) {
				return new WP_REST_Response(['error' => "حداکثر {$max_file_count} فایل مجاز است"], 400);
			}

			for ($i = 0; $i < $file_count; $i++) {
				if ($files['error'][$i] === UPLOAD_ERR_OK) {
					$file = [
						'name' => $files['name'][$i],
						'type' => $files['type'][$i],
						'tmp_name' => $files['tmp_name'][$i],
						'error' => $files['error'][$i],
						'size' => $files['size'][$i]
					];

					// Validate file size
					if ($file['size'] > $max_file_size) {
						continue; // Skip files that are too large
					}

					// Validate file type
					$file_extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
					$file_mime_type = $file['type'];

					// Check both extension and MIME type
					if (!in_array($file_extension, $allowed_extensions) || !in_array($file_mime_type, $allowed_mime_types)) {
						continue; // Skip invalid files
					}

					// Validate file content (check if it's actually an image)
					if (!file_exists($file['tmp_name'])) {
						continue; // Skip if file doesn't exist
					}

					// Use exif_imagetype or getimagesize to verify it's actually an image
					$image_info = @getimagesize($file['tmp_name']);
					if ($image_info === false) {
						continue; // Skip if not a valid image
					}

					// Double-check MIME type from file content
					$detected_mime = $image_info['mime'];
					if (!in_array($detected_mime, $allowed_mime_types)) {
						continue; // Skip if detected MIME type doesn't match
					}

					// Upload file
					$upload = wp_handle_upload($file, ['test_form' => false]);

					if (!isset($upload['error'])) {
						// Create attachment
						$attachment_data = [
							'post_mime_type' => $upload['type'],
							'post_title' => sanitize_file_name(pathinfo($file['name'], PATHINFO_FILENAME)),
							'post_content' => '',
							'post_status' => 'inherit',
							'post_parent' => $new_post
						];

						$attachment_id = wp_insert_attachment($attachment_data, $upload['file'], $new_post);

						if (!is_wp_error($attachment_id)) {
							// Generate attachment metadata
							$attach_data = wp_generate_attachment_metadata($attachment_id, $upload['file']);
							wp_update_attachment_metadata($attachment_id, $attach_data);

							$uploaded_images[] = $attachment_id;
						}
					}
				}
			}
		}

		// Update rate limit counter
		$current_count = ($rate_limit_count !== false) ? $rate_limit_count : 0;
		set_transient($rate_limit_key, $current_count + 1, 15 * MINUTE_IN_SECONDS); // 15 minutes

		// Save image IDs to post meta
		if (!empty($uploaded_images)) {
			update_post_meta($new_post, '_travelogue_images', $uploaded_images);
		}

		return new WP_REST_Response(['message' => 'سفرنامه با موفقیت ارسال شد'], 200);
	}

	/**
	 * Get client IP address
	 * @return string
	 */
	private static function getClientIp()
	{
		$ip_keys = ['HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR'];

		foreach ($ip_keys as $key) {
			if (array_key_exists($key, $_SERVER) === true) {
				foreach (explode(',', $_SERVER[$key]) as $ip) {
					$ip = trim($ip);
					if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
						return $ip;
					}
				}
			}
		}

		return isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '0.0.0.0';
	}

	/**
	 * make route
	 * @param string $route route path
	 * @param string $methods GET, POST, PUT, DELETE, etc.
	 * @param callable $callback callback function
	 * @param callable $permission_callback permission callback function
	 * @return void
	 */
	private static function makeRoute($route, $methods, $callback, $permission_callback = '__return_true')
	{
		register_rest_route(self::$namespace, $route, [
			'methods' => $methods,
			'callback' => $callback,
			'permission_callback' => $permission_callback
		]);
	}
}
