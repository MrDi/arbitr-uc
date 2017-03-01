jQuery.extend(verge);
var desktop = true,
	tablet = false,
	tabletPortrait = false;
mobile = false;

jQuery(window).resize(function() {
	if (jQuery.viewportW() >= 1024) {
		desktop = true;
		tablet = false;
		tabletPortrait = false;
		mobile = false;
	}
	if (jQuery.viewportW() >= 900 && jQuery.viewportW() <= 1023) {
		desktop = false;
		tablet = true;
		tabletPortrait = false;
		mobile = false;
	}
	if (jQuery.viewportW() >= 768 && jQuery.viewportW() <= 899) {
		desktop = false;
		tablet = false;
		tabletPortrait = true;
		mobile = false;
	} else {
		if (jQuery.viewportW() <= 767) {
			desktop = false;
			tablet = false;
			tabletPortrait = false;
			mobile = true;
		}
	}

}).resize();

function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(
		function() {
			currentHeight = jQuery(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}


/*function fancyboxInit(btn) {
	jQuery.fancybox.open({
		href: btn.attr('href'),
		type: 'inline',
		padding: '0',
		fitToView: false,
		wrapCSS: 'video-position',

		afterShow: function() {
			var player = jQuery(this.href).find('video').get(0);
			player.play();
			var playerOff = function(){
				jQuery.fancybox.close();
			}
			player.addEventListener('ended', playerOff);
			player.addEventListener('pause', playerOff);
			 jQuery(player).on('videoPlayEnd', playerOff);
			 jQuery(player).on('videoPlayPause', playerOff);

		},
		afterClose: function() {
			jQuery('.home-header').removeClass('open-line');
		}
	});
}*/

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.719561, 37.624588],
            zoom: 16
        
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects.add(myPlacemark);
});


