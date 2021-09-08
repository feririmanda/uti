$(window).on("load", function () {
  // -------------- preloader ---------------------
  $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  // ------------------ Navbar Shrink ---------------
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  // --------------- service Carousel -----------------
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // --------------- Page Scrolling - ScrollIt -----------------
  $.scrollIt({
    topOffset: -50,
  });

  // ---------------- Navbar Collapse ------------------------
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // ------------------- Toggle Theme - Light and Dark Mode --------------------
  function toggleTheme() {
    if (localStorage.getItem("feri-theme") !== null) {
      if (localStorage.getItem("feri-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }

  toggleTheme();

  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("feri-theme", "dark");
    } else {
      localStorage.setItem("feri-theme", "light");
    }
    updateIcon();
  });

  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }
});
