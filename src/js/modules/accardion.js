export function accardion () {
  const cards = document.querySelectorAll('.accardionJs')
  let itemHeight = 0

  function close (opening) {
    cards.forEach(item => {
      if (opening !== item) {
        item.classList.remove('open')
        item.style.height = `${itemHeight}px`
      }
    })
  }

  cards.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.accardionContentJs')
      const contentHeight = content.offsetHeight

      if (item.classList.contains('open')) {
        item.style.height = `${itemHeight}px`
      } else {
        itemHeight = item.offsetHeight
        close(item)
        item.style.height = `${contentHeight + itemHeight}px`
      }

      item.classList.toggle('open')
    })
  })
}
