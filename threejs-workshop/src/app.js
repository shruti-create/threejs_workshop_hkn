import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xC4A484});
const donut = new THREE.Mesh(geometry, material);
scene.add(donut);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    donut.rotation.x += 0.01;
    donut.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
