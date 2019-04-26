import { getNewContent } from './lib'
import { getSomeOtherContent } from './lib2'
import $ from 'jquery'

window.onload = function () {
  $('#sample').text(getSomeOtherContent())
}
