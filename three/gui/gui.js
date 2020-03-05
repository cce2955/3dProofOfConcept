import {
    populateArrays,
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


    gui.updateDisplay();
}

function addGui() {

    gui.add(guiBallObj, 'ballY')
    gui.add(guiBallObj, 'ballX')

    //function to add GUI to screen dynamically
}

function destroyGui() {
    gui.destroy(); //Destroy gui when not in use
    //Probably append a bool here
}
//test.move = sphere.position.y;
//Remember to update the function containing the 
//properties to get a GUI update
export {
    gui,
    updateGUI,
    addGui,
    destroyGui
}