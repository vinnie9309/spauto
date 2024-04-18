let header = document.querySelector("header");
let nav = document.querySelector(".nav-links");
let menu = document.querySelector(".burger-menu");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400 && window.innerWidth > 768) {
    header.style.backgroundColor = "rgba(255, 255, 255, 1)";
  } else {
    header.style.backgroundColor = "";
  }
});
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let map = L.map("map", {
  dragging: !L.Browser.mobile,
  tap: !L.Browser.mobile,
}).setView([43.42763, 24.603722], 15);
let marker = L.marker([43.42763, 24.603722]).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

function toggleMenu() {
  menu.classList.toggle("menu-active");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
if(window.innerWidth < 768) {
  document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("line") && !e.target.classList.contains("burger-menu")) {
      nav.style.display = "none";
      menu.classList.remove("menu-active");
    }
  });
}
