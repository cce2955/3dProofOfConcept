import {
    
    guiPlayerObj,
    guiBallObj

} from "./playerGui.js";
import {
    sphere
} from "../ball.js";
import {
    newChar
} from "../main/main.js";

//GUI powered by dat.GUI
var gui = new dat.GUI({
    height: 5 * 32 * 1
})
// var messageGui = new dat.GUI({
//     height: 5 * 32 * 1
// })
function updateGUI() {
    //-------------------------------------------------------------------------
    //Due to rampant confusion I will be setting up a method to update the 
    //functions constantly which sounds like a memory and computational problem
    //but I dunno anymore
    //So any variables implemented in the GUI will be updated here and given a
    //display update
    guiBallObj.ballX = sphere.position.x;
    guiBallObj.ballY = sphere.position.y;
    guiBallObj.ballZ = sphere.position.z;
    newChar.forEach(player => {
        if (player.possession){ //Display stats of active player
            guiPlayerObj.Position = player.positions;
            guiPlayerObj.A = player.attack;
            guiPlayerObj.B = player.block;
            guiPlayerObj.D = player.defense;
            guiPlayerObj.L = player.luck;
            guiPlayerObj.S = player.shoot;
            guiPlayerObj.P = player.pass;
        }
    })
    gui.updateDisplay();
}

function addGui() {
    gui.add(guiPlayerObj, "Position")
    gui.add(guiPlayerObj, 'A');
    gui.add(guiPlayerObj, 'B');
    gui.add(guiPlayerObj, 'D');
    gui.add(guiPlayerObj, 'L');
    gui.add(guiPlayerObj, 'P');
    gui.add(guiPlayerObj, 'S');
    
    //function to add GUI to screen dynamically
}

//test.move = sphere.position.y;
//Remember to update the function containing the 
//properties to get a GUI update
export {
    gui,
    updateGUI,
    addGui    
}