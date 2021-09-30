/**
 * Reusable Content & Text Blocks Plugin by Defined Hosting - Admin JavaScript Routines
 * Copyright (c) 2017 Defined Hosting (www.definedhosting.com)
 */

jQuery(function ($) {
	$(document).ready(function () {
		if ($('.dh_cb_read_only_input').length > 0) {
			$('.dh_cb_read_only_input').prop('readonly', true);
		}

		$('.dh_cb_read_only_input').click(function () {
			$(this).select();
		});

		$('.dh-cb-notice-hide-container').css('display', 'block');

		$('.dh-cb-notice-hide-link').on('click', function (event) {

			event.preventDefault();

			button_id = $(this).attr('id');
			if (button_id) {
				button_id = String(button_id);
				button_prefix = String('dh-cb-notice-hide-');
				button_prefix_length = button_prefix.length;
				if (button_id.substr(0, button_prefix_length) == button_prefix) {
					notice_id = button_id.substr(button_prefix_length, button_id.length - button_prefix_length);
					if (notice_id != '') {
						var data = {
							'action': 'dh_cb_hide_notice',
							'dh-cb-notice-hide': notice_id
						};

						$.post(ajaxurl, data, function (response) {
							if (response == 'ok') {
								$('#dh-cb-notice-' + notice_id).slideUp();
							}
						});
					}
				}
			}
		});
	});
});
