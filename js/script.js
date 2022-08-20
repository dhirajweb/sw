/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */

$(window).on("load", function () {
  $("#preloader").delay(500).fadeOut("slow");
  new WOW().init();
  /**
   * OUR TEAM SECTION
   **/
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='lni-chevron-left-circle'></i>",
      "<i class='lni-chevron-right-circle'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
    },
  });

  $("#clients-list").owlCarousel({
    items: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: false,
    nav: true,
    dots: false,
    navText: [
      "<i class='lni-chevron-left-circle'></i>",
      "<i class='lni-chevron-right-circle'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
  });

  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          800
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );

  /*
   *OUR WORK SECTION
   */
  $("#isotope-container").isotope({});

  $("#isotope-filters").on("click", "button", function (e) {
    var filterValue = $(this).attr("data-filter");
    $("#isotope-container").isotope({
      filter: filterValue,
    });

    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", //child item selector, by clicking on it popup will appear.
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
    },
  });

  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });

  /*
   *STATS SECTION
   */
  $(".counter").counterUp({
    delay: 10,
    time: 6000,
  });
});

$("a.smooth-scroll").click(function (e) {
  e.preventDefault();
  var selection_id = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(selection_id).offset().top - 31,
    },
    1250,
    "easeInOutExpo"
  );
});

$(window).on("load", function () {
  //MAP VARIABLES
  var myLatLng = {
    lat: 19.043208,
    lng: 73.010578,
  };
  var addressString =
    "<h5>Address:</h5><p>301 Evergreen CHS., Airoli, Maharashtra, India</p><h5>Contact:</h5><p>9769109985</h5>";
  //1.RENDER MAP
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 13,
  });

  //2.ADD MAP MARKER
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Click to See Address",
  });

  //3. ADD INFORMATION TO MAP
  var infoWindow = new google.maps.InfoWindow({
    content: addressString,
  });

  //4. SHow The InfoWindow when the user clicks the maps marker
  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
});

//HEADER

$(function () {
  showHideNav();
  $(window).scroll(function () {
    showHideNav();
  });
  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      console.log($(".navbar"));
      $(".navbar").addClass("scrolled-navbar green-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
    } else {
      $(".navbar").removeClass("scrolled-navbar green-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png");
    }
  }
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
  });
  $("#mobile-nav-close-btn").click(function () {
    $("#mobile-nav").css("height", "0%");
  });
});

$(document).ready(function () {
  $("#team-right").owlCarousel({
    items: 2,
    autoplay: true,
    loop: true,
    margin: 20,
    nav: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    dots: false,
    navText: [
      '<i class="lni-chevron-left-circle"></i>',
      '<i class="lni-chevron-right-circle"></i>',
    ],
  });
});

$(document).ready(function () {
  $(".testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    margin: 20,
    loop: true,
    nav: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    dots: false,
    navText: [
      '<i class="lni-chevron-left-circle"></i>',
      '<i class="lni-chevron-right-circle"></i>',
    ],
  });
});

function sendEmail(e) {
  console.log(document.getElementById("contact-subject").value);
  let email = "sw.advertising@gmail.com";
  let body = document.getElementById("contact-body").value;
  let subject = document.getElementById("contact-subject").value;
  let mailto_link =
    "mailto:" +
    email +
    "?subject=" +
    subject +
    "&body=" +
    encodeURIComponent(body);
  window.location.href = mailto_link;
}

// code to stop video from playing when modal is closed

$("#modal-client-1").on("hidden.bs.modal", function (e) {
  $("#modal-client-1 iframe").attr(
    "src",
    $("#modal-client-1 iframe").attr("src")
  );
});

$("#modal-client-2").on("hidden.bs.modal", function (e) {
  $("#modal-client-2 iframe").attr(
    "src",
    $("#modal-client-2 iframe").attr("src")
  );
});

$("#modal-client-3").on("hidden.bs.modal", function (e) {
  $("#modal-client-3 iframe").attr(
    "src",
    $("#modal-client-3 iframe").attr("src")
  );
});

$("#modal-client-4").on("hidden.bs.modal", function (e) {
  $("#modal-client-4 iframe").attr(
    "src",
    $("#modal-client-4 iframe").attr("src")
  );
});

$("#modal-client-5").on("hidden.bs.modal", function (e) {
  $("#modal-client-5 iframe").attr(
    "src",
    $("#modal-client-5 iframe").attr("src")
  );
});

$("#modal-client-6").on("hidden.bs.modal", function (e) {
  $("#modal-client-6 iframe").attr(
    "src",
    $("#modal-client-6 iframe").attr("src")
  );
});

$("#modal-client-7").on("hidden.bs.modal", function (e) {
  $("#modal-client-7 iframe").attr(
    "src",
    $("#modal-client-7 iframe").attr("src")
  );
});

$("#modal-client-8").on("hidden.bs.modal", function (e) {
  $("#modal-client-8 iframe").attr(
    "src",
    $("#modal-client-8 iframe").attr("src")
  );
});

$("#modal-client-9").on("hidden.bs.modal", function (e) {
  $("#modal-client-9 iframe").attr(
    "src",
    $("#modal-client-9 iframe").attr("src")
  );
});

$("#modal-client-10").on("hidden.bs.modal", function (e) {
  $("#modal-client-10 iframe").attr(
    "src",
    $("#modal-client-10 iframe").attr("src")
  );
});

$("#modal-client-11").on("hidden.bs.modal", function (e) {
  $("#modal-client-11 iframe").attr(
    "src",
    $("#modal-client-11 iframe").attr("src")
  );
});

$("#modal-client-12").on("hidden.bs.modal", function (e) {
  $("#modal-client-12 iframe").attr(
    "src",
    $("#modal-client-12 iframe").attr("src")
  );
});
//OR
//$(() => $("#preloader").delay(5000).fadeOut('slow'));
