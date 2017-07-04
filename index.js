window.onload = function () {
  // document.querySelector('.add').addEventListener('click', clickHandler, false);
  document.querySelector('.araburi').addEventListener('click', araburiHandler, false);
};

function clickHandler(e) {
  var img = document.createElement('a-collada-model');
  img.setAttribute('position', getRand() + ' 0  -10');
  img.setAttribute('src', '#limited4');
  img.setAttribute('rotation', '0 0 0');
  img.setAttribute('scale', '0.1 0.1 0.1');
  img.addEventListener('click', clickHandler, false);

  var scene = document.querySelector('a-scene');
  scene.appendChild(img);
}

function araburiHandler(e) {
  document.querySelector('#income').emit('bigger');
}

function getRand() {
  var max = 20;
  var min = -20;
  return ( Math.random() * ( ( max + 1 ) - min ) ) + min;
}
