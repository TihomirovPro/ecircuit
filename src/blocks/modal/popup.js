import { createModal, openModal, closeModal } from './metods'

export function popup (opener) {
  const btn = document.querySelector(opener)
  btn.addEventListener('click', () => {
    createModal()

    const modalWrap = document.querySelector('.modal')
    const modalContainer = document.querySelector('.modal__container')
    const closeUp = document.querySelectorAll('.modal__close, .closeModal')

    const id = btn.getAttribute('data-modal')
    const popup = document.querySelector(id)

    modalContainer.appendChild(popup)

    popup.style.display = 'block'
    openModal()

    function closePopup () {
      document.body.appendChild(popup)
      popup.style.display = ''
    }

    closeUp.forEach(item => {
      item.addEventListener('click', () => {
        closeModal(modalWrap, closePopup)
      })
    })

    modalWrap.addEventListener('click', (e) => {
      if (e.target === modalWrap) {
        closeModal(modalWrap, closePopup)
      }
    })
  })
}
