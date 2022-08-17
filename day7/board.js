import { file, rank, getKeyByValue} from "./file_rank.js";
import { Bishop } from "./piece_bishop.js";
import { Knight } from "./piece_knight.js";
import { Pawn } from "./piece_pawn.js";
import { Queen } from "./piece_queen.js";
import { Rook } from "./piece_rook.js";
import { Position } from "./position.js";
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
    constructor() {
        this.board = Array.from(Array(8), () => new Array(8))
        this.resetBoard();
    }

    display() {
        printBoard(this.board);
    }

    printScore() {
        let [ blackPoint, whitePoint ] = [ 0, 0 ]
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (this.board[i][j].piece !== null) {
                    const point = piecePoint[this.board[i][j].piece.str]
                    if (this.board[i][j].piece.color) {
                        blackPoint += point;
                    } else {
                        whitePoint += point;
                    }
                }
            }
        }
        log("검정 점수 :",blackPoint, "하양 점수 :", whitePoint);
    }
    resetBoard() {   
        // initPiece 8*8 반복
        this.initPiece(0,0,new Rook(0,0,0));
        this.initPiece(0,1,new Knight(0,1,0));
        this.initPiece(0,2,new Bishop(0,2,0));
        this.initPiece(0,3,null);
        this.initPiece(0,4,new Queen(0,4,0));
        this.initPiece(0,5,new Bishop(0,5,0));
        this.initPiece(0,6,new Knight(0,6,0));
        this.initPiece(0,7,new Rook(0,7,0));

        for (let i = 0; i < 8; i++) {
            this.initPiece(1,i,new Pawn(1,i,0));
        }

        for (let i = 2; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                this.initPiece(i,j,null);
            }
        }

        for (let i = 0; i < 8; i++) {
            this.initPiece(6,i,new Pawn(6,i,1));
        }

        this.initPiece(7,0,new Rook(7,0,1));
        this.initPiece(7,1,new Knight(7,1,1));
        this.initPiece(7,2,new Bishop(7,2,1));
        this.initPiece(7,3,null);
        this.initPiece(7,4,new Queen(7,4,1));
        this.initPiece(7,5,new Bishop(7,5,1));
        this.initPiece(7,6,new Knight(7,6,1));
        this.initPiece(7,7,new Rook(7,7,1));

        log("체스 보드를 초기화했습니다.")
    }

    initPiece(y,x,type) {
        // if type == null : 빈공간

        // 최대개수보다 많이 생성할 경우 error throw 해야함
        this.board[y][x] = new Spot(x,y,type);

    }

    isMove(p) {
        const [ pX, pY ] = [ file[p.charAt(0)]-1, p.charAt(1)-1 ];
        if (this.board[pY][pX].piece === null) {
            log("해당 칸에 체스 말이 없습니다.");
            return;
        }
        
        this.board[pY][pX].piece.possiblePositions().forEach((d,i) => {
            process.stdout.write(file[d.x+1]+(d.y+1)+", ");
        })
        log();
    }

    move(from, to) {
        let flag = false;
        const [ fromX, fromY ] = [ file[from.charAt(0)]-1, rank[from.charAt(1)]-1 ];
        const [ toX, toY ] = [ file[to.charAt(0)]-1, rank[to.charAt(1)]-1 ];
        const toPosition = new Position(toX,toY);
        // 옮길 체스 말이 없는 경우
        if (this.board[fromY][fromX].piece === null) {
            log("옮길 체스 말이 없습니다.");
            return false;
        }
        // 옮길 수 없는 경우
        if (this.board[toY][toX].piece !== null && this.board[toY][toX].piece.color === this.board[fromY][fromX].piece.color) {
            log("옮길 위치에 같은 색의 체스 말이 있습니다.");
            return false;
        }

        if (!this.board[fromY][fromX].piece.canMove(toPosition)) {
            log("옳바른 이동이 아닙니다.");
            return false;
        }

        if (this.board[toY][toX] !== null) flag = true;
        this.board[fromY][fromX].piece.position = toPosition;
        this.board[toY][toX].piece = this.board[fromY][fromX].piece;
        this.board[fromY][fromX].piece = null;
        if (this.board[toY][toX].piece.str === "pawn" && (this.board[toY][toX].y === 7 || this.board[toY][toX].y === 1)) {
            this.board[toY][toX].piece = new Queen(toY,toX,this.board[toY][toX].piece.color);
        }
        if (flag) this.printScore();

        return true;
    }
}


export { Board }