import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const mySwiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
    },
    direction: 'horizontal',
    loop:"true"
})