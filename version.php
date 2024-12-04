<?php

defined('MOODLE_INTERNAL') || die();


$plugin->release = '1.0.0';
$plugin->version   = 2024120401;
$plugin->requires  = 2024041600;
$plugin->component = 'tiny_teacheraide';

$plugin->dependencies = [
  'local_teacheraide' => 2024120401,
];

$plugin->maturity = MATURITY_BETA;
