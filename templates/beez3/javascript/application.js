function parseResponse(response) {
	if (response.error) {
		showError(response.error);
	}
	if (response.refresh) {
		window.location.reload(true);
	}
	if (response.redirect) {
		window.location.href = response.redirect;
	}
	if (response.replaces instanceof Array) {
		for (var i = 0, ilen = response.replaces.length; i < ilen; i++) {
			jQuery(response.replaces[i].what).replaceWith(response.replaces[i].data);
		}
	}
	if (response.append instanceof Array) {
		for (i = 0, ilen = response.append.length; i < ilen; i++) {
			jQuery(response.append[i].what).append(response.append[i].data);
		}
	}
	if (response.js) {
		jQuery("body").append(response.js);
	}
	jsFunctionsAssign();
}
function jsFunctionsAssign() {

}
function showError(error) {
	alert(error);
}
// yii submit form
function submitForm(element, url, params) {
	var f = jQuery(element).parents('form')[0];
	if (!f) {
		f = document.createElement('form');
		f.style.display = 'none';
		element.parentNode.appendChild(f);
		f.method = 'POST';
	}
	if (typeof url == 'string' && url != '') {
		f.action = url;
	}
	if (element.target != null) {
		f.target = element.target;
	}

	var inputs = [];
	jQuery.each(params, function (name, value) {
		var input = document.createElement("input");
		input.setAttribute("type", "hidden");
		input.setAttribute("name", name);
		input.setAttribute("value", value);
		f.appendChild(input);
		inputs.push(input);
	});

	// remember who triggers the form submission
	// this is used by jquery.yiiactiveform.js
	jQuery(f).data('submitObject', jQuery(element));

	jQuery(f).trigger('submit');

	jQuery.each(inputs, function () {
		f.removeChild(this);
	});
}
jQuery(function () {
	jQuery(document).on('submit', 'form.ajax-form', function (event) {
		event.preventDefault();
		var that = this;
		jQuery.ajax({
			'cache': false,
			'type': 'POST',
			'dataType': 'json',
			'data': jQuery(that).serialize(),
			'success': function (response) {
				parseResponse(response);
			},
			'error': function (response) {
				alert(response.responseText);
			},
			'beforeSend': function () {

			},
			'complete': function () {

			},
			'url': this.action
		});
		return false;
	});
	jQuery(document).on('click', 'a.submit-form-link', function (event) {
		var that = this;
		if (!jQuery(that).data('confirm') || confirm(jQuery(that).data('confirm'))) {
			submitForm(
				that,
				that.href,
				jQuery(that).data('params')
			);
			return false;
		} else {
			return false;
		}
	});
	jQuery(document).on('click', 'a.ajax-link', function (event) {
		event.preventDefault();
		var that = this;
		if (jQuery(that).data('confirm') && !confirm(jQuery(that).data('confirm'))) {
			return false;
		}
		jQuery.ajax({
			'cache': false,
			'type': 'POST',
			'dataType': 'json',
			'data': jQuery(that).data('params'),
			'success': function (response) {
				parseResponse(response);
			},
			'error': function (response) {
				alert(response.responseText);
			},
			'beforeSend': function () {

			},
			'complete': function () {

			},
			'url': that.href
		});
		return false;
	});
});

jQuery(function () {
	jQuery('.news_list').ready(function () {
		var href = jQuery('.news_list').data('href');

	/*	jQuery.ajax({
			url: href,
			type: 'POST',
			dataType: 'json',
			data: csrf,
			success: parseResponse
		});*/
	});

	jQuery('.menu-transition .text.ignore').on('click', function (e) {
		e.preventDefault();
		return true;
	});
});

function openPopup() {
	jQuery('.hide-info').fadeIn();
	setTimeout(function () {
		jQuery('.hide-info .close .close_i').addClass('active');
	}, 1000)

	jQuery('.hide-info .close').on('click', function (e) {
		e.preventDefault();
		jQuery('.hide-info').fadeOut();
		jQuery('.hide-info .close .close_i').removeClass('active');
	});
}

jQuery(document).ready(function () {
	newsHeight();

	jQuery('#NewsList .items').bind('DOMSubtreeModified', function(){
		newsHeight();
	});
});

function newsHeight() {
	var maxHeight = 0;

	var col = jQuery("#NewsList .col");

	col.each(function () {
		if (jQuery(this).height() > maxHeight) {
			maxHeight = jQuery(this).height();
		}
	});

	col.height(maxHeight);

	console.log('Reload news');
}
