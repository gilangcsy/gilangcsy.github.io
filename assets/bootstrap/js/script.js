

    $('.page-scroll').on('click', function () {

        var href = $(this).attr('href');

        var elemenHref = $(href);

        console.log(href);

        if (href == '#about') {
            $('html, body').animate({
            scrollTop: elemenHref.offset().top - 38
        }, 1000, 'easeInOutExpo');
        } else if (href == '#projects') {
            $('html, body').animate({
            scrollTop: elemenHref.offset().top - 35
        }, 1000, 'easeInOutExpo');
        } else if (href == '#skills') {
            $('html, body').animate({
            scrollTop: elemenHref.offset().top - 50
        }, 1000, 'easeInOutExpo');
        } else if (href == '#contact') {
            $('html, body').animate({
            scrollTop: elemenHref.offset().top - 25
        }, 1000, 'easeInOutExpo');
        } else {
            $('html, body').animate({
            scrollTop: elemenHref.offset().top
        }, 1000, 'easeInOutExpo');
        }
    });

    // Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.navbar-nav');

$(window).on('scroll', function () {
	var cur_pos = $(this).scrollTop() + 200;

	nav_sections.each(function () {
		var top = $(this).offset().top,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			if (cur_pos <= bottom) {
				main_nav.find('a').removeClass('nav-active');
			}
			main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('nav-active');
		}
		if (cur_pos < 300) {
			$(".navbar-nav a:first").addClass('nav-active');
		}
	});
});

// Preloader
$(window).on('load', function () {
	if ($('#preloader').length) {
		$('#preloader').delay(100).fadeOut('slow', function () {
			$(this).remove();
		});
	}
});
