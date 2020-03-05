//Okay, this will be a fun one
//GUI will display whoever has the ball.
//Collision will be revamped to check who is in a certain range
//If so, those players will be displayed on the GUI and also moved
//in range.

import {
    newChar
} from '../main/main.js';
import {
    sphere
} from '../ball.js' //Delete this
import {
    players
} from '../logic/logic.js';

/* (mesh, id, team, attack, block, defense, luck, pass, shoot,
        speed, positions, possession, teamPossession*/
var guiAttackArray = [];
var guiBlockArray = [];
var guiDefenseArray = [];
var guiLuckArray = [];
var guiPassArray = [];
var guiShootArray = [];
var Attack = []

function populateArrays() {

    newChar.forEach(player => {
        guiAttackArray.push(player.attack)
    })

}



var guiBallObj = new function ballGUI() {
    this.ballY = sphere.position.y;
    this.ballX = sphere.position.x;
    this.ballZ = sphere.position.z;

}

//Working on away to populate the playerOBJ

var guiPlayerObj = new function playerGUI() {
    //    this.Attack = newChar[0].attack;
}






export {
    guiBallObj,
    guiPlayerObj,
    populateArrays
}