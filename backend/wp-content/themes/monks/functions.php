<?php
add_theme_support('title-tag');

// MENUS
include 'functions/register-menus-theme.php';

// THEME SETTINGS 
include 'functions/site-config.php';

// ENDPOINTS PERSONALIZADOS NA API REST 
require_once get_template_directory() . '/functions/custom-endpoints.php';
