/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

/*const colors = [
	"#ffb56b",
	"#fdaf69",
	"#f89d63",
	"#f59761",
	"#ef865e",
	"#ec805d",
	"#e36e5c",
	"#df685c",
	"#d5585c",
	"#d1525c",
	"#c5415d",
	"#c03b5d",
	"#b22c5e",
	"#ac265e",
	"#9c155f",
	"#950f5f",
	"#830060",
	"#7c0060",
	"#680060",
	"#60005f",
	"#48005f",
	"#3d005e"
];*/
const colors = ["#fff5e1", "#ffebc2", "#ffd699", "#ffbf73", "#ffa84d", "#ff9232", "#e68a31", "#cc7b30", "#b36d2e", "#99612d", "#80542c", "#66482a", "#4d3c29", "#332f28", "#1a2326", "#141c20", "#10171b", "#0c1115", "#080c0e", "#040609", "#030405", "#000000"
];
circles.forEach(function (circle, index) {
	circle.x = 0;
	circle.y = 0;
	circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
	coords.x = e.clientX;
	coords.y = e.clientY;

});

function animateCircles() {

	let x = coords.x;
	let y = coords.y;

	circles.forEach(function (circle, index) {
		circle.style.left = x - 12 + "px";
		circle.style.top = y - 12 + "px";

		circle.style.scale = (circles.length - index) / circles.length;

		circle.x = x;
		circle.y = y;

		const nextCircle = circles[index + 1] || circles[0];
		x += (nextCircle.x - x) * 0.3;
		y += (nextCircle.y - y) * 0.3;
	});

	requestAnimationFrame(animateCircles);
}

animateCircles();


(function ($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
			parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

		};

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1800px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px'],
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Touch?
	if (browser.mobile) {

		// Turn on touch mode.
		$body.addClass('is-touch');

		// Height fix (mostly for iOS).
		window.setTimeout(function () {
			$window.scrollTop($window.scrollTop() + 1);
		}, 0);

	}

	// Footer.
	breakpoints.on('<=medium', function () {
		$footer.insertAfter($main);
	});

	breakpoints.on('>medium', function () {
		$footer.appendTo($header);
	});

	// Header.

	// Parallax background.

	// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
	if (browser.name == 'ie'
		|| browser.mobile)
		settings.parallax = false;

	if (settings.parallax) {

		breakpoints.on('<=medium', function () {

			$window.off('scroll.strata_parallax');
			$header.css('background-position', '');

		});

		breakpoints.on('>medium', function () {

			$header.css('background-position', 'left 0px');

			$window.on('scroll.strata_parallax', function () {
				$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
			});

		});

		$window.on('load', function () {
			$window.triggerHandler('scroll');
		});

	}

	// Main Sections: Two.

	// Lightbox gallery.
	$window.on('load', function () {

		$('#two').poptrox({
			caption: function ($a) { return $a.next('h3').text(); },
			overlayColor: '#2c2c2c',
			overlayOpacity: 0.85,
			popupCloserText: '',
			popupLoaderText: '',
			selector: '.work-item a.image',
			usePopupCaption: true,
			usePopupDefaultStyling: false,
			usePopupEasyClose: false,
			usePopupNav: true,
			windowMargin: (breakpoints.active('<=small') ? 0 : 50)
		});

	});

})(jQuery);



