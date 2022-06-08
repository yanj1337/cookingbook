// Tab's

const navButton = document.querySelectorAll(".nav-button");
const pageDisplay = document.querySelectorAll(".tab");

navButton.forEach(onNavButtonClick);

function onNavButtonClick(item) {
  item.addEventListener("click", function () {
    let currentButton = item;
    let buttonId = currentButton.getAttribute("data-tab");
    let currentPage = document.querySelector(buttonId);

    if (!currentButton.classList.contains("nav-active")) {
      navButton.forEach(function (item) {
        item.classList.remove("nav-active");
      });

      pageDisplay.forEach(function (item) {
        item.classList.remove("active");
      });

      currentButton.classList.add("nav-active");
      currentPage.classList.add("active");
    }
  });
}

document.querySelector(".nav-button").click();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/*     //  Slider

document.addEventListener(
  "DOMContentLoaded",
  function () {
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;
    const sliderContainer = document.querySelector(".slider-container");
    const sliderTrack = document.querySelector(".slider-track");
    const sliderItems = document.querySelectorAll(".slider-item");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    const itemCount = sliderItems.length;
    const itemWidth = sliderContainer.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    sliderItems.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener("click", () => {
      const itemsLeft =
        itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

      position -=
        itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

      setPosition();
      checkBtns();
    });

    btnPrev.addEventListener("click", () => {
      const itemsLeft = Math.abs(position) / itemWidth;

      position +=
        itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

      setPosition();
      checkBtns();
    });

    const setPosition = () => {
      sliderTrack.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
      btnPrev.disabled = position === 0;
      btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
    };

    checkBtns();
  },
  false
); */
