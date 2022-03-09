const sliderData = [{
    num: '1/4'
  },
  {
    num: '2/4'
  },
  {
    num: '3/4'
  },
  {
    num: '4/4'
  }
]

$(document).ready(function () {
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("html, body").animate({
      scrollTop: blockOffset - 50
    }, 500);
  });

  $("#js-hamburger").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("is-active");
    $(".header__list-mob").toggleClass("active-menu");
  });

  setTimeout(() => {
    $("#register_form1 .form_group--button .send-form .button--inner").text('Send Request')
  }, 1500);

  $(".owl-carousel-tablet-top").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    slideTransition: 'linear',
    margin: 50,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
        margin: 20
      },
      991: {
        items: 4
      }
    }
  });

  $(".owl-carousel-tablet-bottom").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    slideTransition: 'linear',
    margin: 50,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
        margin: 20
      },
      991: {
        items: 4
      }
    }
  });

  $(".owl-carousel-mob1").owlCarousel({
    loop: true,
    nav: false,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 20
      },
      600: {
        items: 2,
        margin: 0,
        center: false
      }
    }
  });

  $(".owl-carousel-mob2").owlCarousel({
    loop: true,
    nav: false,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2,
        center: false
      }
    }
  });

  $(".owl-carousel-mob3").owlCarousel({
    loop: true,
    nav: false,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2,
        center: false
      }
    }
  });

  $(".owl-carousel-mob4").owlCarousel({
    loop: true,
    nav: false,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2,
        center: false
      }
    }
  });

  setTimeout(() => {
    const owlNav = $('#slider2 .owl-nav');
    const element = document.createElement('div');
    $(element).addClass('slider__num').html('1/4').appendTo(owlNav);
  })

  let slider1 = $('#slider1');
  let slider2 = $('#slider2');
  let slidesPerPage = 1;
  let syncedSecondary = true;

  slider1.owlCarousel({
    margin: 10,
    animateOut: 'fadeOut',
    smartSpeed: 500,
    loop: true,
    items: 1
  }).on('changed.owl.carousel', syncPosition);

  slider2.on('initialized.owl.carousel', function () {
    slider2.find(".owl-item").eq(0).addClass("current");
  }).owlCarousel({
    items: slidesPerPage,
    slideBy: 1,
    margin: 400,
    nav: true,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: slidesPerPage,
    responsiveRefreshRate: 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    let count = el.item.count - 1;
    let current = Math.round(el.item.index - (el.item.count / 2) - .5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    slider2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    let onscreen = slider2.find('.owl-item.active').length - 1;
    let start = slider2.find('.owl-item.active').first().index();
    let end = slider2.find('.owl-item.active').last().index();

    if (current > end) {
      slider2.data('owl.carousel').to(current, 400, true);
    }
    if (current < start) {
      slider2.data('owl.carousel').to(current - onscreen, 400, true);
    }
  }

  slider2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    let number = $(this).index();
    slider1.data('owl.carousel').to(number, 300, true);
  });

  function syncPosition2(el) {
    if (syncedSecondary) {
      let number = el.item.index;
      slider1.data('owl.carousel').to(number, 100, true);
    }
  }

  slider1.on('changed.owl.carousel', function (event) {
    let num = $('.slider__num');
    const selectNum = sliderData[event.page.index];
    num.text(selectNum.num)
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scroll-up').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }
  })

  $('.scroll-up').on("click", function () {
    $("body, html").animate({
      scrollTop: 400
    });
    return false;
  })

  AOS.init();
});