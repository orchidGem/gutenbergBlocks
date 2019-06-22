<?php

function laura_gutenberg_colors()
{
  add_theme_support(
    'editor-color-palette',
    array(
      array(
        'name' => 'White',
        'slug' => 'white',
        'color' => '#ffffff'
      ),
      array(
        'name' => 'Black',
        'slug' => 'black',
        'color' => '#000000'
      ),
      array(
        'name' => 'Yellow',
        'slug' => 'yellow',
        'color' => '#ffcb05'
      )
    )
  );
}

add_action('init', 'laura_gutenberg_colors');

function laura_gutenberg_font_size()
{
  add_theme_support(
    'editor-font-sizes',
    array(
      array(
        'name' => 'Small',
        'slug' => 'small',
        'size' => 14
      ),
      array(
        'name' => 'Normal',
        'slug' => 'normal',
        'size' => 18
      ),array(
        'name' => 'Large',
        'slug' => 'large',
        'size' => 24
      ),
      array(
        'name' => 'Huge',
        'slug' => 'huge',
        'size' => 30
      ),
    )
  );
}

add_action('init', 'laura_gutenberg_font_size');
