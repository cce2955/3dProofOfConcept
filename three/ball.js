var geometry = new THREE.SphereGeometry(1, 64, 64);
var material = new THREE.MeshBasicMaterial({
    color: 0x3358FF,
    wireframe: true, //Make a blue material to hold over the ball
    opacity: .85
});
//New sphere for lock on reticle
var lGeometry = new THREE.SphereGeometry(.2, 32, 32);
var lMaterial = new THREE.MeshBasicMaterial({
    color: 0xffd000,
    wireframe: true, //Make a yellow material for the lockon
    opacity: .85
});
export var sphere = new THREE.Mesh(geometry, material);
export var lockSphere = new THREE.Mesh(lGeometry, lMaterial)
export var pivotPoint = new THREE.Object3D;


