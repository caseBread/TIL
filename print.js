import { Board } from "./board.js";
const log = console.log;
const pieceCon = {
    pawn: ['♟','♙'],
    knight: ["♞","♘"],
    bishop: ["♝","♗"],
    rook: ["♜","♖"],
    queen: ["♛","♕"],
}; Object.freeze(pieceCon);




function printBoard(board) {
    log("  A B C D E F G H");
    for (let i = 0; i < 8; i++) {
        process.stdout.write(i+1+" ");
        for (let j = 0; j < 8; j++) {
            if (board[i][j].piece !== null) {
                process.stdout.write(pieceCon[board[i][j].piece.str][board[i][j].piece.color]+" ");
            } else {
                process.stdout.write(". ");
            }
        }
        log();
    }
}

export { printBoard }