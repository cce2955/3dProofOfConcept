import { lockSphere, sphere } from "../ball.js";
import {newChar} from '../logic/logic.js'

//Create a method to pass the ball
//There will be 2 checks, either the player can press a button to bring up a
//menu (which I supposed I should create before this method) or upon collision
//They'll be forced to pass the ball (among other options) 3/5/2020
function passBall() {
    
    newChar.forEach(player => {
        
        //Cycle through the array of objects and find the player
        //holding the ball, once found, send the ball to them.
        if (player.teamBall == true && !(player.possession) && !(player.positions.GK)) {
            lockSphere.position.x = player.mesh.position.x;
            lockSphere.position.y = player.mesh.position.y + 2;
            lockSphere.position.z = player.mesh.position.z + 2;
        }
    });
}

export { passBall }