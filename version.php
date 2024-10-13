<?php

defined('MOODLE_INTERNAL') || die();

$plugin->version   = 2024101201;
$plugin->requires  = 2024041600;
$plugin->component = 'tiny_teacheraide';

$plugin->dependencies = [
  'local_teacheraide' => 2024091002,
];

$plugin->maturity = MATURITY_ALPHA;
