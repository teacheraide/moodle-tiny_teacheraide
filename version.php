<?php

defined('MOODLE_INTERNAL') || die();


$plugin->release = '0.2.0';
$plugin->version   = 2024112001;
$plugin->requires  = 2024041600;
$plugin->component = 'tiny_teacheraide';

$plugin->dependencies = [
  'local_teacheraide' => 2024112001,
];

$plugin->maturity = MATURITY_ALPHA;
