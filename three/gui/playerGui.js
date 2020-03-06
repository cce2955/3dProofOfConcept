//Okay, this will be a fun one
//GUI will display whoever has the ball.
//Collision will be revamped to check who is in a certain range
//If so, those players will be displayed on the GUI and also moved
//in range.

import {
    newChar
} from '../logic/logic.js';
import {
    sphere
} from '../ball.js' //Delete this
import {
    players
} from '../logic/logic.js';

/* (mesh, id, team, attack, block, defense, luck, pass, shoot,
        speed, positions, possession, teamPossession*/
var guiBallObj = new function ballGUI() {
    this.ballY = sphere.position.y;
    this.ballX = sphere.position.x;
    this.ballZ = sphere.position.z;

}

//Working on away to populate the playerOBJ

var guiPlayerObj = new function playerGUI() {
    this.Position = "NULL";
    this.A = 0;     //Attack
    this.B = 0;     //Block
    this.D = 0;     //Defense
    this.L = 0;     //Luck
    this.P = 0;     //Pass
    this.S = 0;     //Shoot
    
    //Create empty variables
    //As a character is being displayed these values will update
    //in real time, variables are shorthand for screen space
   
   
}






export {
    guiBallObj,
    guiPlayerObj
}