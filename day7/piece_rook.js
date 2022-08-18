//♜♖

import { Piece } from "./piece.js";

class Rook extends Piece {
    constructor(x,y,color) {
        super(x,y,color);
        this.str = "rook";
    }

    canMove(to) {
        return this.position.x === to.x || this.position.y === to.y;
    }
}

export { Rook } 