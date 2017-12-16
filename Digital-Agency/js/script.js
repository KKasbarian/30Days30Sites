/* Navigation menu trigger for small devices */

function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
}

/* End Navigation menu trigger for small devices */

/* Fixed Navigation */

$(document).ready(function() {
    $('#navigation').scrollToFixed();
  });

  $(document).ready(function() {
    $('#nav-menu').scrollToFixed();
  });

/* End Fixed Navigation */

/* Navigation Change Color and Background on Scroll */

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            navbar = $('#navigation');

        if (scrollPos > 600) {
            navbar.addClass('nav-change');
        } else {
            navbar.removeClass('nav-change');
        }
    });
});

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            navbar = $('#nav-menu');

        if (scrollPos > 400) {
            navbar.addClass('navmenu-change');
        } else {
            navbar.removeClass('navmenu-change');
        }
    });
});

/* End Navigation Change Color and Background on Scroll */

/* Smooth Scroll */

document.addEventListener("DOMContentLoaded", () => {
    const sweetScroll = new SweetScroll({
        trigger: "[data-scroll]",
        duration: 1000,
        delay: 0,
        easing: "easeInOutCubic",
        offset: 0,
        verticalScroll: true,
        horizontalScroll: false,
        stopScroll: true,
        updateURL: false,
        preventDefault: true,
        stopPropagation: true,
        quickMode: false,
    });
  }, false);

/* End Smooth Scroll */

/* Form show and hide */

function myFunction() {
    var x = document.getElementById("form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/* End Form show and hide */

/* Scroll to Top */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 2900) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //
    document.documentElement.scrollTop = 0; //
}

/* End Scroll to Top */