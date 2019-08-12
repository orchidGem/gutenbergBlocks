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

/*
* Enqueue styles in back end
*/
function ss_enqueue_editor_styles() {
    add_theme_support('editor-styles');

    add_theme_support( 'align-wide' );

    add_theme_support( 'disable-custom-colors' );


    // Enqueue editor styles.
    add_editor_style( get_template_directory_uri() . '/style-custom-editor.css');
}

add_action( 'after_setup_theme', 'ss_enqueue_editor_styles' );

// register all blocks here
function laura_gutenberg_blocks() {

  wp_register_script(
    'laura-blocks',
    get_template_directory_uri() . '/build/index.js', array( 'wp-blocks', 'wp-editor', 'wp-components' )
  );

  $blocks = array(
    'custom-cta',
    'section',
    'parent',
    'child',
    'gutenberg'
  );

  foreach ($blocks as $key => $block) {
    register_block_type(
      'laura/' . $block,
      array(
        'editor_script' => 'laura-blocks'
      )
    );
  } // endforeach


  // dynamic blocks
  register_block_type(
    'laura/dynamic',
    array(
      'editor_script' => 'laura-blocks',
      'render_callback' => 'render_posts_block'
    )
  );

  register_block_type(
    'laura/dynamicinner',
    array(
      'editor_script' => 'laura-blocks',
      'render_callback' => 'render_dynamic_with_inner'
    )
  );

  register_block_type(
    'laura/hero-banner',
    array(
      'editor_script' => 'laura-blocks',
      'render_callback' => 'render_hero_banner'
    )
  );
}

add_action('init', 'laura_gutenberg_blocks');


function render_posts_block( $attributes ) {

  $posts = get_posts([
    'category' => $attributes['selectedCategory'],
    'posts_per_page' => $attributes['postsPerPage']
  ]);


  ob_start();
  echo "<div class='posts-by-category'>";
  foreach ($posts as $post) {
    echo "<div>";
    echo "<h2>$post->post_title</h2>";
    echo get_the_category_list(', ', '', $post->ID);
    echo get_the_post_thumbnail($post->ID);
    echo "<p>$post->post_excerpt</p>";
    echo "<hr>";
    echo "</div>";
  }
  echo "</div>";

  return ob_get_clean();

}

function render_dynamic_with_inner( $attributes, $content ) {

  ob_start();

  echo "attributes: ";
  var_dump($attributes);

  echo "content: ";
  var_dump($content);


  return ob_get_clean();

}

function render_hero_banner( $attributes, $content ) {

  ob_start();

  include(TEMPLATEPATH . '/template-parts/blocks/hero-banner.php');

  return ob_get_clean();

}
