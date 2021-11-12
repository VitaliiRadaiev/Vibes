let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {

	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				}, 1000)
				window.addEventListener('resize', setPedding);
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('_function.js');
	@@include('../common/header/header.js');
	@@include('../common/promo/promo.js');
	@@include('../common/our-promise/our-promise.js');
	@@include('../common/our-passion/our-passion.js');
	@@include('../common/slider/slider.js');
	@@include('../common/team/team.js');
	@@include('../common/side-social/side-social.js');
	@@include('../common/side-panel/side-panel.js');



	let mainLink = document.querySelector('.our-cars__subtitle a');
	if(mainLink) {
		const setTransform = () => {
			let num = 5;
			let top = mainLink.getBoundingClientRect().top;
			let half = (document.documentElement.clientHeight / 2);

			if(document.documentElement.clientWidth > 991) {
				num = 9
			}

			if(top < document.documentElement.clientHeight && top > 0) {
				if(top > (document.documentElement.clientHeight / 2)) {
					let percent = (half - (top - half)) / half * 100;
					mainLink.style.transform = `scale(1.${(num / 100 * percent).toString().replace('.', '')})`;
				} else {
					let percent = (half - (half - top)) / half * 100;
					mainLink.style.transform = `scale(1.${(num / 100 * percent).toString().replace('.', '')})`;
				}
			}
		}
		setTransform();
		window.addEventListener('scroll', setTransform)
	}

	anime.timeline({
		easing: 'easeInOutQuad',
	})
	.add({
		targets: '.promo__body',
		opacity: [0, 1],
		duration: 600,
	    delay: 800,
	})
	.add({
		targets:['.side-social'],
		opacity: [0, 1],
		duration: 400,
	})
	.add({
		targets:['.side-panel'],
		opacity: [0, 1],
		duration: 400,
	}, '-=400')
	.add({
		targets:['.menu__list li'],
		opacity: [0, 1],
		translateY: ['-100%', '0%'],
		delay: (el, i) => 100 * i,
		duration: 200,
	})

	let wow = new WOW({
		boxClass: '_anim',
		offset: 7,
		live: true,
	})
	wow.init();

	const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

});

window.addEventListener('DOMContentLoaded', function () {
	if (isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}

	@@include('files/dynamic_adapt.js');

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
});


@@include('../common/location/location.js');