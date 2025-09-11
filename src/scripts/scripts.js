(function($) {

    /* Карусели */

    document.querySelectorAll('.carousel').forEach(($carousel) => {

        if( $carousel.classList.contains('carousel--js-init-gallery') ) {
            new Swiper($carousel.querySelector('.swiper'), {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
                autoHeight: true,
                speed: 600,
                pagination: {
                    el: $carousel.querySelector('.carousel__pagination'),
                    type: "fraction", /* можно переделать на bullets или сделать всю секцию false */
                    bulletClass: 'carousel__bullet',
                    bulletActiveClass: 'carousel__bullet--current',
                    clickable: true
                },
                navigation: {
                    prevEl: $carousel.querySelector('.carousel__button--prev'),
                    nextEl: $carousel.querySelector('.carousel__button--next'),
                    disabledClass: 'carousel__button--disabled',
                },
                // breakpoints: {
                //     400: {
                //         slidesPerView: 2,
                //         slidesPerGroup: 2,
                //     },
                //     740: {
                //         slidesPerView: 3,
                //         slidesPerGroup: 3,
                //         spaceBetween: 54,
                //     },
                //     1850: {
                //         slidesPerView: 5,
                //         slidesPerGroup: 5,
                //         spaceBetween: 84,
                //     }
                // },
            });
        }

    });


    $('.remove-cut').on('click', function(e) {
        $('.carousel').toggleClass('carousel--remove-cut');
    })


})(jQuery);
