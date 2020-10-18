$('.introduction').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.start').offset().top
    }, 1000)
})

$('.about').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.us').offset().top
    }, 1000)
})

$('.volleyball').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.beachvolleyball').offset().top
    }, 1000)
})

$('.tournaments').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.volleyballtournaments').offset().top
    }, 1000)
})

$('.offer').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.sponsoring').offset().top
    }, 1000)
})

$('.contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contacts').offset().top
    }, 1000)
})

$('.arrow').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.menu').offset().top
    }, 1000)
})

$(document).on('scroll', function () {
    if ($(document).scrollTop() > $('.menu').offset().top) {
        $('div.arrow').addClass('active');
    } else {
        $('div.arrow').removeClass('active');
    }
})