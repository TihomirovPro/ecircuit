export function accardion () {
  const cards = document.querySelectorAll('.accardionJs')
  let itemHeight = 0

  cards.forEach(item => {
    item.addEventListener('click', () => {
      let content = item.querySelector('.accardionContentJs')
      let contentHeight = content.offsetHeight

      if (item.classList.contains('open')) {
        item.style.height = `${itemHeight}px`
      } else {
        itemHeight = item.offsetHeight
        item.style.height = `${contentHeight + itemHeight}px`
      }

      item.classList.toggle('open')
    })
  })
}
