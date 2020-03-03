//Set geometry of sphere
export var cGeometry = new THREE.BoxGeometry();
//Define colors for us humans
//This doesn't affect calculation at all
//but for me to discern what's going on
//I'm going to add these materials
export var cMaterialGreen = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
export var cMaterialRed = new THREE.MeshBasicMaterial({
    color: 0xe63600
});