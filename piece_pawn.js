//♟♙

import { Piece } from "./piece.js";

class Pawn extends Piece {
    constructor(x,y,color) {
        super(x,y,color);
        this.str="pawn";
    }

    

    canMove(to) {
        if (this.color) {
            return this.position.y-1 === to.y && this.position.x === to.x // black
        } else {
            return this.position.y+1 === to.y && this.position.x === to.x // white
        }
    }

    // toQueen() {}
}

export { Pawn }