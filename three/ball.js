export var geometry = new THREE.SphereGeometry(1, 64, 64);
export var material = new THREE.MeshBasicMaterial({
    color: 0x3358FF,
    wireframe: true,
    opacity: .85
});
export var sphere = new THREE.Mesh(geometry, material);
var pivotPoint = new THREE.Object3D();
sphere.add(pivotPoint);