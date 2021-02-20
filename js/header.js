var isOpen = false

$(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.mobile-bg').toggleClass('is-active');
        isOpen = !isOpen;

        if (isOpen){
            $('.headerNav').css('left','0');
        }else{
            $('.headerNav').css('left','100%');
        }
        return false;
    });

    //背景をクリックしたときの処理
    $('.headerNav').click(function(){
        console.log('tap');
        isOpen = false;
        $('.hamburger').removeClass('is-active');
        $('.mobile-bg').removeClass('is-active');
        $('.headerNav').css('left','100%');
    });
});

var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        if ((!isOpen)&&(winScrollTop >= 200)) {
            $('header').addClass('hide');
            $('.sidebar_toc').css('top','3rem');
        };
    } else {
        $('header').removeClass('hide');
        $('.sidebar_toc').css('top','6rem');
    }
    startPos = winScrollTop;
});