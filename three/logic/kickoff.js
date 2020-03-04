import {
    sphere
} from '../ball.js'
import {
    walls
} from './setBounds.js';
import { newChar } from './logic.js';
var momentum = 0.000001;

function kickOff(object) {

    momentum = momentum * 1.1;
    sphere.rotation.y = momentum; //Spin ball faster until whatever
    if (momentum > 10000) { //When ball hits whatever, cap it
        momentum = 10000;
        
        //I can tell I'm burnt out for today, this is for tomorrow
        
            object.position.y += .06; //Raise it to the ceiling
        
    }


   
      
        //assign ball to team and give it to positions.cf
        //Write logic to push ball to player and then do
        //team AI
    
    
    newChar.forEach(player =>{
        if (player.id == 1){
            while(object.position > player.position){
                object.position.y -= .01;
                object.position.x -= .01;
                object.position.z -= .01;      
               }
            }
    });
    

}


export {
    kickOff
}