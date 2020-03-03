//import { cubeArray } from '../cube.js';
import {
    cubeArray,
    players,
    generatePlayers,
    generatePlane,
    newChar,
    floor,
    ceiling,
    wall
} from './logic.js';
import {
    sphere
} from '../ball.js';
import {
    cameraControl
} from '../camcontrol.js';


//Set up Scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth /
     window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

//Set up render area
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Create players
generatePlayers();
generatePlane();
//scene.add(sphere);
for (let i = 0; i <= players.getMaxPlayers(); i++) {
    console.log(newChar[i]);
    scene.add(newChar[i].mesh); //Add all the meshes, positions should be
    //Set in the logic
}
newChar[7].mesh.position.z = 5;
newChar[1].mesh.position.x = 1;
scene.add(floor);
scene.add(wall[0]);
scene.add(wall[1]);
scene.add(wall[2]);
scene.add(wall[3]);
scene.add(ceiling);
scene.add(camera);
scene.add(sphere);

camera.position.z = sphere.position.z + 15;;



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);


    cameraControl();
}
animate();

export {
    camera
};