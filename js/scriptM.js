$(document).ready(function () {
	$('.item-body-contacts__title').click(function (event) {
		$(this).toggleClass('.active').nextAll().slideToggle(300);
	});
});

$(document).ready(function () {
	$('.navigation-body-block__burger').click(function (event) {
		$('.navigation-body-block__burger, .navigation-body-block__menu_women').toggleClass('active');
	});
});

$(document).ready(function () {
	$('.navigation-body-block__burgers').click(function (event) {
		$('.navigation-body-block__burgers, .navigation-body-block__menu_men').toggleClass('actives');
	});
});

new Swiper('.title-text-all-categories__swiper', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	slidesPerView: 1,

	hashNavigation: {
		watchState: true,
	},

	effect: 'fade',

	fadeEffect: {
		crossFade: true
	},

	autoplay: {
		delay: 2000,
		stopOnLastSlaide: false,
		disableOnInteraction: false
	},
});

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
