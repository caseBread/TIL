const { Path } = require("./path.js");
const log = console.log;

const str = "/usr/bin:/usr/local/bin";
const strArr = str.match(/^[A-Z]:[^:*?"<>|]*|[^:*?"<>|]+/gm)
const result = strArr.map((x) => {
    const path = new Path(x);
    return path.stringfy();
});

log(result);