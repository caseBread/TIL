//♛♕

import { Piece } from "./piece.js";

class Queen extends Piece {
    constructor(x,y,color) {
        super(x,y,color);
        this.str = "queen";
    }

    canMove(to) {
        return ((this.position.x - to.x) === (this.position.y - to.y) 
        || this.position.x === to.x || this.position.y === to.y);
    }
}

export { Queen }