//♟♙

import { Piece } from "./piece.js";

class Pawn extends Piece {
    constructor(x,y,color) {
        super(x,y,color);
        this.str="pawn";
    }

    

    canMove(to) {
        if (this.color) {
            return this.position.y+1 === to.y // black
        } else {
            return this.position.y-1 === to.y // white
        }
    }

    // toQueen() {}
}

export { Pawn }