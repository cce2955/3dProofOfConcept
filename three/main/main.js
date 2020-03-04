//import { cubeArray } from '../cube.js';
import {
    cubeArray,
    players,
    generatePlayers,
    generatePlane,
    newChar,
    floor,
    ceiling,
    wall,
    ballLanding,
    goal
} from '../logic/logic.js';
import {kickOff} from '../logic/kickoff.js'
import {
    sphere
} from '../ball.js';
import {
    cameraControl
} from '../camera/camcontrol.js';
import { walls } from '../logic/setBounds.js';
//-------------------------------------------------------------------------
//Here is where everything comes together, I was originally going to take
//Advantage of getters and setters but javascript is weird, I suppose
//That's for a future project or if I attempt to remake this.
//-------------------------------------------------------------------------
//Set up Scene
//-------------------------------------------------------------------------
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth /
    window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
//-------------------------------------------------------------------------
//Set up render area
//-------------------------------------------------------------------------
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//-------------------------------------------------------------------------
//Create players
//-------------------------------------------------------------------------
generatePlayers();
generatePlane();
//-------------------------------------------------------------------------
//Add things into the scene
//-------------------------------------------------------------------------
for (let i = 0; i <= players.getMaxPlayers(); i++) {
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //Marked for Deletion
    console.log(newChar[i]);
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    scene.add(newChar[i].mesh); //Add all the meshes, positions should be
    //Set in the logic
}
scene.add(floor);
scene.add(goal[0]); //Team 2 goal
scene.add(goal[1]); //Team 1 Goal
scene.add(ballLanding);
scene.add(wall[0]);
scene.add(wall[1]);
scene.add(wall[2]);
scene.add(wall[3]);
scene.add(ceiling);
scene.add(camera);
scene.add(sphere);

camera.position.z = sphere.position.z + 15;;



//-------------------------------------------------------------------------
//Animate the scene
//-------------------------------------------------------------------------
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    //-------------------------------------------------------------------------
    //Disable this for manual camera control
    camera.position.set(0, sphere.position.y, sphere.position.z + 10)
    //-------------------------------------------------------------------------
    cameraControl();
    kickOff(sphere);
}
animate();

export {
    camera
};