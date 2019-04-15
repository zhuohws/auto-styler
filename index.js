$(function(){
    // 点击顶部的导航收缩按钮
    $('#toggle-nav').click(function(){
        $('#nav-list').slideToggle();
        $('#toggle-nav').toggleClass('close');
        $('#nav-mask').fadeToggle();
    })
    // 点击遮罩层
    $('#nav-mask').click(function(){
        $('#toggle-nav').triggerHandler('click');
    });
    // 导航列表的点击事件
    var navBarList = $('#nav-list').find('.navi');
    navBarList.each(function(index, ele){
        $(this).click(function(){
            $('#bg-avtive').animate({
                width: $(this)[0].offsetWidth,
                height: $(this)[0].offsetHeight,
                left: $(this)[0].offsetLeft,
                top: $(this)[0].offsetTop 
            }, 300).siblings().each(function(index, bro){
                $(bro).removeClass('active-navi');
            })
            $(this).addClass('active-navi');
        })
    })
    // 初始条件
    let urlParam = $(window)[0].location.search;
    if (urlParam.split('=')[1]){
        $(navBarList[urlParam.split('=')[1]]).trigger('click');
    }  else {
        $(navBarList[0]).trigger('click');
    }
    $('#bg-avtive').css({
        background: '#ff9800'
    });
    $('#nav-list').slideToggle(0);
    $('#toggle-nav').toggleClass('close');
    $('#nav-mask').fadeToggle(0);
    // 窗口缩放事件：
    $(window).resize(function() {
        var activeNav = $('#nav-list').find('.active-navi')[0];
        $('#bg-avtive').animate({
            width: activeNav.offsetWidth,
            height: activeNav.offsetHeight,
            left: activeNav.offsetLeft,
            top: activeNav.offsetTop 
        }, 0);
        if (this.innerWidth >= 550 && $('#nav-list').css('display') == 'none') {
            $('#nav-list').slideDown();
            $('#toggle-nav').addClass('close');
            $('#nav-mask').fadeOut();
        } else if (this.innerWidth < 550 && $('#nav-list').css('display') != 'none') {
            $('#nav-mask').fadeIn();
        }
    });
    // 窗口滑动事件
    $(window).scroll(function(){
        if (this.scrollY <= $('#top-header').innerHeight()) {
            $('#logo').css({
                position: 'relative',
                width: 'auto',
                boxShadow: 'none'
            })
            $('#main-content').css({
                marginTop: 0
            })
        } else if($(window)[0].innerWidth <= 550) {
            $('#logo').css({
                position: 'fixed',
                top: 0,
                width: '100%',
                boxShadow: '0px 0px 5px rgba(0,0,0,.4)',
                background: '#fff'
            })
            $('#main-content').css({
                marginTop: 60
            })
        }
    })
});