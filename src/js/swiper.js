import Swiper from 'swiper/js/swiper'

document.addEventListener('DOMContentLoaded', () => {
  const workSlider = new Swiper('.work__container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      1150: {
        slidesPerView: 4,
        spaceBetween: 34
      },
      991: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 24
      }
    }
  })
  const faqSlider = new Swiper('.faq__container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn'
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
})
