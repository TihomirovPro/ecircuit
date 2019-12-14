import './utils/fixForEach'
import { header } from './modules/header'
import { accardion } from './modules/accardion'
import { openMenu } from './modules/openMenu'
import { tabsJs, tabs } from './modules/tabsJs'
import { gallery } from '../blocks/modal/gallery'

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function () {
    const scroll = this.scrollY
    header(scroll)
  })
  accardion()
  openMenu()
  tabsJs()
  tabs()
  gallery('.work__photo')
})
