const { Path } = require("./path.js");
const log = console.log;

const str = "C:\\home\\user\\boost\\camp;\\challenge\\day17\\problem.md";
const whatFolder = str.includes("/") ? "/" : "\\";
const strArr = str.includes("/") ? str.match(/^[A-Z]:[^:*?"<>|]+|[^:*?"<>|]+/gm) : str.match(/^[A-Z]:[^;*?"<>|]+|[^;*?"<>|]+/gm)
const result = strArr.map((x) => {
    const path = new Path(x);
    log(path.relative("/usr/aaaa"))
    return path.stringfy();
});

log(result);
