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
  const teamSlider = new Swiper('.team__container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        initialSlide: 0
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  })

  const aboutWorkSlider = new Swiper('.work__slider', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })

  const choiceSlider = new Swiper('.choice__container', {
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

  const marketSlider = new Swiper('.market__container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev'
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })

  const aboutSlider = new Swiper('.about__slider', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    slideToClickedSlide: true,
    breakpoints: {
      767: {
        navigation: {
          nextEl: '.btn-next',
          prevEl: '.btn-prev'
        }
      }
    }
  })

  const text = document.querySelectorAll('.about__text')
  const desc = document.querySelectorAll('.about__slide-desc')

  if (text.length > 0 && desc.length > 0) {
    text[0].style.display = 'block'
    desc[0].style.display = 'block'

    aboutSlider.on('slideChange', () => {
      const index = aboutSlider.realIndex

      for (let i = 0; i < text.length; i++) {
        if (i !== index) {
          text[i].style.display = ''
          desc[i].style.display = ''
        } else {
          text[index].style.display = 'block'
          desc[index].style.display = 'block'
        }
      }
    })
  }
})
