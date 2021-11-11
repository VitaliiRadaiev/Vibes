{
    let promoSlider = document.querySelector('.promo__slider');
    if(promoSlider) {
        let dataSlider = new Swiper(promoSlider.querySelector('.swiper-container'), {
            
            effect: 'fade',
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            touchRatio: 0,
            simulateTouch: false,
            //loop: true,
            preloadImages: false,
            lazy: {
            	loadPrevNext: true,
            },
        });
    }
}