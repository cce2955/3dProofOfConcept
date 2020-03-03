//Set bounds for..everything
var players = {
    //Player stats
    //Assign the max amount of players to be on field
    //Also give them an ID, a team ID number
    //and their individual stats
    max: 0,
    id: 0,
    team: 0,
    attack: 0,
    speed: 0,
    defense: 0,
    shoot: 0,
    pass: 0,
    block: 0,
    luck: 0,
    posX: 0,
    posY: 0,
    posZ: 0,
    skillPoints: 0,

    //Getters and setters
    //Get the ID of the current player
    getId: function () {
        return this.id;
    },
    setId: function (id) {
        this.id = id;
    },
    //Assign them to a team
    getTeam: function () {
        return this.team;
    },
    setTeam: function (team) {
        this.team = team;
    },
    //Get their attack stat
    getAttack: function () {
        return this.attack;
    },
    setAttack: function (attack) {
        this.attack = attack;
    },
    //Get their speed stat
    getSpeed: function () {
        return this.speed;
    },
    setSpeed: function (speed) {
        this.speed = speed;
    },
    //Get their defense
    getDefense: function () {
        return this.defense;
    },
    setDefense: function (defense) {
        this.defense = defense;
    },
    //Get their shoot stat
    getShoot: function () {
        return this.shoot;
    },
    setShoot: function (shoot) {
        this.shoot = shoot;
    },
    //Get their pass stat
    getPass: function () {
        return this.pass;
    },
    setPass: function (pass) {
        this.pass = pass;
    },
    //Get the block stat
    getBlock: function () {
        return this.block;
    },
    setBlock: function (block) {
        this.block = block;
    },
    //Get luck stat AKA the best stat ever
    getLuck: function () {
        return this.luck;
    },
    setLuck: function (luck) {
        this.luck = luck;
    },

    getPosX: function () {
        return this.posX;
    },
    setPosX: function (posX) {
        this.posX = posX;
    },
    getPosY: function () {
        return this.posY;
    },
    setPosY: function (posY) {
        this.posY = posY;
    },
    getPosZ: function () {
        return this.posZ;
    },
    setPosZ: function (posZ) {
        this.posZ = posZ;
    },
    //This feature is defunct unless I reimplement it later
    getSkillPoints: function () {
        return this.skillPoints;
    },
    setSkillPoints: function (skillPoints) {
        this.skillPoints = skillPoints;
    },

    //Assign an amount of players to be place in the game
    getMaxPlayers: function () {
        return this.max;
    },
    setMaxPlayers: function (max) {
        this.max = max;
    }
}
var walls = {
    xWallWidth: 0,
    yWallWidth: 0,
    zWallWidth: 0,
    getXWallWidth: function () {
        return this.xWallWidth;
    },
    setXWallWidth: function (xWallWidth) {
        this.xWallWidth = xWallWidth;
    },
    getYWallWidth: function () {
        return this.yWallWidth;
    },
    setYWallWidth: function (yWallWidth) {
        this.yWallWidth = yWallWidth;
    },
    getZWallWidth: function () {
        return this.zWallWidth;
    },
    setZWallWidth: function (zWallWidth) {
        this.zWallWidth = zWallWidth;
    }
}
var possession = {
    //Determine if the player has the ball
    ball: true,
    //Determine if you're on the same team as someone holding the ball
    teamBall: true,
    hasBallPossession: function () {
        return this.ball;
    },
    setBallPossession: function (ball) {
        this.ball = ball;
    },
    hasTeamPossession: function () {
        return this.teamBall;
    },
    setTeamPossession: function (teamBall) {
        this.teamBall = teamBall;
    }
}
export {
    players,
    walls,
    possession
};