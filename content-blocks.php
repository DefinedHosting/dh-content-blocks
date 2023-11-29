<?php
/*
Plugin Name: Defined Hosting | Reusable Content Blocks
Plugin URI:  http://www.definedhosting.co.uk/plugins/
Description: Defined Hosting's Reusable Content & Text Blocks plugin allows you to define modular and repeated blocks of text and other content and place them within pages, posts, sidebars, widgetised areas or anywhere on your site via shortcodes, via the provided widget or via PHP. The plugin is compatible with WPBakery's Page Builder (formerly known as Visual Composer), Avada's Fusion Builder, Beaver Builder and SiteOrigin Page Builder, which means that embedded blocks can have a richer range of elements, layout and styling. Based upon Defined Hosting's original code.
Version:     1.0.2
Author:      Defined Hosting
Author URI:  http://www.definedhosting.co.uk/
License:     GPLv3 or later
*/


defined( 'ABSPATH' ) or die();

define( 'DH_CB_PLUGIN', __FILE__ );
define( 'DH_CB_PLUGIN_PATH', plugin_dir_path( DH_CB_PLUGIN ) );

//require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
require_once( DH_CB_PLUGIN_PATH . 'includes/dh_cb_main.php' );
require_once( DH_CB_PLUGIN_PATH . 'includes/dh_cb_widget.php' );

dh_cb_main::start( DH_CB_PLUGIN );

function dh_content_block_by_id( $id = false, $para = false, $vars = array() ) {
	return dh_cb_main::get_block_by_id( $id, $para, $vars );
}

function dh_content_block_by_slug( $slug = false, $para = false, $vars = array() ) {
	return dh_cb_main::get_block_by_slug( $slug, $para, $vars );
}
