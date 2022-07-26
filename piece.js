import { Position } from "./position.js";

const file = {
    1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",
}; Object.freeze(file);

const rank = {
    1:"1",
    2:"2",
    3:"3",
    4:"4",
    5:"5",
    6:"6",
    7:"7",
    8:"8",
}; Object.freeze(rank);

class Piece {
    constructor(y,x,color) {
        this.position = new Position(x,y);
        this.color = color;
        
    }
    // 부모 class에서 자식 method를 가져올 수 있을까  있다 !!!!!!!!
    possiblePositions() {
        const result = []
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                var temp = new Position(i,j);
                if (this.canMove(temp)) {
                    result.push(temp);
                }
            }
        }
        return result;
    }

}

export { Piece }