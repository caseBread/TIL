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

    //override
    possiblePositions() {
        const result = []
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                temp = new Position(i,j);
                if (this.canMove(temp)) {
                    result.push[temp];
                }
            }
        }
        return result;
    }
}

export { Bishop }