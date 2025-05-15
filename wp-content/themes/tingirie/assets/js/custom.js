//spit cahracters
Splitting();

const isTouchDevice =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");

  let wow = new WOW({
    animateClass: "animated",
  });
  wow.init();

  $(document).ready(function () {
    $(".hamburger").on("click", () => {
      $(".fullscreen").toggleClass("active");
    });

    $(".close").on("click", () => {
      $(".fullscreen").removeClass("active");
    });
  });

  // SVG IMAGE TO SVG CODE WORKS ON LIVE WEBSITE.
  $(function () {
    jQuery("img.svg").each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      jQuery.get(
        imgURL,
        function (data) {
          var $svg = jQuery(data).find("svg");
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }
          $svg = $svg.removeAttr("xmlns:a");
          if (
            !$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
          ) {
            $svg.attr(
              "viewBox",
              "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
            );
          }
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  });

  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  // if (!isTouchDevice) {
  //     const scrollTween = gsap.to(".bar", { yPercent: 400, ease: "none", paused: true });

  //     function updateScrollBar() {
  //         scrollTween.progress(scrollY / (document.body.scrollHeight - innerHeight));
  //     }
  //     window.addEventListener("resize", updateScrollBar);
  //     window.addEventListener("scroll", updateScrollBar);
  // } else {
  //     $(".barContainer").remove();
  //     $(".cursor").remove();
  // }

  gsap.registerPlugin(ScrollToPlugin);

//   const links = document.querySelectorAll("a");

  //   links.forEach((link) => {
  //     link.addEventListener("click", (event) => {
  //       const targetId = link.getAttribute("href");

  //       // Check if the href attribute contains an id (starts with '#')
  //       if (targetId && targetId.startsWith("#")) {
  //         event.preventDefault();
  //         const targetElement = document.querySelector(targetId);

  //         // Scroll to the target section
  //         gsap.to(window, { duration: 1, scrollTo: targetElement });
  //       }
  //     });
  //   });
});

