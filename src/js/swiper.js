import Swiper from 'swiper/dist/js/swiper'

document.addEventListener('DOMContentLoaded', () => {
  const workSlider = new Swiper('.work__container', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 34,
    breakpoints: {
      1150: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 24
      }
    }
  })
  const faqSlider = new Swiper('.faq__container', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn'
    },
    breakpoints: {
      991: {
        slidesPerView: 1,
        centeredSlides: true
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 24
      }
    }
  })
})
