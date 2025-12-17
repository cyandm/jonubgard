<?php

/**
 * Customize
 * this class is used to register customize in theme
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class Customize
{

	private static $wpCustomize;

	public static function init()
	{
		add_action('customize_register', [__CLASS__, 'register']);
	}


	public static function register($wp_customize)
	{
		self::$wpCustomize = $wp_customize;
		self::registerPanelCustomCode();
		self::registerPanelInformation();
	}

	private static function addControl($section, $type, $id, $label, $description = '')
	{

		self::$wpCustomize->add_setting(
			$id,
			['type' => 'option']
		);


		if ($type == "file") {
			self::$wpCustomize->add_control(
				new \WP_Customize_Upload_Control(
					self::$wpCustomize,
					$id,
					[
						'label' => $label,
						'section' => $section,
						'settings' => $id,
						'description' => $description,
					]
				)
			);
		}

		if ($type != 'file') {
			self::$wpCustomize->add_control(
				$id,
				[
					'label' => $label,
					'section' => $section,
					'settings' => $id,
					'type' => $type,
					'description' => $description,
				]
			);
		}
	}

	private static function registerPanelCustomCode()
	{
		self::$wpCustomize->add_panel(
			'custom_code',
			[
				'title' => 'کد های سفارشی (گوگل انالیتیکس، اینماد، ساماندهی)',
				'priority' => 1
			]
		);

		self::$wpCustomize->add_section(
			'head_section',
			[
				'title' => 'داخل تگ head',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);


		for ($i = 1; $i <= 10; $i++) {
			self::addControl('head_section', 'textarea', "cyn_head_code_$i", "کد سفارشی $i");
		}

		self::$wpCustomize->add_section(
			'start_body_section',
			[
				'title' => 'ابتدای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ($i = 1; $i <= 10; $i++) {
			self::addControl('start_body_section', 'textarea', "cyn_start_body_code_$i", "کد سفارشی $i");
		}


		self::$wpCustomize->add_section(
			'end_body_section',
			[
				'title' => 'انتهای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ($i = 1; $i <= 10; $i++) {
			self::addControl('end_body_section', 'textarea', "cyn_end_body_code_$i", "کد سفارشی $i");
		}

		self::$wpCustomize->add_section(
			'trust_section',
			[
				'title' => 'کد اینماد و ساماندهی و توسعه دهنده',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		self::addControl('trust_section', 'textarea', "cyn_enamad_code", "کد اینماد");
		self::addControl('trust_section', 'textarea', "cyn_samandehi_code", "کد ساماندهی");
		self::addControl('trust_section', 'text', "cyn_developer_code", "توسعه دهنده");
	}

	private static function registerPanelInformation()
	{
		self::$wpCustomize->add_panel(
			'information',
			[
				'title' => 'اطلاعات سایت',
				'priority' => 1
			]
		);

		self::$wpCustomize->add_section(
			'social_section',
			[
				'title' => 'شبکه های اجتماعی',
				'priority' => 1,
				'panel' => 'information'
			]
		);

		self::$wpCustomize->add_section(
			'address_section',
			[
				'title' => 'آدرس و اطلاعات تماس',
				'priority' => 1,
				'panel' => 'information'
			]
		);

		self::$wpCustomize->add_section(
			'working_hours_section',
			[
				'title' => 'ساعت کاری',
				'priority' => 1,
				'panel' => 'information'
			]
		);

		self::addControl('social_section', 'text', "telegram_text", "نام کاربری تلگرام");
		self::addControl('social_section', 'text', "telegram_link", "لینک تلگرام");
		self::addControl('social_section', 'text', "instagram_text", "نام کاربری اینستاگرام");
		self::addControl('social_section', 'text', "instagram_link", "لینک اینستاگرام");
		self::addControl('social_section', 'text', "whatsapp_number", "شماره واتس اپ");
		self::addControl('social_section', 'text', "twitter_text", "نام کاربری توییتر (X)");
		self::addControl('social_section', 'text', "twitter_link", "لینک توییتر (X)");
		self::addControl('social_section', 'text', "email_address", "ایمیل");

		self::addControl('address_section', 'text', "address_text", "متن ادرس");
		self::addControl('address_section', 'text', "address_link", "لینک ادرس");
		self::addControl('address_section', 'text', "phone_number", "شماره تلفن");
		self::addControl('address_section', 'text', "phone_number_support", "شماره تلفن پشتیبانی");

		for ($i = 1; $i <= 5; $i++) {
			self::addControl('address_section', 'file', "location_image_$i", "لوگو نرم افزار مکان یاب $i");
			self::addControl('address_section', 'text', "location_link_$i", "لینک نرم افزار مکان یاب $i");
		}

		self::addControl('working_hours_section', 'text', "working_days", "روزهای کاری");
		self::addControl('working_hours_section', 'text', "working_hours", "ساعت کاری");
	}
}
