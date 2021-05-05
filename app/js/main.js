$(function () {
    $('.header__burger').on('click', function () {
        $('.menu__btn').toggleClass('active');
    });

    $('.clients__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    $('.news__slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
    });




});