var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ antialias: true });
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

var orbit = new THREE.OrbitControls( camera, renderer.domElement );


// create the cube

var geometry = new THREE.CubeGeometry( 2, 2, 2);
var cubeMaterials = [
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('/textures/canonWork.jpeg'), side: THREE.FrontSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('/textures/carlo13-min.jpeg'), side: THREE.FrontSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('/textures/socomptoirWork.jpeg'), side: THREE.FrontSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('/textures/ToTheTopWork.jpeg'), side: THREE.FrontSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('/textures/socomptoirWork.jpeg'), side: THREE.FrontSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('/textures/carlo13-min.jpeg'), side: THREE.FrontSide } )
];



var material = new THREE.MeshFaceMaterial( cubeMaterials );
var cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 3;



var render = function() {
  renderer.render( scene, camera );
  cube.rotation.x += 0.005;
  requestAnimationFrame(render);
};

render();