$("document").ready(function () {
  // LOADER
  $({ property: 0 }).animate(
    { property: 100 },
    {
      duration: 2000,
      step: function (now) {},
      complete: function () {
        setTimeout(function () {
          $(".loader").addClass("hide");
          $("body").addClass("loaded");
        }, 500);
      },
    }
  );

  if (!isTouchDevice) {
    ScrollTrigger.normalizeScroll(true);
    var smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 5,
    });
  }

  // BANNER ANIMATION
  var tl = gsap.timeline();

  const scrollTween = gsap.to(".bar", {
    yPercent: 400,
    ease: "none",
    paused: true,
  });

  function updateScrollBar() {
    scrollTween.progress(scrollY / (document.body.scrollHeight - innerHeight));
  }
  window.addEventListener("resize", updateScrollBar);
  window.addEventListener("scroll", updateScrollBar);

  // ON SCROLL ADD CLASS AND REMOVE CLASS
  var a = 0;
  $(window).on("scroll", function () {
    var current_pull = $(window).scrollTop();
    if (current_pull > 250) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
    var a = 1;
  });

  $("#spanYear").html(new Date().getFullYear());

  var bannerslider = new Swiper(".banner-slider", {
    loop: true,
    effect: "fade",
    // effect:"cards",
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banner-slider .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} custom-bullet-${index}"></span>`;
      },
    },
  });

  var newsslider = new Swiper(".news-slider", {
    loop: true,
    effect: "fade",

    speed: 1000,
    autoplay: true,
    navigation: {
      nextEl: ".news-cont .swiper-button-next",
      prevEl: ".news-cont .swiper-button-prev",
    },
  });

  var menuslider = new Swiper(".menu-slider", {
    loop: true,
    effect: "fade",
    speed: 1000,
    // direction: 'vertical',

    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".menu-slider-grp .swiper-pagination",
      clickable: true,
    },
  });

  var testimonialslider = new Swiper(".testimonial-slider", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 2000,
    autoplay: false,
    loop: true,
    slidesPerView: 3,
    disableOnInteraction: true,
    navigation: {
      nextEl: ".testi-cont .swiper-button-next",
      prevEl: ".testi-cont .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  const fadeInLeft = document.querySelectorAll(".fade-in-left");
  fadeInLeft.forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        scrub: true,
        start: "top 90%",
        end: "80% 60%",
        ease: "easeIn",
        // markers: true,
      },
      opacity: 1,
      x: 0,
    });
  });

  const fadeInright = document.querySelectorAll(".fade-in-right");
  fadeInright.forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        scrub: true,
        start: "top 90%",
        end: "80% 60%",
        ease: "easeIn",
        // markers: true,
      },
      opacity: 1,
      x: 0,
    });
  });

  tl.to(".banner", {
    scrollTrigger: {
      trigger: ".about-sec",
      scrub: true,
      start: "top 70%",
      end: "50% 30%",
      // markers: true,
    },

    rotateX: "15deg",
    scale: 0.95,
  });

  //  crown roattion

  tl.from(
    ".about-sec .logo-icon-right",
    {
      scrollTrigger: {
        trigger: ".about-sec",
        scrub: true,
        start: "top 50%",
        end: "90% 50%",
        // markers: true,
      },
      top: "100px",
      // right:"10%",
      // rotate:"30deg",
      opacity: 0.1,
    },
    "rotate-icon"
  );

  tl.from(
    ".about-sec .logo-icon-left",
    {
      scrollTrigger: {
        trigger: ".about-sec",
        scrub: true,
        start: "top 50%",
        end: "90% 50%",
        // markers: true,
      },
      bottom: "100px",
      // left:"20%",
      // rotate:"30deg",
      opacity: 0.1,
    },
    "rotate-icon"
  );

  // event section

  tl.from(
    ".event-sec .logo-icon-right",
    {
      scrollTrigger: {
        trigger: ".event-sec",
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
      },
      bottom: "150",
      // right:"5%",
      // rotate:"20deg",
      opacity: 0.1,
    },
    "rotate-icon2"
  );

  tl.from(
    ".event-sec .logo-icon-left",
    {
      scrollTrigger: {
        trigger: ".event-sec",
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
      },
      top: "100px",
      // left:"100px",
      // rotate:"20deg",
      opacity: 0.1,
    },
    "rotate-icon2"
  );

  tl.from(
    ".order-sec .logo-icon-right",
    {
      scrollTrigger: {
        trigger: ".order-sec",
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
        //markers: true,
      },
      bottom: "100px",
      // right:"10%",
      // rotate:"20deg",
      opacity: 0.1,
    },
    "rotate-icon2"
  );

  tl.from(
    ".order-sec .logo-icon-left",
    {
      scrollTrigger: {
        trigger: ".order-sec",
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
      },
      top: "100px",
      // left:"10%",
      // rotate:"20deg",
      opacity: 0.1,
    },
    "rotate-icon2"
  );

  if (window.innerWidth > 767) {
    gsap.from(".reservation-sec .reservation-bg img", {
      scrollTrigger: {
        trigger: ".reservation-sec",
        scrub: true,
        start: "top 80%",
        end: "bottom top",
        //markers: true,
      },
      ease: "linear",
      y: -140,
      scale: 1.1,
    });
  }

  // about page animation
  if (window.innerWidth > 992) {
    tl.to(".in-banner .banner-img img", {
      scrollTrigger: {
        trigger: ".in-banner",
        scrub: true,
        start: "top top",
        end: "bottom 20%",
        // markers: true,
      },
      y: "-150px",
    });
  }

  tl.from(".our-story-sec .video-div", {
    scrollTrigger: {
      trigger: ".our-story-sec",
      scrub: true,
      start: "50% 90%",
      end: "50% 50%",
      // markers: true,
    },
    scale: 0.9,
  });

  gsap.from(".our-story-sec .horizontal-text", {
    scrollTrigger: {
      trigger: ".our-story-sec",
      scrub: true,
      start: "top bottom",
      end: "bottom 10%",
      //markers: true,
    },
    ease: "linear",
    x: -1000,
  });

  gsap.from(".irie-people-sec .people-img img", {
    scrollTrigger: {
      trigger: ".irie-people-sec",
      scrub: true,
      start: "top 60%",
      end: "bottom 50%",
      //markers: true,
    },
    scale: 1.15,
  });

  //  custom dropdown script

  const selectedAll = document.querySelectorAll(".wrapper-dropdown");

  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    const optionsList = selected.querySelectorAll(".wrapper-dropdown li");

    selected.addEventListener("click", () => {
      let arrow = selected.children[1];

      if (selected.classList.contains("active")) {
        handleDropdown(selected, arrow, false);
      } else {
        let currentActive = document.querySelector(".wrapper-dropdown.active");

        if (currentActive) {
          let anotherArrow = currentActive.children[1];
          handleDropdown(currentActive, anotherArrow, false);
        }

        handleDropdown(selected, arrow, true);
      }
    });

    // update the display of the dropdown
    for (let o of optionsList) {
      o.addEventListener("click", () => {
        selected.querySelector(".selected-display").innerHTML = o.innerHTML;
      });
    }
  });

  // check if anything else ofther than the dropdown is clicked
  window.addEventListener("click", function (e) {
    if (e.target.closest(".wrapper-dropdown") === null) {
      closeAllDropdowns();
    }
  });

  // close all the dropdowns
  function closeAllDropdowns() {
    const selectedAll = document.querySelectorAll(".wrapper-dropdown");
    selectedAll.forEach((selected) => {
      const optionsContainer = selected.children[2];
      let arrow = selected.children[1];

      handleDropdown(selected, arrow, false);
    });
  }

  // open all the dropdowns
  function handleDropdown(dropdown, arrow, open) {
    if (open) {
      arrow.classList.add("rotated");
      dropdown.classList.add("active");
    } else {
      arrow.classList.remove("rotated");
      dropdown.classList.remove("active");
    }
  }
});

