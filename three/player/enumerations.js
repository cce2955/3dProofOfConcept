//-------------------------------------------------------------------------
//Enumeration definitions
//-------------------------------------------------------------------------
 const positions = {
    LF: "Left Fielder",
    RF: "Right Fielder",
    CF: "Center Fielder",
    LD: "Left Defender",
    RD: "Right Defender",
    GK: "Goal Keeper",
    NULL: "No position"
}
Object.freeze(positions); //Force the enums to be final

//-------------------------------------------------------------------------
//Exports
//-------------------------------------------------------------------------
export {positions}