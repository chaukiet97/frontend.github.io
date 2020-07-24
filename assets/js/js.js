function viewLibrary() {
    $('.fancybox').fancybox({
        thumbs: { "autoStart": true }
    });
}
function fixmenu() {
    $(window).on('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('.menu, .fix-menu').addClass('navbar-fixed');
        } else {
            $('.menu, .fix-menu').removeClass('navbar-fixed');
        }
    });
}
function activeMenu() {
  	$("#scroll_spy_nav li a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 890, function(){
            window.location.hash = hash;
        });
        }
    }); 
}
function number() {
    $('.countNumber').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });
}
function activeTab() {
    $('.portfolio-filter li').on('click', function(){
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".galary_item").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: 1,
            }
        });
        return false;
    });
    
}
function loadpage() {
    $('.loader').load( function(){
        $(this).addClass("out");
    })
}
function scrolltop() {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn(200);
        } else {
            $('.scroll-top').fadeOut(200);
        }
    });
    $('.scroll-top').on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
}
function libraryGallary() {

    var $container = $('.animate-grid .gallary-thumbs');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.animate-grid .categories a').click(function () {
        $('.animate-grid .categories .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
}

