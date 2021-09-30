/**
 * Reusable Content & Text Blocks Plugin by Defined Hosting - Editor JavaScript Routines
 * Copyright (c) 2017 Defined Hosting (www.definedhosting.com)
 */

jQuery(function ($) {
	tinymce.create('tinymce.plugins.dh_cb_dialog', {
		init: function (editor, url) {
			editor.addButton('dh_cb_button', {
				icon: 'icons dh-cb-mce-icon',
				tooltip: 'Insert Defined Hosting Content Block',
				cmd: 'dh_cb_plugin_command'
			});

			editor.addCommand('dh_cb_plugin_command', function () {
				$('#dh-cb-mce-popup').dialog('open');
			});
		}

	});

	tinymce.PluginManager.add('dh_cb_button', tinymce.plugins.dh_cb_dialog);

	$('#dh-cb-mce-popup').dialog({
		title: 'Insert Defined Hosting Content Block',
		dialogClass: 'wp-dialog dh-cb-dialog',
		autoOpen: false,
		draggable: false,
		width: 'auto',
		modal: true,
		resizable: false,
		closeOnEscape: true,
		position: {
			my: "center",
			at: "center",
			of: window
		},
		open: function () {
			$('#dh_cb_option_cbid').val('');
			$('#dh_cb_option_para').val('');
			$('#dh_cb_option_use-0').prop('checked', true);
			$('.dh-cb-dialog .ui-widget-overlay').on('click', function () {
				$('#dh-cb-mce-popup').dialog('close');
			});
		},
		create: function () {
			$('.ui-dialog-titlebar-close').addClass('ui-button');
		},
	});

	$('#dh_cb_option_insert').on('click', function (e) {
		e.preventDefault();

		var cb_id = $('#dh_cb_option_cbid').val();
		var cb_slug = $('#dh_cb_option_cbid option:selected').attr('slug');
		var para = $('#dh_cb_option_para').val();
		var use = $('.dh_cb_option_use:checked').val();
		var shortcode = '';

		if (cb_id == '') {
			if (($('#dh_cb_option_cbid').attr('message'))) {
				alert($('#dh_cb_option_cbid').attr('message'));
			}
		} else {

			shortcode = '[dh_content_block';
			if (use == 'slug') {
				shortcode += ' slug="' + cb_slug + '"';
			} else {
				shortcode += ' id="' + cb_id + '"';
			}
			if (para != '') {
				shortcode += ' para="' + para + '"';
			}
			shortcode += ']';

			tinymce.execCommand('mceInsertContent', false, shortcode);
			$('#dh-cb-mce-popup').dialog('close');
		}
	});
});