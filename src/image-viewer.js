import './style/image-viewer.css'

import big from './assets/big.jpg'
import small from  './assets/small.jpg'
import sum from './sum'

const createImageElement = () => {
  const image = document.createElement('img')
  document.body.appendChild(image)
  return image
}

export const loadSmallImage = () => {
  console.log(sum(199, 5))
  createImageElement().src = small
}

export const loadBigImage = () => {
  console.log(sum(199, 5))
  createImageElement().src = big
}
