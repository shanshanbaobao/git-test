

$(function () {
    function add_dot() {
        var $bottom_dot=$('.box1 ol li');
        var myswiper = new Swiper('.box2',{
            pagination: {
                el: '.swiper-pagination',
                click:true
            },
            on: {
                slideChangeTransitionStart: function(){
                    $bottom_dot.eq(myswiper.activeIndex).addClass('on').siblings()
                        .removeClass('on');
                }
            }
        });

        $bottom_dot.each(function (i) {
            $(this).click(function () {
                $(this).addClass('on').siblings().removeClass('on');
                myswiper.slideTo(i, 1000, false);
            })
        })
    }

    add_dot()
});