{
    let ourPromiseSlider = document.querySelector('.our-promise__slider');
    if(ourPromiseSlider) {
        let sliderData = new Swiper(ourPromiseSlider.querySelector('.swiper-container'), {
            effect: "coverflow",
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },

            
            observer: true,
            observeParents: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,

            loop: true,
            preloadImages: false,
            lazy: {
            	loadPrevNext: true,
            },

            pagination: {
            	el: ourPromiseSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            watchSlidesVisibility: true,

            breakpoints: {
                320: {
                    coverflowEffect: {
                        scale: 1,
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    },

                },
                768: {
                    coverflowEffect: {
                        scale: 0.8,
                        rotate: 0,
                        stretch: 300,
                        // depth: 100,
                        // modifier: 1,
                        slideShadows: true,
                    },
                },
            },
        });
        
    }
}