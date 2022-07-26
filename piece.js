import { Position } from "./position";

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
    constructor(color) {
        this.position = new Position(x,y);
        this.color = color;
    }

    possiblePositions() {
        // 현재 Position을 기준으로 이동할 수 있는 모든 위치 리턴
    }
}

export { Piece }