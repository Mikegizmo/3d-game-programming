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

// capsule body
const body = new THREE.CapsuleGeometry(90, 100, 4, 8);
const cover = new THREE.MeshNormalMaterial();
const avatar = new THREE.Mesh(body, cover);
scene.add(avatar);

// hands
const hand = new THREE.CylinderGeometry(25, 25, 160);

const rightHand = new THREE.Mesh(hand, cover);
rightHand.position.set(-125, 75 , 20);
rightHand.rotation.set(0.5, 0.5, 0.8);
scene.add(rightHand);

const leftHand = new THREE.Mesh(hand, cover);
leftHand.position.set(125, 75 , -20);
leftHand.rotation.set(-0.5, -0.5, -0.8);
scene.add(leftHand);

// legs
const leg = new THREE.CylinderGeometry(25, 25, 250);

const rightLeg = new THREE.Mesh(leg, cover);
rightLeg.position.set(-40, -200, 30);
scene.add(rightLeg);

const leftLeg = new THREE.Mesh(leg, cover);
leftLeg.position.set(40, -200, 30);
scene.add(leftLeg);


renderer.render(scene, camera);

