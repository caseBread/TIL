const { Path } = require("./path.js");
const log = console.log;

const str = "C:\\home\\user\\boost\\camp;\\challenge\\day17\\problem.md";

function multiplePath(str) {
    return str.includes("/") ? str.match(/^[A-Z]:[^:*?"<>|]+|[^:*?"<>|]+/gm) : str.match(/^[A-Z]:[^;*?"<>|]+|[^;*?"<>|]+/gm);
}

// strArr = multiplePath(str);

// const result = strArr.map((x) => {
//     const path = new Path(x);
//     return path.stringfy();
// });

// log(result);

// const a = new Path ("C:\\home\\user\\boost.md");

module.exports = { multiplePath }