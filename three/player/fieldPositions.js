//-------------------------------------------------------------------------
//Define Field locations here
//Originally I was going to define all this in a text file but I'm not in
//The mood to mess with node.js at the moment, that'll be for a future 
//project
//So all field assignments are delegated here
//As of this writing, stats are randomized in logic.js, then imported here
//To be sorted into a "suggested" placement for each object
//-------------------------------------------------------------------------

import {
    newChar
} from '../logic/logic.js'
import {
    positions
} from './enumerations.js';
//-------------------------------------------------------------------------
//Variable Init
//-------------------------------------------------------------------------
var passArray, defenseArray, shootArray, blockArray, idArray;
var isAssigned, isAssignedAlt;

var assignable = [];

//-------------------------------------------------------------------------
//Set positions and then their place on the field
//-------------------------------------------------------------------------
function setPositions() {

    //It's way too late but I realized I could easily turn this into a method 
    //I'm repeating the same thing four times, that may be a refactor later on
    //Definitely looking like a refactor, there are tiny things I could do
    //To make this code work but for now this does its job
    //-------------------------------------------------------------------------
    //Define, sort and reverse the array
    //-------------------------------------------------------------------------
    defineArrays();
    sortArrays(passArray, idArray);
    idArray.reverse();
    //-------------------------------------------------------------------------
    //Define bool for detecting when a position has been filled
    //When detected it "breaks" the loop
    //-------------------------------------------------------------------------
    for (var i = 0; i < 4; i++) {
        assignable[i] = false;
    }
    //-------------------------------------------------------------------------
    //Detect Left and Right Fielder
    //If the unit doesn't have a position assigned, it's assignable bool is 
    //false and it's of the correct team, assign it the relevant position
    //-------------------------------------------------------------------------
    idArray.forEach(element => {
        if (newChar[element].positions == positions.NULL && assignable[0] ==
            false && newChar[element].team == 1) {
            newChar[element].mesh.position.x = -13;
            newChar[element].mesh.position.z = -13;
            newChar[element].positions = positions.LF;
            assignable[0] = true;
        }
        if (newChar[element].positions == positions.NULL && assignable[1] ==
            false && newChar[element].team == 2) {
            newChar[element].mesh.position.x = 13;
            newChar[element].mesh.position.z = 13;
            newChar[element].positions = positions.LF;
            assignable[1] = true;
        }
        if (newChar[element].positions == positions.NULL && assignable[2] ==
            false && newChar[element].team == 1) {
            newChar[element].mesh.position.x = -13;
            newChar[element].mesh.position.z = 13;
            newChar[element].positions = positions.RF;
            assignable[2] = true;
        }
        if (newChar[element].positions == positions.NULL && assignable[3] ==
            false && newChar[element].team == 2) {
            newChar[element].mesh.position.x = 13;
            newChar[element].mesh.position.z = -13;
            newChar[element].positions = positions.RF;
            assignable[3] = true;
        }
    });
    //-------------------------------------------------------------------------
    //Define, sort, and reverse the ID array for defenders
    //Also reset bool
    //-------------------------------------------------------------------------         
    defineArrays();
    sortArrays(defenseArray, idArray)
    idArray.reverse();
    for (var i = 0; i < 4; i++) {
        assignable[i] = false;
    }
    //-------------------------------------------------------------------------
    //Detect Left and Right Fielder
    //-------------------------------------------------------------------------
    idArray.forEach(element => {
        if (newChar[element].positions == positions.NULL && assignable[0] ==
            false && newChar[element].team == 1) {
            newChar[element].mesh.position.x = -26;
            newChar[element].mesh.position.z = -26;
            newChar[element].positions = positions.LD;
            assignable[0] = true;
        }
        if (newChar[element].positions == positions.NULL && assignable[1] ==
            false && newChar[element].team == 2) {
            newChar[element].mesh.position.x = 26;
            newChar[element].mesh.position.z = 26;
            newChar[element].positions = positions.LD;
            assignable[1] = true;
        }
        if (newChar[element].positions == positions.NULL && assignable[2] ==
            false && newChar[element].team == 1) {
            newChar[element].mesh.position.x = -26;
            newChar[element].mesh.position.z = 26;
            newChar[element].positions = positions.RD;
            assignable[2] = true;
        }
        if (newChar[element].positions == positions.NULL && assignable[3] ==
            false && newChar[element].team == 2) {
            newChar[element].mesh.position.x = 26;
            newChar[element].mesh.position.z = -26;
            newChar[element].positions = positions.RD;
            assignable[3] = true;
        }

    })




    defineArrays();
    sortArrays(shootArray, idArray);
    idArray.reverse();
    isAssigned = false;
    assignable[0] = false;
    assignable[1] = false;
    //-------------------------------------------------------------------------
    //Detect Center Shooter 
    //-------------------------------------------------------------------------
    idArray.forEach(element => {
        if (newChar[element].positions == positions.NULL && assignable[0] ==
            false && newChar[element].team == 1) {
            newChar[element].mesh.position.x = -20;
            newChar[element].mesh.position.z = 0;
            newChar[element].positions = positions.CF;
            assignable[0] = true;
//-------------------------------------------------------------------------
//For now I'm going to force possession on team 1, this may be perm, may not
//-------------------------------------------------------------------------            
            newChar[element].possession = true;
        }
        if (newChar[element].positions == positions.NULL && assignable[1] ==
            false && newChar[element].team == 2) {
            newChar[element].mesh.position.x = 20;
            newChar[element].mesh.position.z = 0;
            newChar[element].positions = positions.CF;
            assignable[1] = true;
        }
    })

    defineArrays();
    sortArrays(blockArray, idArray);
    idArray.reverse();
    assignable[0] = false;
    assignable[1] = false

    //-------------------------------------------------------------------------
    //Detect  Goalie
    //-------------------------------------------------------------------------
    idArray.forEach(element => {
        if (newChar[element].positions == positions.NULL && assignable[0] ==
            false && newChar[element].team == 1) {
            newChar[element].mesh.position.x = -40;
            newChar[element].mesh.position.z = 0;
            newChar[element].positions = positions.GK;
            assignable[0] = true;
        }
        if (newChar[element].positions == positions.NULL && assignable[1] ==
            false && newChar[element].team == 2) {
            newChar[element].mesh.position.x = 40;
            newChar[element].mesh.position.z = 0;
            newChar[element].positions = positions.GK;
            assignable[1] = true;
        }
    })



}


