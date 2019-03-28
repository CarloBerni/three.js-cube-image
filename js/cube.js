var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.set(0,0,20);


// responsive 

window.addEventListener( 'resize', function ( ) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});


// orbit

var controls = new THREE.OrbitControls( camera, renderer.domElement );


// create the cube

var cubeGeometry = new THREE.CubeGeometry( 1, 1, 1);


var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xFF0FAA, wireframe: false });
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add(cube);

camera.position.z = 3;



var render = function() {
  renderer.render( scene, camera );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
  requestAnimationFrame(render);
};

render();
