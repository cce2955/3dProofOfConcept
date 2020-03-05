import {
    players,
    walls,
    possession
} from './setBounds.js';
import {
    cGeometry,
    cMaterialGreen,
    cMaterialRed
} from '../player/cube.js';
import {
    createdCharacter
} from '../player/character.js';
import {
    positions
} from '../player/enumerations.js'
import {
    setPositions
} from '../player/fieldPositions.js';
//Right now this is a very basic playground as I get readjusted to JS and learn
// how THREE works
//I'll make something substantial with this in due time.
//So anything created in a class gets imported here and morphed with logic
//to be exported to main main's purpose is to just absolve the information and
// present it logic will do...the logic


var cube;
//-------------------------------------------------------------------------
//Set 11 players, 10 on field, 2 in goal
//(arrays start at 0!)
//-------------------------------------------------------------------------
players.setMaxPlayers(11);

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
var goal = [];
var ballLanding;
//Arrays for storing planes

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

    for (let i = 0; i <= players.getMaxPlayers(); i++) {
        if (i > players.getMaxPlayers() / 2) {
            teamNum = 2; //Set them to team 2
            cMaterial = cMaterialRed; //Make the cubes red so you can 
            //differentiate
            //If i is above half the number of max players
            //Start proliferating the opposing team
        }
        //Create a new mesh, with an ID matching i, team number either 1 or 2
        //Completely random stats, set
        //field position, and if they have possession of ball as well as
        //team possession of ball
        newChar.push(new createdCharacter(new THREE.Mesh(cGeometry,
                cMaterial), i, teamNum, Math.floor(Math.random() * 10), Math
            .floor(Math.random() * 10), Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10), Math.floor(Math.random() *
                10), Math.floor(Math.random() * 10), Math.floor(Math.random() *
                10), positions.NULL, false,
            false));

        //Create a new createdCharacter object, call it at newChar[index]
        //console.log(newChar[i]);
    }
    setPositions();
}


//-------------------------------------------------------------------------
//Generate the Skybox
//-------------------------------------------------------------------------
function generatePlane() {
    //Generate a checkerboard plane

    var pGeometry = new THREE.PlaneGeometry(100, 100, 32);
    var goalGeometry = new THREE.PlaneGeometry(10, 10, 32);
    var bLandGeometry = new THREE.PlaneGeometry(30, 30, 32);

    //-------------------------------------------------------------------------
    //Do some basic setup to generate a checkerboard pattern on the plane
    //-------------------------------------------------------------------------
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
    var pMaterial1 = new THREE.MeshBasicMaterial({
        color: 0xFB3AEC,
        side: THREE.DoubleSide
    });
    var pMaterial2 = new THREE.MeshBasicMaterial({
        color: 0x4ec2fd,
        side: THREE.DoubleSide
    });

    //-------------------------------------------------------------------------
    //Make the "box"
    //-------------------------------------------------------------------------
    floor = new THREE.Mesh(pGeometry, new THREE.MeshFaceMaterial(pCheckerboardMaterial));

    for (let i = 0; i < 4; i++) {
        wall.push(new THREE.Mesh(pGeometry, new THREE.MeshFaceMaterial(pCheckerboardMaterial)));
    }
    ceiling = new THREE.Mesh(pGeometry, new THREE.MeshFaceMaterial(pCheckerboardMaterial));

    //-------------------------------------------------------------------------
    //Make a goal
    //-------------------------------------------------------------------------
    goal.push(new THREE.Mesh(goalGeometry, new THREE.MeshFaceMaterial(pMaterial1)));
    goal.push(new THREE.Mesh(goalGeometry, new THREE.MeshFaceMaterial(pMaterial1)));
    ballLanding = new THREE.Mesh(bLandGeometry, new THREE.MeshFaceMaterial(pMaterial2));
    //Init values for Skybox
    ballLanding.rotation.x = 1.55;
    ballLanding.position.y = -10;
    goal[0].position.x = 45;
    goal[0].rotation.y = 1.55;
    goal[1].position.x = -45;
    goal[1].rotation.y = 1.55;
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
    wall,
    ballLanding,
    goal
};