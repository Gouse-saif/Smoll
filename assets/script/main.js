// ======= VIDEO GUISE =======

function toggle() {
  var trailer = document.querySelector(".trailer");
  var video = document.querySelector("video");
  trailer.classList.toggle("active");
  video.pause();
  video.currentTime = 0;
}

// ======= Image Toggle Effect =======

// var changeImage = document.querySelector(".changeImage");
// let btn1 = document.querySelector(".btn1");
// let btn2 = document.querySelector(".btn2");
// let btn3 = document.querySelector(".btn3");

// btn1.addEventListener("mouseover", () => {
//   changeImage.src = "/assets/img/invest.png";
// });

// btn2.addEventListener("mouseover", () => {
//   changeImage.src = "/assets/img/img2.png";
// });

// btn3.addEventListener("mouseover", () => {
//   changeImage.src = "/assets/img/img3.png";
// });

// ======= Accordion =======
$(document).ready(function () {
  $(".card-header").click(function () {
    // self clicking close
    if ($(this).next(".card-body").hasClass("active")) {
      $(this).next(".card-body").removeClass("active").slideUp();
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".card .card-body").removeClass("active").slideUp();
      $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
      $(this).next(".card-body").addClass("active").slideDown();
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
    }
  });
});

// ======= Subscribe Button =======

document.querySelector(".submit-email").addEventListener("mousedown", (e) => {
  e.preventDefault();
  document.querySelector(".subscription").classList.add("done");
});

// ======= Scroll Reveal Animation =======
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

// Scroll For Header
sr.reveal("header", {});

// Scroll For Home
sr.reveal(".horizontal__line", { delay: 200 });
sr.reveal(".hero__image", { delay: 200 });
sr.reveal(".para1", { delay: 400 });
sr.reveal(".para2", { delay: 600 });
sr.reveal(".invest__container", { delay: 800 });

// Scroll For Overview
sr.reveal(".heading", { delay: 400 });
sr.reveal(".para__overview", { delay: 600 });
sr.reveal(".join__container", { delay: 800 });

// Scroll For About
sr.reveal(".about__desc", {});
sr.reveal(".btn1", { delay: 400 });
sr.reveal(".btn2", { delay: 600 });
sr.reveal(".btn3", { delay: 800 });
sr.reveal(".about__imageContainer", { delay: 1000 });

// Scroll For Accordion
sr.reveal(".accordion1", { delay: 200 });
sr.reveal(".accordion2", { delay: 400 });
sr.reveal(".accordion3", { delay: 600 });

// Scroll For Footer
sr.reveal(".footer__logo", { delay: 400 });
sr.reveal(".footer__subscribe", { delay: 600 });
sr.reveal(".footer__social__icon", { delay: 800 });