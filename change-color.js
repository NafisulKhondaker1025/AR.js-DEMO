// AFRAME.registerComponent('change-color', {
//     init: function () {
//         const container = document.getElementById('sidebar')
//         const slider = document.createElement('input')
//         slider.className = 'slider'
//         slider.setAttribute('type', 'range')
//         slider.setAttribute('min', '0')
//         slider.setAttribute('max', '255')
//         slider.setAttribute('value', '255')
//         slider.setAttribute('step', '1')
//         container.appendChild(slider)

//         const setColor = (value) => {
//             // var value = document.getElementById('slide').value
//             var hexColor = parseInt(value, 10).toString(16)
//             console.log(hexColor)
//             hexColor = "#" + hexColor + hexColor + hexColor
//             console.log(hexColor)
//             var mesh = this.el.getObject3D('mesh');
//             //if (!mesh) { return; }
//             mesh.traverse((node) => {
//                 if (node.isMesh) {
//                 node.material.color = new THREE.Color(hexColor);
//                 node.material.needsUpdate = true;
//                 }
//             });
//         }
        
//         this.el.sceneEl.addEventListener('realityready', () => {
//             setColor("155")
//           })
        
//         slider.addEventListener('change', function() {setColor(slider.value)}, false)
//         slider.addEventListener('input', function() {setColor(slider.value)}, false)
//     }
//   });

// AFRAME.registerComponent('change-color', {
//     init: function () {
//       //this.el.addEventListener('model-loaded', this.update.bind(this));
//     },
//     update: function () {
//       var mesh = this.el.getObject3D('mesh');
//       //var opacity = 0.7;
//       if (!mesh) { return; }
//       mesh.traverse(function (node) {
//         if (node.isMesh) {
//           //node.material.opacity = opacity;
//           node.material.color =  new THREE.Color('#ff0000');
//           node.material.needsUpdate = true;
//         }
//       });
//     }
//   });