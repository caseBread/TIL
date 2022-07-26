import { Bishop } from "./piece_bishop.js";
import { Knight } from "./piece_knight.js";
import { Pawn } from "./piece_pawn.js";
import { Queen } from "./piece_queen.js";
import { Rook } from "./piece_rook.js";
import { printBoard } from "./print.js"

const log = console.log;

const piecePoint = {
    pawn: 1,
    bishop: 2,
    knight: 3,
    rook: 5,
    queen: 9,
}; Object.freeze(piecePoint);

const pieceMax = {
    pawn: 8,
    bishop: 2,
    knight: 2,
    rook: 2,
    queen: 1,
}; Object.freeze(pieceMax);

class Spot {
    constructor (x,y,piece) {
        this.piece = piece;
        this.x = x;
        this.y = y;

    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getPiece() {
        return this.piece;
    }
}

class Board {
    constructor () {
        this.resetBoard();
        this.board = new Array(8);
        for (let i = 0; i < 8; i++) {
            this.board[i] = new Array(8);
        }
    }

    display() {
        printBoard(this.board);
    }

    getScore() {
        let [ blackPoint, whitePoint ] = [ 0, 0 ]
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                // 점수계산
            }
        }
    }

    resetBoard() {   
        // initPiece 8*8 반복
        this.initPiece(0,0,new Rook(true));
        this.initPiece(0,1,new Knight(true));
        this.initPiece(0,2,new Bishop(true));
        this.initPiece(0,3,null);
        this.initPiece(0,4,new Queen(true));
        this.initPiece(0,5,new Bishop(true));
        this.initPiece(0,6,new Knight(true));
        this.initPiece(0,7,new Rook(true));

        for (let i = 0; i < 8; i++) {
            this.initPiece(1,i,new Pawn(true));
        }

        for (let i = 2; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                this.initPiece(i,j,null);
            }
        }

        for (let i = 0; i < 8; i++) {
            this.initPiece(6,i,new Pawn(true));
        }

        this.initPiece(7,0,new Rook(true));
        this.initPiece(7,1,new Knight(true));
        this.initPiece(7,2,new Bishop(true));
        this.initPiece(7,3,null);
        this.initPiece(7,4,new Queen(true));
        this.initPiece(7,5,new Bishop(true));
        this.initPiece(7,6,new Knight(true));
        this.initPiece(7,7,new Rook(true));
    }

    initPiece(x,y,type) {
        // [y][x]에 말 생성
        // if type == null : 빈공간

        // 최대개수보다 많이 생성할 경우 error throw 해야함
        this.board[y][x] = new Spot(x,y,type);

    }

    move(from, to) {
        //같은 색상의 말이 to 위치에 다른 말이 이미 있으면 옮길 수 없다
        // 말을 옮길 수 있으면 true, 옮길 수 없으면 false를 리턴한다.
        // 만약, 다른 색상의 말이 to 위치에 있는 경우는 기존에 있던 말을 제거하고 이동한다.
        // 다른 색상의 말을 제거한 경우는 흑과 백 점수를 출력한다.
        // return boolean
    }
}


export { Board }