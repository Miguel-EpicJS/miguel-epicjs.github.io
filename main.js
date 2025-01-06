import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// mesh

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({color: 0xff5b00, flatShading: true});
const mesh = new THREE.Mesh(geo, mat);

scene.add(mesh);

// wireframe

const wireMat = new THREE.MeshStandardMaterial({
	color: 0xffffff,
	wireframe: true
});
const wireMesh = new THREE.Mesh(geo, wireMat);

mesh.add(wireMesh);

// light

const hemLight = new THREE.HemisphereLight(0xffabcf, 0xaa5699);

scene.add(hemLight);

function animate(t = 0){
	requestAnimationFrame(animate);

	mesh.rotation.z = t * 0.0001;
	mesh.rotation.x = t * 0.0001 * Math.cos(t*0.00001);

	mesh.scale.setScalar(Math.cos(t*0.0001)*0.2+1);

	controls.update();

	renderer.render(scene, camera);
}

animate();
