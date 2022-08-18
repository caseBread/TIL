//♞♘

import { Piece } from "./piece.js";

const knightMove = [
    [2,-1],[2,1],[1,2],[-1,2],
    [-2,1],[-2,-1],[-1,-2],[1,-2]
]; Object.freeze(knightMove);

class Knight extends Piece {
    constructor(x,y,color) {
        super(x,y,color);
        this.str = "knight";
    }

    canMove(to) {
        for ([dy,dx] in knightMove) {
            if (this.position.y+dy === to.y && this.position.x+dx === to.x) {
                return true;
            }
        }
        return false;
    }
    
} 

export { Knight }