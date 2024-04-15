window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 400) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else {
        header.style.backgroundColor = '';
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

let map = L.map('map').setView([43.427630, 24.603722], 15);
let marker = L.marker([43.427630, 24.603722]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);