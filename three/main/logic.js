import {
    players,
    walls,
    possession
} from '../setBounds.js';
import {
    cGeometry,
    cMaterialGreen,
    cMaterialRed
} from '../cube.js';
import {
    sphere
} from '../ball.js';
import {
    createdCharacter
} from '../character.js';
//Right now this is a very basic playground as I get readjusted to JS and learn
// how THREE works
//I'll make something substantial with this in due time.
//So anything created in a class gets imported here and morphed with logic
//to be exported to main main's purpose is to just absolve the information and
// present it logic will do...the logic


var cube;
players.setMaxPlayers(10);
//So this no longer applies to walls
//It only applies to the pieces themselves
//do a check to see if it's near the wall, and only start 
//Collision detection when within 5 units
walls.setXWallWidth(100);
walls.setYWallWidth(100);
walls.setZWallWidth(100);
//Set max players
var cubeArray = new Array();
//Make an array to store our cubes in (obsolete)
const newChar = new Array();
//Create an empty array to store our class in
var plane, ceiling, floor;
//variables for exporting
var wall = [];
//Wall array to store our walls in

//-------------------------------------------------------------------------
//Not necessary anymore, this will be kept for legacy, delete upon
//completion
//-------------------------------------------------------------------------
function generateEntities() {
    for (let i = 0; i < players.getMaxPlayers(); i++) {
        //Create ten cubes
        cubeArray.push(cube = new THREE.Mesh(cGeometry, cMaterial));
    }
}
//-------------------------------------------------------------------------
//Generate the players
//-------------------------------------------------------------------------
var teamNum = 1;
var cMaterial = cMaterialGreen;

function generatePlayers() {
    //Generate an array of players based on the max amount of players
    //Stats are completely random for now
    //generateEntities(); //This is now just a waste of CPU honestly
    players.setPosX(0);
    players.setPosY(0);
    players.setPosZ(0);
    for (let i = 0; i <= players.getMaxPlayers(); i++) {
        if (i > players.getMaxPlayers() / 2) {
            teamNum = 2; //Set them to team 2
            cMaterial = cMaterialRed; //Make the cubes red so you can 
            //differentiate
            //If i is above half the number of max players
            //Start proliferating the opposing team
        }
        //Create a new mesh, with an ID matching i, team number either 1 or 2
        //Completely random stats, all positions set to zero (for now)
        newChar.push(new createdCharacter(new THREE.Mesh(cGeometry,
                cMaterial), i, teamNum, Math.floor(Math.random() * 10), Math
            .floor(Math.random() * 10), Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10), Math.floor(Math.random() *
                10), Math.floor(Math.random() * 10), Math.floor(Math.random() *
                10), players.getPosX(), players.getPosY(),
            players.getPosZ()));

        //Create a new createdCharacter object, call it at newChar[index]
        //console.log(newChar[i]);
    }
}

function generatePositions() {

}
//-------------------------------------------------------------------------
//Generate the Skybox
//-------------------------------------------------------------------------
function generatePlane() {
    //Generate a checkerboard plane

    var pGeometry = new THREE.PlaneGeometry(100, 100, 32);
    //Generate geometry
    var pCheckerboardMaterial = [];
    //Create an array to store our checkerboard in
    pCheckerboardMaterial.push(new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    }));
    //Create a white material
    pCheckerboardMaterial.push(new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide
    }));
    //Create a black material
    var l = pGeometry.faces.length / 2; //Get the length to travel upon
    for (var i = 0; i < l; i++) {
        var j = i * 2;
        pGeometry.faces[j].materialIndex = ((i + Math.floor(i / 8)) % 2);

        pGeometry.faces[j + 1].materialIndex = ((i + Math.floor(i / 8)) % 2);

    }
    var pMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    });

    //-------------------------
    //Make the "box"
    floor = new THREE.Mesh(pGeometry, new THREE.MeshFaceMaterial
        (pCheckerboardMaterial));

    for (let i = 0; i < 4; i++) {
        wall.push(new THREE.Mesh(pGeometry, new THREE.MeshFaceMaterial
            (pCheckerboardMaterial)));
    }
    ceiling = new THREE.Mesh(pGeometry, new THREE.MeshFaceMaterial
        (pCheckerboardMaterial));

    //Init values for Skybox
    floor.rotation.x = 1.55; //1.55 rads to flatten the plane
    floor.position.y = -50;
    wall[0].position.z = 50; //Set some walls
    wall[1].position.z = -50;
    wall[2].position.x = 50;
    wall[2].rotation.y = 1.55; //Rotate wall
    wall[3].position.x = -50;
    wall[3].rotation.y = 1.55; //Rotate the other wall
    ceiling.position.y = 50; //Set the ceiling
    ceiling.rotation.x = 1.55;

}

//-------------------------------------------------------------------------
//Set up 3D text
//-------------------------------------------------------------------------


//-------------------------------------------------------------------------
//Read a text file
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//Exports
//-------------------------------------------------------------------------
export {
    
    generatePlayers,
    cubeArray,
    players,
    newChar,
    createdCharacter,
    generatePlane,
    floor,
    ceiling,
    wall
};


//---------------------------------------------------------------------------------
//For now this is legacy but after making my classes and variables I'll compile things here and
//let main.js parse through it 
//Upon completion everything below this will be deleted

/*
import {sphere} from './ball.js';
import { cubeArray} from './cube.js';



//import {setBounds} from './setBounds.js';
//Set up Scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

//set up light (Broken at the moment)

var light = new THREE.PointLight (0xffffff, 1, 100);

//Setting plane
var pGeometry = new THREE.PlaneGeometry( 150, 120, 132 );
var pMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( pGeometry, pMaterial );

scene.add( plane );
//Set up render area
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Set light (broken at the moment)
light.position.set(0,0,0);
//Set cube position
//set cubeArray positions here or in its own file


//set sphere position
sphere.position.z = -25;

//Figuring out classes right now, attempting to assign multiple cubes



//Add everything to scene
scene.add(light);
scene.add(cubeArray[0]);
scene.add(cubeArray[1]);
scene.add(sphere);

//Set camera position

//Animate it all
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}


animate();
*/