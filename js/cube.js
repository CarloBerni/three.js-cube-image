var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    /*camera.position.set(0,0,20);*/


// responsive 

window.addEventListener( 'resize', function ( ) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});


// orbit

controls = new THREE.OrbitControls( camera, renderer.domElement );


// create the cube

var geometry = new THREE.boxGeometry( 1, 1, 1);


var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: ture});
var cube = new THREE.Mesh( geometry, material);
scene.add(cube);

var update = function() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
};


var render = function() {
  renderer.render( scene, camera );
};

var Gameloop = function ( ) {
  requestAnimationFrame( Gameloop );
  update();
  render();
};