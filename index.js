const readline = require("readline");
const { application } = require("./applicationLayer");
const log = console.log;
const uuid = require("uuid");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let cnt = 4;
let [ from, to, title, file ] = [ "", "", "", "" ];
log(uuid.v4());
log("From주소를 입력해 주세요");
rl.on('line', (line) => {
    if (cnt=== 4) {
        from = line;
        log("To주소를 입력해 주세요");
    } else if (cnt=== 3) {
        to = line;
        log("Title을 입력해 주세요");
    } else if (cnt=== 2) {
        title = line;
        log("첨부파일을 입력해 주세요");
    } else {
        file = line;
        rl.close();
    }
    cnt--;
})

rl.on('close', () => {
    main();
    process.exit();
})

const main = () => {
    application(from,to,title,file);

}
