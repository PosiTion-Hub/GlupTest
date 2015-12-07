$(window).on('load', function () {
    var btns = $('.three-btns').find('div');
    var tabs = $('.ka');
    var key;
    var n = 0;

    key = setInterval(function () {
        n = n > 1 ? 0 : 1;
        btns.eq(n).addClass('t-bg').siblings('div').removeClass('t-bg');
        tabs.eq(n++).fadeIn(500).siblings('div').fadeOut(500);
    }, 2500);
    btns.on('touchstart ', function () {
        clearInterval(key);
        $(this).addClass('t-bg').siblings('div').removeClass('t-bg');
        tabs.eq($(this).index()).fadeIn(500).siblings('div').fadeOut(500);
    });


});
