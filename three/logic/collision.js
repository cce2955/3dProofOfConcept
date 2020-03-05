//newChar[0].mesh.scale.y;
//Determine height, y heigh, x width, z depth
var result = false;

function sphereCubeColl(object /* ball */ , player /*player/opponent*/ ) {
    if (player.mesh.position.distanceToSquared(object.position) < 1) {
        return true;
        //I was going to calculate this for real but got kind of tired of
        //going through the motions
        //Here you go, if ball collides with player, return true
    }

}

export {
    sphereCubeColl
}