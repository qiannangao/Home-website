
var mySwiper = new Swiper('.swiper-big', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    autoplay:true,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'act',
    },
})
var mySwiper2 = new Swiper('.swiper-mid', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    autoplay:true,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'woodTab-act',

    },
})
var mySwiper3 = new Swiper('.swiper-little', {
    loop: true,
    autoplay:true,
    slidesPerView: 3.5,
    spaceBetween: 100,
    // slidesPerGroup: 3.5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated_animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();

// 页面滚动
var floorC = $(".floor-c");
var floorTitle = $(".floor-title");
var floorLine = $('.floor-left line')
var floorIntro = $('.floor-introList')
var wood = $(".wood")
var woodTitle = $('.wood-title')
var swiperBig = $('.swiper-big');
var life = $('.life')
var lifeTitle = $(".life-title")
var health = $('.health')
window.onscroll = function () {
    if (window.scrollY - 200 > 0) {
        floorC.addClass('wow animate__fadeInUp animate__animated');
        floorTitle.addClass('wow animate__fadeInLeft animate__animated');
        floorLine.addClass('wow animate__fadeInLeft animate__animated');
        floorIntro.addClass('wow animate__animated animate__fadeInUp')


    }
    if (window.scrollY - 900 > 0) {
        wood.addClass('wow animate__fadeInRight animate__animated')
        floorC.removeClass('wow animate__fadeInUp animate__animated');
        woodTitle.addClass('wow animate__slideInUp animate__animated')

    }
    if (window.scrollY - 1900 > 0) {
       
        wood.removeClass('wow animate__fadeInRight animate__animated')
        life.addClass('wow animate__fadeInLeft animate__animated')
        lifeTitle.addClass('wow animate__fadeInBottomLeft animate__animated')
    }
    if (window.scrollY - 2600 > 0) {

        life.removeClass('wow animate__fadeInLeft animate__animated')
        health.addClass('wow animate__fadeInRight animate__animated')
    }
}


// 
var tabItem = $('.tab-item');
var tabitemA = $('.tab-item a');
tabitemA.mouseenter(function () {
    $(this).addClass('wow animate__headShake animate__animated');
    this.style.color = '#BCA065'
})
tabitemA.mouseleave(function () {
    $(this).removeClass('wow animate__headShake animate__animated');
    this.style.color = 'black'
})
// 地板
var floorRight = $('.floor-right');
var floorImg = $('.floor-img');
var floorBtn = $('.floor-btn');
var floorMask = $('.floor-mask');
floorRight.mouseenter(function () {
    floorImg[0].style.left = '20px';
    floorImg[0].style.top = '20px';
    floorMask[0].style.opacity = '0.3';
    floorBtn[0].style.display = 'block'
    floorBtn.addClass('wow  animate__slideInDown animate__animated')
})
floorRight.mouseleave(function () {
    floorImg[0].style.left = '0px';
    floorImg[0].style.top = '0px';
    floorMask[0].style.opacity = '0';
    floorBtn.removeClass('wow  animate__slideInDown animate__animated')
    floorBtn[0].style.display = 'none'
})
// 生活
var lifeImgAll = $('.life-imgAll')
var lifeImgqs = $('.life-imgqs');
var lifeImggd = $('.life-imggd');
var lifeImgxd = $('.life-imgxd');
lifeImgxd.addClass('life-imgW')
lifeImgAll.mouseenter(function(){
$(this).addClass('life-imgW').siblings().removeClass('life-imgW')
} )
lifeImgAll.mouseleave(function(){
$(this).removeClass('life-imgW')
lifeImgxd.addClass('life-imgW')
} )
//    健康
var healthImgL = $('.health-imgL');
var healthImgR = $('.health-imgR')

var healthS = $(".health-serviceItem");
var healthLine = $(".serviceItem-line");
var healthP = $(".serviceItem-bottom p")
healthS.mouseenter(function () {
    $(this).addClass('health-act wow animate__bounceIn animate__animated ')
    $('.health-act').find('.serviceItem-line')[0].style.backgroundColor = '#fff';


})
healthS.mouseleave(function () {
    $(this).removeClass('health-act');
    healthLine[0].style.backgroundColor = 'grey'

})
var messageItem=$(".message-item");
console.log(mySwiper3.activeIndex);
$('.meaasge-item:eq(mySwiper3.activeIndex)').addClass('message-act')


