(function () {
  var script = document.createElement('script');
  script.onload = function () {
    var stats = new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop)
    });
  };
  script.src = '//mrdoob.github.io/stats.js/build/stats.min.js';
  document.head.appendChild(script);
})()

var scene = new THREE.Scene();
/*scene.background = new THREE.Color( 0xffffff );*/
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 20);


// responsive 

window.addEventListener('resize', function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});


// orbit

var orbit = new THREE.OrbitControls(camera, renderer.domElement);


// create the cube

var geometry = new THREE.CubeGeometry(2, 2, 2);
var cubeMaterials = [
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('/textures/canonWorkInverse.png'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('/textures/carlo13-minInverse.png'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('/textures/socomptoirWorkInverse.png'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('/textures/ToTheTopWorkInverse.png'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('/textures/canonWorkInverse.png'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('/textures/carlo13-minInverse.png'),
    side: THREE.DoubleSide
  })
];



var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, cubeMaterial);
cube.position.x = 0;
cube.position.y = 0;
cube.position.z = 1;
scene.add(cube);

camera.position.z = 5;



var render = function () {
  renderer.render(scene, camera);
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  requestAnimationFrame(render);
};

render();