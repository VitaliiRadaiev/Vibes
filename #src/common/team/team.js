{
    let teamSlider = document.querySelector('.team__slider');
    if(teamSlider) {
        
let slider_about = new Swiper(teamSlider.querySelector('.swiper-container'), {

	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 50,
	speed: 800,

	loop: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
	pagination: {
		el: teamSlider.querySelector('.swiper-pagination'),
		clickable: true,
	},

});

    }
}