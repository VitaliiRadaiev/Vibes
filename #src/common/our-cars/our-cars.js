{
    const slider = document.querySelector('.our-cars__slider');
    if (slider) {
        let mySwiper;

        function mobileSlider() {
            if (document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
                mySwiper = new Swiper(slider.querySelector('.swiper-container'), {
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false,
                    },
                    slidesPerView: 1,
                    spaceBetween: 40,
                    autoHeight: true,
                    speed: 800,
                    loop: true,
                    pagination: {
                    	el: slider.querySelector('.swiper-pagination'),
                    	clickable: true,
                    },
                });

                slider.dataset.mobile = 'true';

                //mySwiper.slideNext(0);
            }

            if (document.documentElement.clientWidth > 767) {
                slider.dataset.mobile = 'false';

                if (slider.classList.contains('swiper-container-initialized')) {
                    mySwiper.destroy();
                }
            }
        }

        mobileSlider();

        window.addEventListener('resize', () => {
            mobileSlider();
        })
    }
}