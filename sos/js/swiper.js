import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const FirstSwiper = new Swiper('.swiper-first', {
    autoplay: {
        delay: 3000,
    },

    navigation: {
        nextEl: '.swiper-first-button-next',
        prevEl: '.swiper-first-button-prev',
    },
    pagination: {
        el: '.swiper-first-pagination',
    },

    direction: 'horizontal',
})
const SecondSwiper = new Swiper('.story__swiper', {
    effect: "cards",
    cardsEffect: {
        perSlideOffset: 9,
        perSlideRotate: 0,
        rotate: false,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.story-swiper-pagination',
    },
})