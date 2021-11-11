{
    let slidersAll = document.querySelectorAll('.slider');
    if(slidersAll.length) {
        slidersAll.forEach(slider => {
            let dataSlider = new Swiper(slider.querySelector('.swiper-container'), {

                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                },
                
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                loop: true,
                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
                },
                pagination: {
                    el: slider.querySelector('.swiper-pagination'),
                    clickable: true,
                },
            });
        })
        
    }
}