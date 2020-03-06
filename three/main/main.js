//-------------------------------------------------------------------------
//My army of imports, main's entire purpose is to consolidate everything
//I'm certain I could be doing this incorrectly but this is an easily breakable
//habit if the right job comes along
//-------------------------------------------------------------------------
import {
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
    whoHasBall,
    defineTeamPossession
} from '../logic/holdBall.js'
import {
    sphere,
    pivotPoint,
    lockSphere
} from '../ball.js';
import {
    cameraControl,
    
} from '../camera/camcontrol.js';
import {
    gui,
    updateGUI,
    addGui,
    
} from '../gui/gui.js';
import { passBall } from '../logic/pass.js';


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
var maxElements = 100;
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
scene.add(ballLanding); //Center area where ball launches from
scene.add(wall[0]);
scene.add(wall[1]);
scene.add(wall[2]);
scene.add(wall[3]);
scene.add(ceiling);
scene.add(camera);
scene.add(sphere);
scene.add(lockSphere);
lockSphere.position.set(100, 100, 100) //Keep it off screen until needed
pivotPoint.add(camera);
scene.add(pivotPoint);
//-------------------------------------------------------------------------
//Add Gui and hide it from the user
//-------------------------------------------------------------------------
addGui()

gui.close(); //Add GUI and close it
//-------------------------------------------------------------------------
boolArray[0] = true; //init first bool so kickOff will work
//-------------------------------------------------------------------------
//Animate the scene
//-------------------------------------------------------------------------
function updateCamera() {
    camera.position.x = pivotPoint.position.x
    camera.position.y = pivotPoint.position.y
    camera.position.z = pivotPoint.position.z + 7; //plus 7 so it'll stay away 
    //from the ball
    pivotPoint.position.x = sphere.position.x
    pivotPoint.position.y = sphere.position.y
    pivotPoint.position.z = sphere.position.z
} //Call when you want camera to follow ball
//If ball isn't meant to be followed keep it away
updateCamera(); //init camera
function animate() {
    cameraControl(); //Give user basic ability to rotate 
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    updateGUI(); //Update GUI info, if gui is hidden this still updates anyway
    requestAnimationFrame(animate); //Anime
    renderer.render(scene, camera); //Render the scene and display through the camera
    camera.lookAt(sphere.position); //Every frame the camera will look at (but not 
    //move with) the sphere
    if (boolArray[0] == true) {
        kickOff(sphere); //Kick off
    }

    if (boolArray[1] == true) {
        defineTeamPossession(); //Figure out who is available to hand the ball
        whoHasBall(sphere); //Give ball to initial player
        gui.open(); //Show Gui to user, it'll show the stats of whoever is
        //holding the ball
        updateCamera(); //Update the camera's position so it'll rotate correctly
    }
    if (boolArray[2] == true){
        passBall();
    }
    console.log(lockSphere.position.x)
}




animate();



export {
    camera,
    boolArray,
    newChar,
    animate,
    scene
};