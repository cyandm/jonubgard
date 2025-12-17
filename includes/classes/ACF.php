<?php

/**
 * ACF Class
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Validators;
use Cyan\Theme\Helpers\ACF\AcfGroup;


class ACF
{

	public static function init()
	{
		$isDev = ENVIRONMENT === 'development';
		$isDev ? null : add_filter('acf/settings/show_admin', '__return_false', 100);

		if (! function_exists('acf_add_local_field_group')) {
			return;
		}


		add_action('acf/include_fields', [__CLASS__, 'registerAllACF']);
	}

	/**
	 * Register all ACF fields for the individual post types, taxonomies, page templates, and menu items
	 * @return void
	 */
	public static function registerAllACF()
	{
		//PostTypes
		self::forSlider();
		self::forHome();
		self::forTravel();
		self::forLeader();
		self::forGallery();
		self::forEvents();
		self::forArchiveBlog();
		self::forTravelogue();


		//Taxonomies
		self::forProductDestination();
		self::forProductCategory();

		//Page Templates
		self::forContactUs();
		self::forAbout();
		self::forTravelogueWrite();

		//Menu Items

	}

	private static function forSlider()
	{

		//define helper
		$acfGroup = new AcfGroup();

		//add fields

		$acfGroup->contentFields->addImage('desktop_slider', 'عکس اسلایدر برای دسکتاپ', ['width' => '50%']);
		$acfGroup->contentFields->addImage('mobile_slider', 'عکس اسلایدر برای موبایل', ['width' => '50%']);
		$acfGroup->basicFields->addText('url', 'لینک اسلایدر', [
			'default_value' => '#',
			'width' => '50%',
			'required' => true
		]);

		//location
		$acfGroup->setLocation('post_type', '==', 'slider');

		// register group
		$acfGroup->register('slider');
	}

	private static function forHome()
	{
		//define helper
		$acfGroup = new AcfGroup();

		$acfGroup->layoutFields->addTab('home_new_travels', 'جدیدترین سفر ها');
		$acfGroup->basicFields->addText('home_new_travels_title', 'عنوان جدیدترین سفر ها', ['placeholder' => 'سفر های فعال | جدیدترین سفر ها', 'width' => '100%']);
		$acfGroup->relationshipFields->addLink('home_new_travels_button', 'لینک و متن دکمه جدیدترین سفر ها', ['width' => '100%']);

		$acfGroup->layoutFields->addTab('home_last_travels', 'سفرهای لحظه آخر');
		$acfGroup->basicFields->addText('home_last_travels_title', 'عنوان سفرهای لحظه آخر', ['placeholder' => 'سفرهای لحظه آخر', 'width' => '100%']);
		$acfGroup->relationshipFields->addPostObject('home_last_travels_select', 'انتخاب سفرهای لحظه آخر', ['post_type' => 'product', 'width' => '100%', 'multiple' => 1]);

		$acfGroup->layoutFields->addTab('home_special_offers', 'پیشنهادات ویژه');
		$acfGroup->basicFields->addText('home_special_offers_title', 'عنوان پیشنهادات ویژه', ['placeholder' => 'پیشنهادات ویژه', 'width' => '100%']);
		$acfGroup->relationshipFields->addPostObject('home_special_offers_select', 'انتخاب سفرهای پیشنهادات ویژه', ['post_type' => 'product', 'width' => '100%', 'multiple' => 1]);


		$acfGroup->layoutFields->addTab('home_events', 'رویداد ها');
		$acfGroup->basicFields->addText('home_events_title', 'عنوان رویداد ها', ['placeholder' => 'رویداد ها', 'width' => '100%']);

		$acfGroup->layoutFields->addTab('home_popular_destinations', 'مقصدهای محبوب');
		$acfGroup->basicFields->addText('home_popular_destinations_title', 'مقصدهای محبوب', ['placeholder' => 'مقصدهای محبوب', 'width' => '100%']);

		$acfGroup->contentFields->addTaxonomy('home_popular_destinations_list', 'انتخاب مقصدهای محبوب', [
			'taxonomy' => 'destination',
			'field_type' => 'checkbox',
			'add_term' => 0,
			'save_terms' => 0,
			'load_terms' => 0,
			'return_format' => 'id',
			'width' => '100%',
		]);

		$acfGroup->relationshipFields->addLink('home_popular_destinations_button', 'لینک و متن دکمه مقصدهای محبوب', ['width' => '100%']);

		$acfGroup->layoutFields->addTab('home_travel_goal', 'هدفت از سفر چیه؟');
		$acfGroup->basicFields->addText('home_travel_goal_title', 'هدفت از سفر چیه؟', ['placeholder' => 'هدفت از سفر چیه؟', 'width' => '100%']);

		$acfGroup->layoutFields->addTab('home_your_camera', 'از دوربین شما');
		$acfGroup->basicFields->addText('home_your_camera_title', 'عنوان از دوربین شما', ['placeholder' => 'عنوان از دوربین شما', 'width' => '100%']);
		$acfGroup->contentFields->addTextEditor('home_your_camera_content', 'توضیحات از دوربین شما', ['placeholder' => 'توضیحات از دوربین شما', 'width' => '100%']);
		$acfGroup->relationshipFields->addLink('home_your_camera_button', 'لینک و متن دکمه از دوربین شما', ['width' => '100%']);
		for ($i = 1; $i <= 3; $i++) {
			$acfGroup->contentFields->addImage('home_your_camera_image_' . $i, 'عکس از دوربین شما ' . $i, ['width' => '33%']);
		}

		$acfGroup->layoutFields->addTab('home_future_events', 'سکشن رویداد های آینده');
		$acfGroup->basicFields->addText('home_future_events_title', 'سکشن رویداد های آینده', ['placeholder' => 'میخوای از تور ها و رویدادهای آینده با خبرشی؟', 'width' => '50%']);
		$acfGroup->contentFields->addImage('home_future_events_image', 'عکس سکشن رویداد های آینده', ['width' => '50%']);

		$acfGroup->layoutFields->addTab('home_faq', 'سوالات متداول');
		$acfGroup->basicFields->addText('home_faq_title', 'عنوان سوالات متداول', ['placeholder' => 'سوالات متداول', 'width' => '100%']);
		$acfGroup->relationshipFields->addLink('home_faq_button', 'لینک و متن دکمه سوالات متداول', ['width' => '100%']);

		$acfGroup->layoutFields->addTab('home_blogs', 'بلاگ ها');
		$acfGroup->basicFields->addText('home_blogs_title', 'عنوان بلاگ ها', ['placeholder' => 'بلاگ ها', 'width' => '100%']);
		$acfGroup->relationshipFields->addLink('home_blogs_button', 'لینک و متن دکمه بلاگ ها', ['width' => '100%']);

		//location
		$acfGroup->setLocation('page_template', '==', 'templates/home.php');

		// register group
		$acfGroup->register('home');
	}

	private static function forContactUs()
	{
		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->basicFields->addText('contact_title', 'عنوان');

		$acfGroup->basicFields->addTextarea('under_title', 'متن زیر عنوان', [
			'width' => '50%',
		]);

		$acfGroup->basicFields->addText('contact_box_title', 'عنوان باکس تماس با ما');

		$acfGroup->basicFields->addText('visit_title', 'عنوان آدرس حضوری');
		$acfGroup->basicFields->addText('opening_hours_title', 'عنوان ساعت کاری');
		$acfGroup->basicFields->addText('map_address_title', 'عنوان آدرس روی نرم افزار ها');
		$acfGroup->basicFields->addText('contact_info_title', 'عنوان اطلاعات تماس');

		//location
		$acfGroup->setLocation('page_template', '==', 'templates/contact-us.php');

		//register group
		$acfGroup->register('Contact-Us');
	}

	private static function forTravel()
	{

		//define helper
		$acfGroup = new AcfGroup();

		//add fields

		$acfGroup->layoutFields->addTab('travel_gallery', 'گالری سفر');
		for ($i = 1; $i <= 30; $i++) {
			$acfGroup->contentFields->addFile('travel_images_' . $i, 'عکس یا ویدیو سفر ' . $i, ['width' => '100%']);
			$acfGroup->contentFields->addFile('travel_video_cover_' . $i, 'تصویر پوشش ویدیو سفر(اگر ویدیو باشد باید یک عکس کاور برای آن انتخاب کنید) ' . $i, ['width' => '100%']);
		}

		$acfGroup->layoutFields->addTab('travel_information', 'اطلاعات سفر');
		$acfGroup->basicFields->addText('travel_duration', 'مدت زمان سفر', ['placeholder' => '۸ روز و ۷ شب', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_location', 'لوکیشن سفر', ['placeholder' => 'روسیه', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_start', 'تاریخ رفت', ['placeholder' => '۱۶ بهمن', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_end', 'تاریخ برگشت', ['placeholder' => '۲۳ بهمن', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_flight', 'نوع پرواز', ['placeholder' => 'ماهان', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_accommodation', 'اقامت', ['placeholder' => '۷ شب اقامت در هتل ۴ ستاره', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_meals', 'وعده های غذایی', ['placeholder' => 'تمام صبحانه ها', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_attraction_entry', 'ورودی جاذبه ها', ['placeholder' => 'جدا حساب میشود', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_insurances', 'بیمه مسافرتی', ['placeholder' => 'دارد', 'width' => '50%']);

		$acfGroup->layoutFields->addTab('travel_cost', 'اطلاعات هزینه');
		$acfGroup->basicFields->addText('travel_price', 'هزینه سفر', ['placeholder' => '۱۳۴۹ دلار +ویزا + پرواز', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_visa', 'هزینه ویزا', ['placeholder' => '۱۳۴۹ دلار +ویزا + پرواز', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_price_single', 'هزینه سفر سینگل', ['placeholder' => '۱۳۴۹ دلار +ویزا + پرواز', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_payment', 'هزینه کامل سفر', ['placeholder' => '1200', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_payment_discount', 'هزینه کامل سفر با تخفیف', ['placeholder' => '990', 'width' => '50%']);

		$acfGroup->layoutFields->addTab('travel_details', 'جزئیات کلی');
		$acfGroup->basicFields->addText('travel_subtitle', 'عنوان در جزئیات کلی', ['placeholder' => 'کامل‌ترین تور مسکو و مورمانسک + شفق قطبی + تریبرکا', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_date', 'تاریخ سفر', ['placeholder' => '۱۶ تا ۲۳ بهمن ۱۴۰۴', 'width' => '50%']);
		$acfGroup->basicFields->addText('travel_activities', 'فعالیت‌ها / هایلایت‌های تور', ['placeholder' => 'دو شب شکار شفق قطبی + اقامت رویایی در ایگلوی شیشه‌ای + ...', 'width' => '50%']);
		$acfGroup->contentFields->addTextEditor('travel_accommodation_details', 'توضیحات بیشتر در مورد اقامت', ['placeholder' => 'دو شب شکار شفق قطبی + اقامت رویایی در ایگلوی شیشه‌ای + ...', 'width' => '50%']);
		$acfGroup->contentFields->addTextEditor('travel_experiences', 'گشت‌ها و تجربه‌های منحصربه‌فرد', ['placeholder' => 'دو شب شکار شفق قطبی + اقامت رویایی در ایگلوی شیشه‌ای + ...', 'width' => '50%']);
		$acfGroup->contentFields->addTextEditor('travel_services', 'خدمات تور', ['placeholder' => '• اقامت در هتل‌های ۴ ستاره + ایگلوی شیشه‌ای', 'width' => '50%']);
		$acfGroup->contentFields->addTextEditor('travel_price_details', 'توضیحات بیشتر در مورد هزینه سفر', ['placeholder' => '۱۳۴۹ دلار', 'width' => '50%']);

		$acfGroup->layoutFields->addTab('travel_includes_excludes', 'اطلاعات تور ( شامل / بجز)');

		for ($i = 1; $i <= 40; $i++) {
			$acfGroup->basicFields->addText('travel_feature_label_' . $i, 'عنوان ویژگی ' . $i, [
				'placeholder' => 'مثال: اقامت هتل، صبحانه، ایگلو شیشه‌ای، ...',
				'width' => '50%'
			]);

			$acfGroup->choiceFields->addRadio('travel_feature_status_' . $i, 'وضعیت ویژگی ' . $i, [
				'choices' => ['yes' => 'شامل', 'no' => 'شامل نمیشود'],
				'default_value' => 'no',
				'layout' => 'horizontal',
				'width' => '50%'
			]);
		}

		$acfGroup->layoutFields->addTab('travel_plans', 'پلن سفر');
		$total_days = 20;

		for ($i = 1; $i <= $total_days; $i++) {

			$acfGroup->layoutFields->addAccordion('travel_day_' . $i . '_accordion', 'پلن روز ' . $i);

			$acfGroup->basicFields->addText('travel_day_' . $i . '_title', 'عنوان', ['placeholder' => 'روز ' . $i . ' (سلام مسکو)', 'width' => '100%']);

			$acfGroup->contentFields->addTextEditor('travel_day_' . $i . '_content', 'توضیحات', ['width' => '100%']);

			$acfGroup->layoutFields->addAccordion('travel_day_' . $i . '_accordion_end', '', ['endpoint' => 1]);
		}


		$acfGroup->layoutFields->addTab('travel_checklist_tab', 'چک لیست');
		$acfGroup->contentFields->addTextEditor('travel_checklist', 'چک لیست', ['width' => '100%']);

		$acfGroup->layoutFields->addTab('travel_important_points_tab', 'نکات مهم');
		$acfGroup->contentFields->addTextEditor('travel_important_points', 'نکات مهم', ['width' => '100%']);


		//location
		$acfGroup->setLocation('post_type', '==', 'product');

		// register group
		$acfGroup->register('information');
	}

	private static function forLeader()
	{

		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		for ($i = 1; $i <= 12; $i++) {
			$acfGroup->contentFields->addImage('leader_img_' . $i, 'عکس ' . $i, ['width' => '50%']);
		}

		//location
		$acfGroup->setLocation('post_type', '==', 'leader');

		// register group
		$acfGroup->register('leader-gallery');
	}

	private static function forGallery()
	{

		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		for ($i = 1; $i <= 30; $i++) {
			$acfGroup->contentFields->addImage('gallery_img_' . $i, 'عکس ' . $i, ['width' => '50%']);
		}

		//location
		$acfGroup->setLocation('post_type', '==', 'gallery');

		// register group
		$acfGroup->register('gallery');
	}

	private static function forAbout()
	{
		//define helper
		$acfGroup = new AcfGroup();

		$acfGroup->layoutFields->addTab('about_hero_tab', 'بنر');

		$acfGroup->contentFields->addImage('about_hero_image_desktop', 'عکس بنر (دسکتاپ)', [
			'width' => '50%',
		]);

		$acfGroup->contentFields->addImage('about_hero_image_mobile', 'عکس بنر (موبایل)', [
			'width' => '50%',
		]);

		$acfGroup->layoutFields->addTab('about_gallery_tab', 'گالری تصاویر');

		$acfGroup->basicFields->addText('about_gallery_title', 'عنوان گالری تصاویر', [
			'width' => '100%',
		]);

		$acfGroup->layoutFields->addTab('about_content_tab', 'محتوا (باید سه مورد تکمیل باشد تا نمایش دهد)');

		$acfGroup->basicFields->addText('about_content_title', 'عنوان محتوا', [
			'width' => '100%',
			'required' => true,
		]);

		$acfGroup->contentFields->addTextEditor('about_content_text', 'متن', [
			'width' => '50%',
			'required' => true,
		]);

		$acfGroup->contentFields->addImage('about_content_image', 'عکس محتوا', [
			'width' => '50%',
			'required' => true,
		]);

		//location
		$acfGroup->setLocation('page_template', '==', 'templates/about.php');

		// register group
		$acfGroup->register('about');
	}

	private static function forProductDestination()
	{
		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->contentFields->addImage('product_destination_card_image', 'عکس مقصد جهت نمایش در کارت', [
			'width' => '100%',
		]);

		for ($i = 1; $i <= 3; $i++) {
			$acfGroup->contentFields->addImage('product_destination_image_' . $i, 'عکس مقصد ' . $i, [
				'width' => '33%',
			]);
		}

		//location
		$acfGroup->setLocation('taxonomy', '==', 'destination');

		// register group
		$acfGroup->register('destination');
	}

	private static function forProductCategory()
	{
		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->contentFields->addImage('product_category_card_image', 'عکس دسته بندی جهت نمایش در کارت', [
			'width' => '100%',
		]);

		//location
		$acfGroup->setLocation('taxonomy', '==', 'product_cat');

		// register group
		$acfGroup->register('product_category');
	}

	private static function forEvents()
	{
		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->basicFields->addText('event_date', 'تاریخ رویداد', [
			'width' => '100%',
			'required' => true,
		]);

		$acfGroup->relationshipFields->addLink('event_button', 'لینک و متن دکمه رویداد', [
			'width' => '100%',
			'required' => true,
		]);

		//location
		$acfGroup->setLocation('post_type', '==', 'event');

		// register group
		$acfGroup->register('event');
	}

	private static function forArchiveBlog()
	{
		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->layoutFields->addTab('week_selected', 'منتخب هفته');
		$acfGroup->basicFields->addText('week_selected_title', 'عنوان منتخب هفته', [
			'width' => '100%',
		]);

		$acfGroup->relationshipFields->addPostObject('week_selected_posts', 'منتخب هفته', [
			'post_type' => 'post',
			'multiple' => 1,
			'width' => '100%',
		]);

		$acfGroup->layoutFields->addTab('latest', 'جدیدترین ها');
		$acfGroup->basicFields->addText('latest_title', 'عنوان جدیدترین پست ها', [
			'width' => '100%',
		]);

		$acfGroup->layoutFields->addTab('travelogue', 'بنر سفرنامه');
		$acfGroup->contentFields->addImage('travelogue_image_desktop', 'عکس بنر سفرنامه (دسکتاپ)', ['width' => '100%']);
		$acfGroup->contentFields->addImage('travelogue_image_mobile', 'عکس بنر سفرنامه (موبایل)', ['width' => '100%']);

		$acfGroup->layoutFields->addTab('travelogue_selected', 'نمایش سفرنامه های منتخب');
		$acfGroup->basicFields->addText('travelogue_selected_title', 'عنوان نمایش سفرنامه های منتخب', [
			'width' => '100%',
		]);

		$acfGroup->relationshipFields->addPostObject('travelogue_selected_posts', 'سفرنامه ها را جهت نمایش انتخاب کنید', [
			'post_type' => 'travelogue',
			'multiple' => 1,
			'width' => '100%',
		]);

		$acfGroup->layoutFields->addTab('educational', 'آموزشی');
		$acfGroup->basicFields->addText('educational_title', 'عنوان پست های آموزشی', [
			'width' => '100%',
		]);

		$acfGroup->layoutFields->addTab('lifestyles', 'پست های لایف استایل');
		$acfGroup->basicFields->addText('lifestyles_title', 'عنوان پست های لایف استایل', [
			'width' => '100%',
		]);

		//location
		$acfGroup->setLocation('page_template', '==', 'templates/archive-blog.php');
		// register group
		$acfGroup->register('archive-blog');
	}

	private static function forTravelogue()
	{
		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->basicFields->addText('author_name_travelogue', 'نام نویسنده سفرنامه', [
			'width' => '100%',
			'required' => true,
		]);

		//location
		$acfGroup->setLocation('post_type', '==', 'travelogue');

		// register group
		$acfGroup->register('travelogue');
	}

	private static function forTravelogueWrite()
	{
		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->basicFields->addText('travelogue_write_title', 'عنوان سفرنامه (اگر خالی بگذارید عنوان صفحه را نمایش میدهد)', [
			'width' => '100%',
		]);

		$acfGroup->basicFields->addText('travelogue_write_subtitle', 'زیر عنوان سفرنامه (اینجا داستان خودت رو از سفری که داشتی با بقیه به اشتراک بزار)', [
			'width' => '100%',
		]);

		//location
		$acfGroup->setLocation('page_template', '==', 'templates/travelogue-write.php');

		// register group
		$acfGroup->register('travelogue-write');
	}
}
