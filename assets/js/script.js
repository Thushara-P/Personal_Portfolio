const navToggle = document.querySelector(".navbar-toggle");

navToggle.addEventListener("click", function(){
document.querySelector(".portfolio-navbar").classList.toggle("show");
});

// Tab interface for different section of resume

const resumeHeading = document.querySelector(".resume-heading");
const resumeItems = document.querySelectorAll(".resume-item");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.parentElement.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active"); 
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};

// Navbar Header Sticky While Scroll

function stickyNav() {
  var headerHeight = document.querySelector("#about").offsetHeight / 2;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", stickyNav);

//initialize swiper.js for project slider

const swiper = new Swiper(".project-slider", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.nextArrowBtn',
    prevEl: '.prevArrowBtn',
  },
  pagination: {
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return '<li class="' + className + '"></li>';
    },
    clickable: true
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
})


//initialize swiper.js for Testimonials slider

const swiper1 = new Swiper(".testimonial-swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
grabCursor: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      effect: "fade",
    },
  }
})


.btn-submit.addEventListener("click", function(e){
     e.preventDefault();
});