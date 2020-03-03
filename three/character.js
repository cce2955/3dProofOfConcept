//Create a class to combine the 3D mesh and the player information

class createdCharacter {
    constructor(mesh, id, team, attack, block, defense, luck, pass, shoot, 
        speed, posX, posY, posZ) {
            this.mesh = mesh;
            this.id = id;
            this.team = team;
            this.attack = attack;
            this.block = block;
            this.defense = defense;
            this.luck = luck;
            this.pass = pass;
            this.shoot = shoot;
            this.speed = speed;
            this.posX = posX;
            this.posY = posY;
            this.posZ = posZ
    }
}

export {
    createdCharacter
};