const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  // navigation: {
  //   prevEl: "#mainVisual .prev",
  //   nextEl: "#mainVisual .next",
  // },
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: "true",
  },
});

const productSlider = new Swiper("#product .list", {
  speed: 600,
  slidesPerView: 1, //화면에 보여지는 갯수
  slidesPerGroup: 1, //묶음
  navigation: {
    prevEl: "#product .prev",
    nextEl: "#product .next",
  },
});

const newsSlider = new Swiper("#news .contents", {
  speed: 600,
  slidesPerView: 1, //화면에 보여지는 갯수
  slidesPerGroup: 1, //묶음
  loop: true,
  spaceBetween: 20,
});

const menuBar = document.querySelector(".menuBar");
const menu = document.querySelector(".menu");
console.log(menu);
menuBar.addEventListener("click", function () {
  menu.classList.toggle("on");
  menuBar.classList.toggle("on");
});
