let menu = document.querySelector('#menu-bars');

let navbar = document.querySelector('.navbar');

menu.oneclick = () => {
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}

var swiper = new Swiper(".swiper-slide", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});