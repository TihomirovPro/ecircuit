import Swiper from 'swiper/dist/js/swiper'

document.addEventListener('DOMContentLoaded', () => {
  const faqSlider = new Swiper('.faq__container', {
    loop: false,
    slidesPerView: 3,
    // centeredSlides: true,
    spaceBetween: 40
  })
})