//-------------------------------------------------------------------------
//Bubble Sort the arrays
// It sorts it by whatever attribute we're looking at (strength, pass, etc.)
//and sorts the ID with it so the ID always stays associated with the attribute
//-------------------------------------------------------------------------
function sortArrays(array, id) {
    var n = array.length;
    for (var i = 0; i < n - 1; i++)
        for (var j = 0; j < n - i - 1; j++)
            if (array[j] > array[j + 1]) {
                // swap arr[j+1] and arr[i] 
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                //Also swap the ID so it stays together
                var temp2 = id[j];
                id[j] = id[j + 1];
                id[j + 1] = temp2;
            }
}
//-------------------------------------------------------------------------
//Get particular attributes from the newChar array
//-------------------------------------------------------------------------
function defineArrays() {
    idArray = pluck(newChar, 'id');
    passArray = pluck(newChar, 'pass');
    defenseArray = pluck(newChar, 'defense');
    shootArray = pluck(newChar, 'shoot');
    blockArray = pluck(newChar, 'block');
}
//-------------------------------------------------------------------------
//Create a pseudo Pluck function to grab individual attributes from an array
//-------------------------------------------------------------------------
function pluck(array, key) {
    return array.map(function (obj) {
        return obj[key];
    });
}



export {
    setPositions
}