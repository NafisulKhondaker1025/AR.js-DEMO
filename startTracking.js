AFRAME.registerComponent('start-tracking', {
    init: function() {
    const text = document.getElementById('loadingText')
    const CIV = document.createElement('a-entity')
    // const container = document.getElementById('container')
    // const gif = document.createElement('img')
    // gif.src = 'assets/stabilization.gif'
    // container.appendChild(gif)
 
    setTimeout(() => {

      CIV.setAttribute('position', '-5 -1 -5')
      CIV.setAttribute('rotation', '0 180 0')
      CIV.setAttribute('visible', 'false')
      CIV.setAttribute('scale', '0.0001 0.0001 0.0001')

      CIV.setAttribute('gltf-model', '#3dmodel')
      this.el.sceneEl.appendChild(CIV)

      CIV.addEventListener('model-loaded', () => {
        CIV.setAttribute('visible', 'true')
        CIV.setAttribute('animation', {
          property: 'scale',
          to: '100 100 100',
          easing: 'easeOutElastic',
          dur: 800,
        })
      })
      text.setAttribute('visible', 'false')
      //gif.setAttribute('visible', 'false')
    }, 12000)
  }
})