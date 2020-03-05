import {
    newChar
} from '../logic/logic.js'
import {
    momentum
} from './kickoff.js'
//-------------------------------------------------------------------------
//Have in every single even class from here on out
//boolArray ID is [1]
//-------------------------------------------------------------------------
import {
    boolArray
} from '../main/main.js';
import {
    sphereCubeColl
} from './collision.js'
import {
    sphere
} from '../ball.js';

function whoHasBall(object) {

    object.rotation.y += momentum;
    if (momentum > 10000) {
        momentum = 4000; //Keep the ball spinning at a constant rate
    }
    if (object.rotation.y > 100000) {
        object.rotation.y = 100; //Keep the object from reaching an 
        //infinite matrix overflow
    } //Maintain spin from kickoff.js
    newChar.forEach(player => {

        //Cycle through the array of objects and find the player
        //holding the ball, once found, send the ball to them.
        if (player.possession == true) {
            var d = object.position.x - player.mesh.position.x;
            if (object.position.x > player.mesh.position.x) {
                object.position.x -= 2;
            }
            if (object.position.y > player.mesh.position.y) {
                object.position.y -= 2;
            }
            if (object.position.z > player.mesh.position.z) {
                object.position.z -= 2;
            }
            if (object.position.x < player.mesh.position.x) {
                object.position.x += 2;
            }
            if (object.position.y < player.mesh.position.y) {
                object.position.y += 2;
            }
            if (object.position.z < player.mesh.position.z) {
                object.position.z += 2;
            }
            //I've gone through so many iterations but since we're dealing
            //With a different iteration of an object there's no real way
            //To properly check this
            //So after kickoff, it locates the character marked with 
            //Possession and goes right to them

            if (sphereCubeColl(object, player)) {
                //If ball is touching player, drop out of this method
                boolArray[1] = false;
            }
        }
    })

    //Looks like collision is next, if collision is found, activate:
    //boolArray[1] = false;
}

export {
    whoHasBall
}