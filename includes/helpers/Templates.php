<?php

/**
 * Templates helper
 * for every folder on partial you must create a function
 * @package CyanTheme
 */

namespace Cyan\Theme\Helpers;

class Templates
{

	public static function getPart($partial, $args = array())
	{
		// Set args as query vars so they're available in the template
		if (! empty($args)) {
			set_query_var('args', $args);
		}
		get_template_part('partials/parts/' . $partial);
	}

	public static function getCard($partial, $args = array())
	{
		// Set args as query vars so they're available in the template
		if (! empty($args)) {
			set_query_var('args', $args);
		}
		get_template_part('partials/cards/' . $partial);
	}
}
