import colors from '../src/colors.json'
import colorsItem from '../src/templates/color-item.handlebars'
import './palette-style.css'

const palleteRef = document.querySelector('.js-palette')

const markup = colorsItem(colors)

palleteRef.insertAdjacentHTML('beforeend', markup)