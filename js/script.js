/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */

$(window).on('load', function() {
    $("#preloader").delay(5000).fadeOut('slow');
    new WOW().init();
    /**
    * OUR TEAM SECTION
    **/
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText:["<i class='lni-chevron-left-circle'></i>","<i class='lni-chevron-right-circle'></i>"],
        responsive:{
            0: {
                items: 1,
            },
            480: {
                items: 2
            }
        }
    });
    
     $("#clients-list").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText:["<i class='lni-chevron-left-circle'></i>","<i class='lni-chevron-right-circle'></i>"],
        responsive:{
            0: {
                items: 2,
            },
            480: {
                items: 4
            },
            768:{
                items: 6
            }
        }
    });
    
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr('aria-valuenow')+"%"
            }, 800);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
    
    /*
    *OUR WORK SECTION
    */
    $("#isotope-container").isotope({});
    
    $("#isotope-filters").on('click','button', function(e){
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });
        
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
    
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', //child item selector, by clicking on it popup will appear.
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
        }
    })
    
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
    
    /*
    *STATS SECTION
    */
    $('.counter').counterUp({
        delay: 10,
        time: 6000
    });
});

$("a.smooth-scroll").click(function(e){
    e.preventDefault();
    var selection_id = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(selection_id).offset().top - 71
    }, 1250, "easeInOutExpo");
})

$(window).on('load', function(){
    //MAP VARIABLES
    var myLatLng = {
        lat: 19.043208,
        lng: 73.010578
    };
    var addressString = "<h5>Address:</h5><p>301 Evergreen CHS., Airoli, Maharashtra, India</p><h5>Contact:</h5><p>9769109985</h5>"
    //1.RENDER MAP
    var map = new google.maps.Map(document.getElementById('map'),{
        center: myLatLng,
        zoom: 13
    });
    
    //2.ADD MAP MARKER
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Click to See Address'
    });
    
    //3. ADD INFORMATION TO MAP
    var infoWindow = new google.maps.InfoWindow({
        content: addressString
    });
    
    //4. SHow The InfoWindow when the user clicks the maps marker
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
});

//HEADER

$(function(){
    showHideNav();
    $(window).scroll(function(){
        showHideNav();
    })
    function showHideNav() {
        if($(window).scrollTop() > 50){
            console.log($(".navbar"));
            $(".navbar").addClass("scrolled-navbar green-nav-top");
            $(".navbar-brand img").attr('src',"img/logo/logo-dark.png");
        }else{
            $(".navbar").removeClass("scrolled-navbar green-nav-top");
            $(".navbar-brand img").attr('src',"img/logo/logo.png");
        }
    }
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });
    $("#mobile-nav-close-btn").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
});

//OR
//$(() => $("#preloader").delay(5000).fadeOut('slow'));