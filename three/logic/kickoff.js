import {
    walls
} from './setBounds.js';
//-------------------------------------------------------------------------
//Have in every single even class from here on out
//boolArray ID is [0]
//-------------------------------------------------------------------------
import {
    boolArray
} from '../main/main.js';
var momentum = 0.000001;
var kickUp = true;
var destX, destY, destZ;
var isObjPos = [];
var isElePos = [];

function kickOff(object) {

    if (object.position.y < walls.yWallWidth - 5 && kickUp == true) {
        momentum = momentum * 1.1;
        object.rotation.y = momentum; //Spin ball faster until whatever

        if (momentum > 3000) {
            object.position.y += .5; //Raise it to the ceiling
        }

    }
    if (object.position.y >= 45) {
        kickUp = false
    }

    if (kickUp == false) {

        object.rotation.y += momentum;
        if (momentum > 10000) {
            momentum = 4000; //Keep the ball spinning at a constant rate
        }
        if (object.rotation.y > 100000) {
            object.rotation.y = 100; //Keep the object from reaching an 
            //infinite matrix overflow
        }
        //It looks ugly but I don't feel like messing with these values
        //I'll do calculation later
        boolArray[0] = false; //End kick off
        boolArray[1] = true; //Activate holdBall.js


    }

}










export {
    kickOff,
    momentum
}