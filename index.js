import { Board } from "./board.js";
import readline from "readline";
const log = console.log;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chess = new Board();

process.stdout.write("명령어를 입력하세요 >");
rl.on("line", (line) => {
    log(line, "을 입력하였습니다.")

    if (chess.isError(line)) {
        chess.move(line.substring(0,2),line.substring(4,6));
        chess.display();
    } else if (line.charAt(0) === "?") {
        // possiblePositions 이용
    } else {
        log("잘못된 명령어입니다.")
    }
    process.stdout.write("명령어를 입력하세요 >");
});
