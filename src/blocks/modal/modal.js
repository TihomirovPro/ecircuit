import { popup } from './popup'
import { gallery } from './gallery'

export function modalInit (selector, typeGallery) {
  const openers = document.querySelectorAll(selector)

  openers.forEach(item => {
    typeGallery ? gallery(item, openers) : popup(item)
  })
}
