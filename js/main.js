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
menuBar.addEventListener("click", () => {
  menu.classList.toggle("on");
  menuBar.classList.toggle("on");
});
// 'function()' = '=>' (애로우펑션)

const depth01 = document.querySelector(".depth01");
const depth02 = document.querySelector(".depth02");
console.log(depth01);
depth01.addEventListener("click", function () {
  depth01.classList.toggle("on");
  depth02.classList.toggle("on");
});
