export function header (scroll) {
  const header = document.querySelector('.header')
  if (scroll > 100) {
    header.classList.add('header_bg')
  } else {
    header.classList.remove('header_bg')
  }
}