jQuery(document).ready(function() {


/*jQuery('.green-text__btn').on('click', function(e){
e.preventDefault();

	
	jQuery('.hide-info').fadeIn();
	setTimeout(function(){
		jQuery('.hide-info .close .close_i').addClass('active');
	}, 1000)
   
})*/
	
	
jQuery('.hide-info .close').on('click', function(e){
	e.preventDefault();
	jQuery('.hide-info').fadeOut();
	 jQuery('.hide-info .close .close_i').removeClass('active');
});

	if (mobile) {
	/*	var lawyerSlider = jQuery('.practice-lawyer__list');
	if(lawyerSlider.children().length > 1) {
		lawyerSlider.on('initialized.owl.carousel', function () {
			lawyerSlider.css("opacity", 1);
		});
 
		lawyerSlider.owlCarousel({
		  margin: 0,
			loop: false,
		   // autoplay: 1000,
			touchDrag: true,
			mouseDrag: true,
			autoplayTimeout: 8000,
			smartSpeed: 2000,
			autoWidth: true,
			items: 1
		});
	}
	else{
		lawyerSlider.css("opacity", 1);
	}*/
	   
		var newsSlider = jQuery('.news-bottom_i .list');
		if(newsSlider.children().length > 1) {
		newsSlider.on('initialized.owl.carousel', function () {
			newsSlider.css("opacity", 1);
		});
 
		newsSlider.owlCarousel({
		  margin: 10,
			loop: false,
			touchDrag: true,
			mouseDrag: true,
			autoWidth: true,
			items: 1
		});
	}
	else{
		newsSlider.css("opacity", 1);
	}
		
	}
	jQuery(".tabs ul li").click(function() {
		var jQuerythis = jQuery(this);
		var index = jQuerythis.index();
		jQuery(".tabs ul li").removeClass("active");
		jQuerythis.addClass("active");
		jQuery(".slider-contact_i ul li").removeClass("active").eq(index).addClass("active");
		jQuery(".place-info .info").removeClass("active").eq(index).addClass("active");
	});

	jQuery(".social__tab ul li").click(function(e) {
		e.preventDefault();
		var jQuerythis = jQuery(this);
		var index = jQuerythis.index();
		jQuery(".social__tab ul li").removeClass("active");
		jQuerythis.addClass("active");
		jQuery(".social .list .list__item").removeClass("active").eq(index).addClass("active");
		if (jQuerythis.hasClass('vk') && !jQuerythis.data('loaded')) {
			VK.Widgets.Group("vk_groups", {
				mode: 0,
				width: "220",
				height: "400",
				color1: 'FFFFFF',
				color2: '2B587A',
				color3: '5B7FA6'
			}, 20003922);
			jQuerythis.data('loaded', 1);
		}
	});

	jQuery(window).load(function() {
		setTimeout(function() {
			jQuery('.preloader').fadeOut();
		}, 1500);
		if (!mobile) {
			setTimeout(function() {
				jQuery('.line-h').addClass('active');
			}, 3000);
			setTimeout(function() {
				jQuery('.line-i').addClass('active');
			}, 2000);
		}
	});

var columns = jQuery(".content__857 .col");
setEqualHeight(columns);

/*jQuery(window).resize(function(){
	columns.css("height", "auto")

}).resize();
	setEqualHeight(".content__857 .col");
*/
	jQuery('.menu-transition').on('click', function(e) {
		e.preventDefault();
		jQuery('body').addClass('menu-open');
		setTimeout(function() {
			jQuery('.close_i').addClass('active')
		}, 1000);
	});

	
	jQuery('.sub-menu .close').on('click', function(e) {
		e.preventDefault();
		jQuery('body').removeClass('menu-open');
		jQuery(this).find('.close_i').removeClass('active');
	});

	
	if (!mobile) {
		jQuery('.item-woman, .col-right .name').on('click', function() {
			jQuery(this).closest('.team').find('.drop-list-w').fadeIn();
			setTimeout(function() {
				jQuery('.drop-list .close_i').addClass('active')
			}, 1000);
		});
		jQuery('.item-man, .col-left .name').on('click', function() {
			jQuery(this).closest('.team').find('.drop-list-m').fadeIn();
			setTimeout(function() {
				jQuery('.drop-list .close_i').addClass('active')
			}, 1000);
		});
		jQuery('.drop-list .close_i').on('click', function() {
			jQuery(this).closest('.team').find('.drop-list').fadeOut();
			jQuery(this).removeClass('active');
		});
	}
	if (mobile) {
		jQuery('.item-woman, .col-right .name').on('click', function() {
			jQuery(this).closest('.list').slideUp();
			jQuery(this).closest('.team').find('.drop-list-w').slideDown();
			setTimeout(function() {
				jQuery('.drop-list .close_i').addClass('active')
			}, 1000);
		});
		jQuery('.item-man, .col-left .name').on('click', function() {
			jQuery(this).closest('.list').slideUp();
			jQuery(this).closest('.team').find('.drop-list-m').slideDown();
			setTimeout(function() {
				jQuery('.drop-list .close_i').addClass('active')
			}, 1000);
		});
		jQuery('.drop-list .close_i').on('click', function() {
			jQuery('.team .list').slideDown();
			jQuery(this).closest('.team').find('.drop-list').slideUp();
			jQuery(this).removeClass('active');
		});
	}


	jQuery('.arrow-icon-up').on('click', function(e) {
		e.preventDefault();
		var body = jQuery("html, body");
		body.animate({
			scrollTop: 0
		}, 2000);
	});
	
		jQuery('.close_i.active').on('click', function(e) {
			jQuery('.map').removeClass('active');
	});
	
	jQuery('.arrow-icon').on('click', function(e) {
		e.preventDefault();
		jQuery.scrollTo('.home-partners',600 );
	});

	jQuery("body").on("click", function(e) {
		if (!jQuery(e.target).closest(".sub-menu").length && !jQuery(e.target).closest(".menu-transition").length) {
			jQuery("body").removeClass('menu-open');
			jQuery('.sub-menu .close .close_i').removeClass('active');
		}
	});

	jQuery(window).scroll(function() {
		var scrolled = jQuery(window).scrollTop();
		  
		if (scrolled > jQuery(window).height()) {
			jQuery("body").removeClass('menu-open');
		}
		if (scrolled > 300) {
			jQuery(".home-header").addClass('active');
		}
		if(scrolled > 50){
			jQuery(".btn-menu .text").addClass('active');
		}else{
			jQuery(".btn-menu .text").removeClass('active');
		}

	});


	jQuery('.play-home').on('click', function(e) {
		e.preventDefault();
		jQuery('.home-header').addClass('open-line');
	});

	jQuery('.list-menu__title').on('click', function(e) {
		e.preventDefault();
		if (jQuery('.list-menu').hasClass("active")) {
			jQuery('.list-menu').removeClass("active").find('.list-menu__drop').slideUp();
		} else {
			jQuery('.list-menu').addClass("active").find('.list-menu__drop').slideDown();
		}
	});

	jQuery('.contact-header .info .item').on('click', function(e) {
		e.preventDefault();
		var parent = jQuery(this).closest('.info');
			jQuery('.map').addClass('show');
			if (jQuery('.map').length) {
				//initi
			}
	
		jQuery('.map .close_i').addClass('active');
	});

	jQuery('.map .close_i').on('click', function(e) {
		e.preventDefault();
//		jQuery('.map').css({'opacity':0,'display':'none'});
		jQuery('.map').removeClass('show');
		jQuery('.map .close_i').removeClass('active');
	});

	jQuery('.list-menu__drop a').on('click', function(e) {
		e.preventDefault();
		var str = jQuery(this).text();
		var text = jQuery(this).closest(".list-menu").find('.list-menu__title');
		text.text(str);
		jQuery(this).closest('.list-menu').removeClass("active").find('.list-menu__drop').slideUp();
	});
	jQuery('.order .inp').on('click', function(e) {
		e.preventDefault();
		jQuery('.order .tel').addClass('active');
		jQuery('.order .inp').addClass('active');
	});



    if (jQuery(window).width() > 1025) {
        var s = skrollr.init({
            forceHeight: false
        });
    };
	if (!mobile){

		jQuery('.btn-menu').midnight();
	}

	jQuery(window).resize(function() {
		var wh = jQuery(window).height();
		jQuery('.page-404').height(wh);
		if (jQuery(window).width() > 1025){
			 jQuery('.slider-home_i').css('top', (wh-jQuery('.slider-home_i').height())-97);
		}
	}).resize();


	
	
	

	var inputs = document.getElementById('inputs');
	var addButton = document.getElementById('add-input');
	if (addButton) {
		addButton.onclick = function() {
			var input = document.createElement('input');
			input.type = 'text';
			input.placeholder = 'New Input';
			inputs.appendChild(input);
			document.placeholderPolyfill(input);
		};
	}
});

function initialize(lat, lng) {
	var myLatlng = new google.maps.LatLng(lat, lng);
	var mapOptions = {
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: true,
		panControl: false,
		styles: [
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 18
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 40
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 19
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
		]
	}
]
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var image = 'img/icons/marker.png';
	var beachMarker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		map: map,
		icon: image
	});

}

jQuery(function(jQuery){
	jQuery(".phone-mask").mask("+7 (999) 999-99-99");
});
