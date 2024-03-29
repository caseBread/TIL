const { Path } = require("./path.js");
const log = console.log;

const str = "C:\\home\\user\\boost\\camp;\\challenge\\day17\\problem.md";

function multiplePath(str) {
    return str.includes("/") ? str.match(/^[A-Z]:[^:*?"<>|]+|[^:*?"<>|]+/gm) : str.match(/^[A-Z]:[^;*?"<>|]+|[^;*?"<>|]+/gm);
}

module.exports = { multiplePath }