const button = document.createElement('button')
button.innerText = 'Click me'
button.onclick = () => {
  System.import('./image-viewer').then(module => {
    module.loadSmallImage()
    module.loadBigImage()
  })
}
document.body.appendChild(button)
