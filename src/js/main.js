import './utils/fixForEach'
import { header } from './modules/header'

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function () {
    let scroll = this.scrollY
    header(scroll)
  })
})
