(function($) {


    /* Init magnific popup */

    $('.mfp-handler').magnificPopup({
        type: 'inline',
        removalDelay: 200,
        showCloseBtn: false,
        callbacks: {
            open: function() {
                const $popup = $.magnificPopup.instance.content;

                /* If there is .input--expandable inside, re-run height calculations (meaning height was zero on document ready because modal window contains was hidden) */
                const $expandableInputs = $popup.find('.input--expandable .input__widget');
                if($expandableInputs.length) {
                    $expandableInputs.each(function() {
                        expandTextarea($(this));
                    });
                }

                /* Focus on the first input, if any  */
                setTimeout(function () {
                    const $firstInput = $popup.find('input').first();
                    if ($firstInput.length) {
                        $firstInput.focus();
                    }
                }, 100);
            }
        }
    });


    $(document).on('click', '.mfp-close-handler', function(event) {
        event.preventDefault();
        $.magnificPopup.close();
    });

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

        if( $carousel.classList.contains('carousel--js-init-companies') ) {
            new Swiper($carousel.querySelector('.swiper'), {
                slidesPerView: "auto",
                slidesPerGroup: 6,
                initialSlide: 6,
                loop: true,
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
            });
        }

        if( $carousel.classList.contains('carousel--js-feedback') ) {
            new Swiper($carousel.querySelector('.swiper'), {
                slidesPerView: 4,
                slidesPerGroup: 2,
                initialSlide: 3,
                spaceBetween: 0, /* В оригинале было 8, пробуем -16 */
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
            });
        }

        if( $carousel.classList.contains('carousel--js-init-tops') ) {
            const feedbackWwiper = new Swiper($carousel.querySelector('.swiper'), {
                slidesPerView: 2,
                slidesPerGroup: 1,
                initialSlide: 1,
                spaceBetween: 8,
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
            });
        }


        /* looped */

        if( $carousel.classList.contains('carousel--js-feedback-looped') ) {
            new Swiper($carousel.querySelector('.swiper'), {
                loop: true,
                slidesPerView: 'auto',
                loopedSlides: 8, // Укажите количество слайдов, которые нужно клонировать (подберите значение экспериментально)

                navigation: {
                    prevEl: $carousel.querySelector('.carousel__button--prev'),
                    nextEl: $carousel.querySelector('.carousel__button--next'),
                    disabledClass: 'carousel__button--disabled',
                },
            });
        }

        if( $carousel.classList.contains('carousel--js-init-tops-looped') ) {
            const feedbackWwiper = new Swiper($carousel.querySelector('.swiper'), {
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,

                spaceBetween: 8,
                navigation: {
                    prevEl: $carousel.querySelector('.carousel__button--prev'),
                    nextEl: $carousel.querySelector('.carousel__button--next'),
                    disabledClass: 'carousel__button--disabled',
                },
            });
        }

    });



    /* Бегущая строка -- галерея на главной
     *
     * Иногда браузер подтупливает и запускает анимацию с разной скоростью.
     * Что-то типа: 100% ширины для анимации в стилях может просчитаться
     * с учётом клонирования в скрипте, или без. Решается явной простановкой
     * класса marquee--init-animation
     */
    $('.marquee').each(function() {
        const $marquee = $(this);
        const $content = $marquee.find('.marquee__content');

        const contentWidth = $content.width();
        const containerWidth = $marquee.width();

        /* Скорость анимации (чтобы не зависела от количества плиток) */
        const baseSpeed = 30;
        const animationDuration = contentWidth / baseSpeed;
        $content.css('animation-duration', animationDuration + 's');

        /* Дублируем контент для создания эффекта бесконечной строки */
        $content.append($content.html());
        $content.append($content.html());

        /* Устанавливаем ширину контента, чтобы он был достаточно длинным */
        $content.css('width', contentWidth * 3 + 'px');

        $marquee.addClass('marquee--init-animation');
    });


    /* FAQ */

    $('.faq__question').on('click', function() {
        const $currentItem = $(this).closest('.faq__item');
        $currentItem.toggleClass('faq__item--expanded');
    });

})(jQuery);
