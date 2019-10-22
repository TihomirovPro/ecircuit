import './utils/fixForEach'
import { header } from './modules/header'
import { accardion } from './modules/accardion'
import { openMenu } from './modules/openMenu'
import { tabsJs } from './modules/tabsJs'

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function () {
    let scroll = this.scrollY
    header(scroll)
  })
  accardion()
  openMenu()
  tabsJs()
})
