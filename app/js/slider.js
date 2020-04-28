//Services slider
$(window).on("load resize orientationchange", function () {
    $(".slider").each(function () {
        var $slider = $(this);
        if ($(window).width() > 768) {
            if ($slider.hasClass("slick-initialized")) {
                $slider.slick("unslick");
            }
        } else {
            if (!$slider.hasClass("slick-initialized")) {
                $slider.slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    dots: true,
                    responsive: [
                        {
                            breakpoint: 550,
                            settings: {
                                slidesToShow: 1.075,
                                slidesToScroll: 1,
                                centerMode: true,
                                adaptiveHeight: true,
                                centerPadding: '30px',
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 420,
                            settings: {
                                slidesToShow: 1.1,
                                slidesToScroll: 1,
                                centerMode: true,
                                adaptiveHeight: true,
                                centerPadding: '30px',
                                infinite: true
                            }
                        },
                    ]
                });
            }
        }
    });
});

//Coaches slider
var $slider = $('.coaches-list');
var $sliderContainer = $('.coaches');
var $sliderCounter = $('.coaches__counter');

if ($slider) {
    var currentSlide;
    var slidesCount;

    var updateSliderCounter = function (slick, currentIndex) {
        var slidesToScroll = slick.slickGetOption("slidesToScroll");
        currentSlide = (slick.slickCurrentSlide() + slidesToScroll) / slidesToScroll;
        slidesCount = slick.slideCount / slidesToScroll;
        $sliderCounter.text(currentSlide + ' of ' + slidesCount)
    };

    $slider.on('init', function (event, slick) {
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
        nextArrow: '<img class="slick-btn slick-next" src="./img/rightArrow.svg" alt="right arrow"/>',
        prevArrow: '<img class="slick-btn slick-prev" src="./img/rightArrow.svg" alt="left arrow"/>',
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.25,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2.15,
                    slidesToScroll: 2,
                    adaptiveHeight: true,
                    dots: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: true
                }
            }
        ]
    });
}

