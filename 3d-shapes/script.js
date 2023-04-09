// The "scene" is where stuff in our game will happen:
const scene = new THREE.Scene();
const flat = {flatShading: true};
const light = new THREE.AmbientLight('white', 0.8);
scene.add(light);

// The "camera" is what sees the stuff:
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
camera.position.z = 500;
scene.add(camera);

// The "renderer" draws what the camera sees onto the screen:
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// sphere
var shape = new THREE.SphereGeometry(100);
var cover = new THREE.MeshNormalMaterial(flat);
const ball = new THREE.Mesh(shape, cover);
scene.add(ball);
ball.position.set(-250, 250, -250);

// box
var shape = new THREE.BoxGeometry(300, 100, 20);
var cover = new THREE.MeshNormalMaterial(flat);
const box = new THREE.Mesh(shape, cover);
scene.add(box);
box.rotation.set(0.5, 0.5, 0);
box.position.set(250, 250, -250);

// cylinder
var shape = new THREE.CylinderGeometry(20, 20, 100);
var cover = new THREE.MeshNormalMaterial(flat);
const tube =new THREE.Mesh(shape, cover);
scene.add(tube);
tube.rotation.set(0.5, 0.5, 0);
tube.position.set(-500, 0, -250);

// disc
var shape = new THREE.CylinderGeometry(100, 100, 20);
var cover = new THREE.MeshNormalMaterial(flat);
const disc = new THREE.Mesh(shape, cover);
scene.add(disc);
disc.rotation.set(0.5, 0.5, 0);
disc.position.set(500, 0, -250);

// cone
var shape = new THREE.CylinderGeometry(1, 50, 150);
var cover = new THREE.MeshNormalMaterial(flat);
const cone = new THREE.Mesh(shape, cover);
scene.add(cone);
cone.rotation.set(0.5, 0.5, 0);
cone.position.set(-250, 0, -250);

// pyramid
var shape = new THREE.CylinderGeometry(1, 100, 100, 4);
var cover = new THREE.MeshNormalMaterial(flat);
const pyramid = new THREE.Mesh(shape, cover);
scene.add(pyramid);
pyramid.rotation.set(0.5, 0.5, 0);
pyramid.position.set(250, 0, -250);

// plane
var shape = new THREE.PlaneGeometry(300, 100);
var cover = new THREE.MeshNormalMaterial(flat);
const ground = new THREE.Mesh(shape, cover);
scene.add(ground);
ground.rotation.set(0.5, 0, 0);
ground.position.set(-400, -250, -250);

// donut
var shape = new THREE.TorusGeometry(100, 25);
var cover = new THREE.MeshNormalMaterial(flat);
const donut = new THREE.Mesh(shape, cover);
scene.add(donut);
donut.position.set(500, -250, -250);

// half donut
var shape = new THREE.TorusGeometry(100, 25, 3.14);
var cover = new THREE.MeshNormalMaterial(flat);
const halfDonut = new THREE.Mesh(shape, cover);
scene.add(halfDonut);
halfDonut.position.set(0, -250, -250);

// animating the shapes
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const t = clock.getElapsedTime();

  ball.rotation.set(0.5*t, 1.25*t, 0);
  box.rotation.set(0.5*t, 0, 0);
  tube.rotation.set(0.5*t, 0, 0);
  disc.rotation.set(0.5*t, 0, 0);
  pyramid.rotation.set(0, 0.5*t, 0);
  cone.rotation.set(0.5*t, 0.5*t, 0);

  renderer.render(scene, camera);
}

animate();