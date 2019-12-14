import { createModal, openModal, closeModal } from './metods'

export function gallery (imageClass) {
  const images = document.querySelectorAll(imageClass)
  images.forEach(image => {
    image.addEventListener('click', () => {
      createModal()

      const modalWrap = document.querySelector('.modal')
      const galleryWrap = document.querySelector('.modal__container')
      const closeUp = document.querySelectorAll('.modal__close, .closeModal')

      // for (let i = 0; i < opener.length; i++) {
      const srcImg = image.getAttribute('src')
      const galleryImg = document.createElement('img')
      galleryImg.setAttribute('src', srcImg)
      galleryImg.classList.add('modal__img')
      galleryWrap.appendChild(galleryImg)
      // }

      const src = image.getAttribute('src')
      const img = galleryWrap.querySelector(`[src="${src}"]`)

      img.style.display = 'block'

      openModal()

      // galleryNav()

      closeUp.forEach(item => {
        item.addEventListener('click', () => {
          closeModal(modalWrap)
        })
      })

      modalWrap.addEventListener('click', (e) => {
        if (e.target === modalWrap) {
          closeModal(modalWrap)
        }
      })
    })
  })
}

// // ---------- gallery navigation ---------- //

// function galleryNav () {
//   const img = document.querySelectorAll('.modal__gallery img')
//   const next = document.querySelector('.modal__next')
//   const prev = document.querySelector('.modal__prev')
//   let index

//   next.addEventListener('click', () => {
//     index = getIndexImgAndRemovePrevSlide(img, index)
//     if (index < img.length - 1) {
//       img[index + 1].style.display = 'block'
//     } else {
//       index = 0
//       img[index].style.display = 'block'
//     }
//   })

//   prev.addEventListener('click', () => {
//     index = getIndexImgAndRemovePrevSlide(img, index)
//     if (index > 0) {
//       img[index - 1].style.display = 'block'
//     } else {
//       index = img.length - 1
//       img[index].style.display = 'block'
//     }
//   })
// }

// // ---------- get index slide & close prev slide ---------- //

// function getIndexImgAndRemovePrevSlide (img) {
//   let index
//   img.forEach((item, i) => {
//     if (item.style.display === 'block') {
//       index = i
//       item.style.display = ''
//     }
//   })
//   return index
// }
