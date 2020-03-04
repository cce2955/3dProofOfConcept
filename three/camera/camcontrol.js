import {
    camera
} from "../main/main.js";


//Camera controls
//Some basic camera controls because debugging with a single view is annoying
//WASD translates, arrow keys rotate
//very very basic but for debugging
//-------------------------------------------------------------------------
//Add listeners
//-------------------------------------------------------------------------
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
//-------------------------------------------------------------------------
//Init variables
//-------------------------------------------------------------------------
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var wPressed = false;
var aPressed = false;
var sPressed = false;
var dPressed = false
//-------------------------------------------------------------------------
//Key down handler
//-------------------------------------------------------------------------
function keyDownHandler(event) {
    if (event.keyCode == 39) {
        rightPressed = true;
    } else if (event.keyCode == 37) {
        leftPressed = true;
    }
    if (event.keyCode == 40) {
        downPressed = true;
    } else if (event.keyCode == 38) {
        upPressed = true;
    }
    if (event.keyCode == 87) {
        wPressed = true;
    } else if (event.keyCode == 65) {
        aPressed = true;
    }
    if (event.keyCode == 68) {
        dPressed = true;
    } else if (event.keyCode == 83) {
        sPressed = true;
    }
}

//-------------------------------------------------------------------------
//Key up handler
//-------------------------------------------------------------------------
function keyUpHandler(event) {
    if (event.keyCode == 39) {
        rightPressed = false;
    } else if (event.keyCode == 37) {
        leftPressed = false;
    }
    if (event.keyCode == 40) {
        downPressed = false;
    } else if (event.keyCode == 38) {
        upPressed = false;
    }
    if (event.keyCode == 87) {
        wPressed = false;
    } else if (event.keyCode == 65) {
        aPressed = false;
    }
    if (event.keyCode == 68) {
        dPressed = false;
    } else if (event.keyCode == 83) {
        sPressed = false;
    }
}
//-------------------------------------------------------------------------
//Actual logic for camera control
//At the moment it's tank controls
//-------------------------------------------------------------------------
function cameraControl() {
    if (rightPressed) {
        camera.rotation.y += .02;
    } else if (leftPressed) {
        camera.rotation.y -= .02;
    }
    if (downPressed) {
        camera.rotation.x -= .02;
    } else if (upPressed) {
        camera.rotation.x += .02;
    }
    if (sPressed) {
        camera.position.z += .4;
    } else if (wPressed) {
        camera.position.z -= .4;
    }
    if (dPressed) {
        camera.position.x += .4;
    }
    if (aPressed) {
        camera.position.x -= .4;
    }
}

export {
    cameraControl,
    keyDownHandler
};