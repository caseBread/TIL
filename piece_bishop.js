//♝♗
import { Piece } from "./piece.js";
import { Position } from "./position.js";

class Bishop extends Piece {
    constructor(x,y,color) {
        
        super(x,y,color);
        this.str = "bishop";
    }
    // 잘못된 위치일 때 error throw ??
    canMove(to) {
        return (this.position.x - to.x) === (this.position.y - to.y);
    }

}

export { Bishop }