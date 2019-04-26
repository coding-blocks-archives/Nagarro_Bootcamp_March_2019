import { getNewContent } from './lib'
import { getSomeOtherContent } from './lib2'

window.onload = function () {
  document.getElementById('sample').innerText = getSomeOtherContent()
}
