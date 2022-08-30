$(function () {
    ////////////////////////////////

    $('.top_close_btn').on('click', function () {
        $('.TopBanner').addClass('on');
        $('.Section01').addClass('on');
    });

    $('.main_slider').slick({
        arrows: false,
    });

    $('.left_slider').slick({
        arrows: false,
        asNavFor: '.right_slider'
    });

    $('.right_slider').slick({
        asNavFor: '.left_slider',
        slidesToShow: 5,
    });


    $('.center_slider').on('init reInit afterChange', function (e, s, c) {
        console.log(s.slideCount);
        var current = $('.center_slider .slick-center');
        console.log(current);
        current.addClass('on').siblings().removeClass('on');
        $('.num').text((c ? c : 0) + 1 + '/' + s.slideCount)
    })


    $('.center_slider').slick({
        centerMode: true,
        centerPadding: '300px',
    });






    $('.slide_handle i:first-child').on('click', function () {
        $('.left_slider').slick('slickPrev')
    })
    $('.slide_handle i:last-child').on('click', function () {
        $('.left_slider').slick('slickNext')
    })


    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on')
    })

    ////////////////////////////////
})