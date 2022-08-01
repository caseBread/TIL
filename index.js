const { Path } = require("./path.js");

const log = console.log;

const path = new Path("/home/user/boost/camp/challenge/day17/problem.md");
log(path.stringfy());