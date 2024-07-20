$(function() {

$(document).ready(function() {
  $(window).scroll(function() {
    var introPos = $('#intro').offset().top;
    var windowPos = $(window).scrollTop() + $(window).height();

    if (windowPos > introPos) {
      $('.intro__right').addClass('animate');
    }
  });
});

    $(document).ready(function() {
  $(window).scroll(function() {
    var introPos = $('#Company').offset().top;
    var windowPos = $(window).scrollTop() + $(window).height();

    if (windowPos > introPos) {
      $('.intro__right_2').addClass('animate_2');
    }
  });
});

    $(document).ready(function() {
  $(window).scroll(function() {
    var introPos = $('#Contacts').offset().top;
    var windowPos = $(window).scrollTop() + $(window).height();

    if (windowPos > introPos) {
      $('.intro__right_6').addClass('animate_6');
    }
  });
});

    $(document).ready(function() {
  $(window).scroll(function() {
    var introPos = $('#FAQ').offset().top;
    var windowPos = $(window).scrollTop() + $(window).height();

    if (windowPos > introPos) {
      $('.intro__right_5').addClass('animate_5');
    }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    var introPos = $('#features').offset().top;
    var windowPos = $(window).scrollTop() + $(window).height();

    if (windowPos > introPos) {
      $('.features__icon').addClass('animate_f');
    }
  });
});



//===============Fixed Header===============

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkscroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkscroll(scrollPos, introH);
    });


    function checkscroll(scrollPos, introH) {
         if(scrollPos > introH) {
                header.addClass("fixed");
        } else {
                header.removeClass("fixed");
            }

    }

    //===============Smooth Scroll===============

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");


        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 800)
    });



    //===============Nav Toggle===============



    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


});



