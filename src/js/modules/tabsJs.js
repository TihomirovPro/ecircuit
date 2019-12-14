export function tabsJs () {
  const tabsWrap = document.querySelectorAll('.tabsWrapJs')

  tabsWrap.forEach(item => {
    const tabsNav = item.querySelector('.tabsNavJs')
    const tabsLinks = tabsNav.children
    const tabs = item.querySelector('.tabsJs').children

    // tabsLinks[0].classList.add('active')
    // tabs[0].classList.add('active')

    tabsNav.addEventListener('click', function (e) {
      const target = e.target
      for (let i = 0; i < tabsLinks.length; i++) {
        if (target !== tabsNav) {
          tabsLinks[i].classList.remove('active')
          tabs[i].classList.remove('active')
        }
        if (target === tabsLinks[i]) {
          tabsLinks[i].classList.add('active')
          tabs[i].classList.add('active')
        }
      }
    })
  })
}

export function tabs () {
  const links = document.querySelectorAll('.tab-link-js')
  const tabs = document.querySelectorAll('.tab-js')

  for (let i = 0; i < links.length; i++) {
    links[0].classList.add('active')
    tabs[0].classList.add('active')

    // tabs[i].style.display = 'none'
    // tabs[0].style.display = ''
  }

  function removeActive () {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active')
      // tabs[i].style.display = 'none'
      tabs[i].classList.remove('active')
    }
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      removeActive()

      const id = link.getAttribute('href')
      const tab = document.querySelector(id)

      link.classList.add('active')
      tab.classList.add('active')
      // tab.style.display = ''
    })
  })
}