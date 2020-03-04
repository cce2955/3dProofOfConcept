//Create a class to combine the 3D mesh and the player information

//-------------------------------------------------------------------------
//Create a character class
//-------------------------------------------------------------------------
class createdCharacter {
    constructor(mesh, id, team, attack, block, defense, luck, pass, shoot, 
        speed, positions, possession, teamPossession) {
            //Determine the mesh used
            this.mesh = mesh;
            //Determine the ID
            this.id = id;
            //Determine which team  you're on
            this.team = team;
            //Attack Strength
            this.attack = attack;
            //Ball blocking strength
            this.block = block;
            //Defense
            this.defense = defense;
            //Modifier for lucky blocks/attacks/etc
            this.luck = luck;
            //Pass variable, goes against block
            this.pass = pass;
            //Shoot goes against block
            this.shoot = shoot;
            //Speed on the field, may implement evasion
            this.speed = speed;
            //Goalie? Left Fielder? Right Fielder? define here
            this.positions = positions;
            //Ball possession and team possession
            this.possession = possession;
            this.teamPossession = teamPossession;
    }
}
//-------------------------------------------------------------------------
//Exports
//-------------------------------------------------------------------------
export {
    createdCharacter
};