<?php
add_theme_support('title-tag');

// MENUS
include 'functions/register-menus-theme.php';

// THEME SETTINGS 
include 'functions/site-config.php';

// ENDPOINTS PERSONALIZADOS NA API REST 
require_once get_template_directory() . '/functions/custom-endpoints.php';

// FORMULÁRIO DE CONTATO
include 'functions/form.php';

// DEIXA A EXPERIÊNCIA DE USAR O WORDPRESS MAIS COMPATÍVEL COM O FRONTEND EM REACT
include 'functions/disabled-functions.php';

// TELA DE LOGIN PERSONALIZADA MONKS
include 'functions/login-screen.php';