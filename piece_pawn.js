//♟♙

import { Piece } from "./piece";

class Pawn extends Piece {
    constructor(color) {
        super(color);
        this.str="pawn";
    }
}

export { Pawn }