// $(".exp-list > li > a").click(function (e) {
//     e.preventDefault(); // Prevent the default anchor tag behavior (e.g., navigating to a new page)

//     // Check if the clicked 'a' tag's parent 'li' already has the "active" class
//     const $parentLi = $(this).closest("li");
//     const isActive = $parentLi.hasClass("active");

//     // Remove the "active" class from all li elements
//     $(".exp-list > li").removeClass("active");

//     // Slide up all text boxes
//     $(".exp-list > li .text-box").slideUp();

//     // If the clicked 'a' tag's parent 'li' did not have the "active" class, apply it and slide down its text box
//     if (!isActive) {
//       $parentLi.addClass("active");
//       $parentLi.find(".text-box").slideDown();
//     }
//   });

//     $(document).ready(function () {
//             // Show the first element open by default
//             const firstLi = $(".exp-list > li").first();
//             firstLi.addClass("active");
//             firstLi.find(".text-box").slideDown();

//             $(".exp-list > li > a").click(function (e) {
//                 e.preventDefault(); // Prevent the default anchor tag behavior (e.g., navigating to a new page)

//                 // Check if the clicked 'a' tag's parent 'li' already has the "active" class
//                 const $parentLi = $(this).closest("li");
//                 const isActive = $parentLi.hasClass("active");

//                 // Remove the "active" class from all li elements
//                 $(".exp-list > li").removeClass("active");

//                 // Slide up all text boxes
//                 $(".exp-list > li .text-box").slideUp();

//                 // If the clicked 'a' tag's parent 'li' did not have the "active" class, apply it and slide down its text box
//                 if (!isActive) {
//                     $parentLi.addClass("active");
//                     $parentLi.find(".text-box").slideDown();
//                 }
//             });
//         });
//

// accordian script 

// $(document).ready(function () {
//   function activateListItem(targetId) {
//     const targetElement = $(targetId);
//     const allMenuId = $("#allmenuid");

//     if (targetElement.length && allMenuId.length) {
//       $(".exp-list > li").removeClass("active");
//       $(".exp-list > li .text-box").slideUp();

//       targetElement.addClass("active");
//       targetElement.find(".text-box").slideDown();

//       $("html, body").animate(
//         {
//           scrollTop: allMenuId.offset().top,
//         },
//         500
//       );
//     }
//   }

//   if (!window.location.hash) {
//     const firstLi = $(".exp-list > li").first();
//     firstLi.addClass("active");
//     firstLi.find(".text-box").slideDown();
//   }

//   $(".exp-list > li > a").click(function (e) {
//     e.preventDefault();
//     const $parentLi = $(this).closest("li");
//     const targetId = $(this).attr("href");
//     const allMenuId = $("#allmenuid");

//     const isActive = $parentLi.hasClass("active");

//     $(".exp-list > li").removeClass("active");
//     $(".exp-list > li .text-box").slideUp();

//     if (!isActive) {
//       $parentLi.addClass("active");
//       $parentLi.find(".text-box").slideDown();
//     }

//   });

// });

$(document).ready(function () {
    // Show the first element open by default
    const firstLi = $(".exp-list > li").first();
    firstLi.addClass("active");
    firstLi.find(".text-box").slideDown();

    $(".exp-list > li > a").click(function (e) {
        e.preventDefault(); // Prevent the default anchor tag behavior (e.g., navigating to a new page)

        // Check if the clicked 'a' tag's parent 'li' already has the "active" class
        const $parentLi = $(this).closest("li");
        const isActive = $parentLi.hasClass("active");

        // Remove the "active" class from all li elements
        $(".exp-list > li").removeClass("active");

        // Slide up all text boxes
        $(".exp-list > li .text-box").slideUp();

        // If the clicked 'a' tag's parent 'li' did not have the "active" class, apply it and slide down its text box
        if (!isActive) {
            $parentLi.addClass("active");
            $parentLi.find(".text-box").slideDown();
        }
    });
});
  

$(document).ready(function () {
  // Initialize DatePicker
  $("#datepicker").datepicker({
    format: "dd-mm-yyyy", // Display date in dd-mm-yyyy format
    autoclose: true,
    todayHighlight: true,
  });

  // whatpp popup

  $(".mob_wa").on("click", function (e) {
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
    $(".what-no-grp").toggleClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".whatpp-grp").length) {
      $(".what-no-grp").removeClass("active");
    }
  });

  // Prevent clicks inside the .what-no-grp from closing it
  $(".what-no-grp").on("click", function (e) {
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
  });
});
