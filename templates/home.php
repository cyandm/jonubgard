<?php /* Template Name: Home */ ?>

<?php

use Cyan\Theme\Helpers\Templates;

get_header(); ?>

<main class="relative">
    <?php Templates::getPart('home/slider'); ?>
    <?php Templates::getPart('home/finder'); ?>
    <?php Templates::getPart('home/travels'); ?>
    <?php Templates::getPart('home/last'); ?>
    <?php Templates::getPart('home/special-offers'); ?>
    <?php Templates::getPart('home/events'); ?>
    <?php Templates::getPart('home/popular-destinations'); ?>
    <?php Templates::getPart('home/travel-categories'); ?>
    <?php Templates::getPart('home/your-camera'); ?>
    <?php Templates::getPart('home/future-events'); ?>
    <?php Templates::getPart('faq'); ?>
    <?php Templates::getPart('home/blogs'); ?>
</main>

<?php get_footer(); ?>