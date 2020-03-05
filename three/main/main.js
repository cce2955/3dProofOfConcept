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
import {
    kickOff
} from '../logic/kickoff.js'
import {
    whoHasBall
} from '../logic/holdBall.js'
import {
    sphere
} from '../ball.js';
import {
    cameraControl,
    play
} from '../camera/camcontrol.js';
import {
    populateArrays,

    guiBallObj
} from '../gui/playerGui.js'
import {
    gui,
    updateGUI,
    addGui,
    destroyGui
} from '../gui/gui.js';

//-------------------------------------------------------------------------
//Here is where everything comes together, I was originally going to take
//Advantage of getters and setters but javascript is weird, I suppose
//That's for a future project or if I attempt to remake this.
//so it looks like I will refactor this
//Upon completeion of basic logic, I will rewrite this in a new branch
//-------------------------------------------------------------------------
//Set up Scene
//-------------------------------------------------------------------------
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth /
    window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
//-------------------------------------------------------------------------
//so I'm going to do something a little dangerous, I'm at a point where I 
//need gamestates, so I'm going to create an array of events. For each 
//state that completes, I'll flip a bool on or off
//For example as of this writing I'm at Kickoff() and hasBall()
//[0] and [1] respectively, kickoff will be flipped on at [0] while
///hasBall will be flipped off, once kick off is done, that's flipped off
//while hasball will be flipped on so only the right things will animated 
//at the right time.
var maxElements = 3;
var boolArray = [];
for (var i = 0; i < maxElements; i++) {
    boolArray[i] = false;
}
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
console.log(sphere);
//-------------------------------------------------------------------------
//Set up Scene
//-------------------------------------------------------------------------
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


//-------------------------------------------------------------------------
//Set up GUI
//-------------------------------------------------------------------------
//This is a test gui, after getting this working I'll set up an AI to 
//create GUI states to show only relevant information as needed
populateArrays();

addGui();

//-------------------------------------------------------------------------
camera.position.z = sphere.position.z + 15;;

boolArray[0] = true; //init first bool so kickOff will work

camera.position.set(sphere.position.x, sphere.position.y, sphere.position.z + 10);
//-------------------------------------------------------------------------
//Animate the scene
//-------------------------------------------------------------------------



function animate() {

    updateGUI();

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    //-------------------------------------------------------------------------
    //Disable this for manual camera control

    camera.lookAt(sphere.position);
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------

    cameraControl();
    if (boolArray[0] == true) {
        kickOff(sphere); //Kick off
    }
    if (boolArray[1] == true) {
        whoHasBall(sphere); //Give ball to initial player
    }


    camera.lookAt(sphere.position);
}
if (!play) {
    animate();
}


export {
    camera,
    boolArray,
    newChar,
    animate
};