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
                    // centerMode: true,
                    dots: true
                    // mobileFirst: true
                });
            }
        }
    });
});

$(".coaches-list").slick({
    nextArrow: '<img class="slick-btn slick-next" src="./img/rightArrow.svg" alt="right arrow"/>',
    prevArrow: '<img class="slick-btn slick-prev" src="./img/rightArrow.svg" alt="left arrow"/>',
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                dots: true
            }
        }
    ]
});

$(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: "unslick",
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false
        },
        {
            breakpoint: 376,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    ]
});
