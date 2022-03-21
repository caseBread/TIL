// 필요한 모듈 require
const express = require("express");
const app = express();
const router = express.Router();

const TodoRouter = require('./todo');

// 해당 폴더 내의 todo.js 파일을 refactoring
router.use('/todo', TodoRouter);

module.exports = router;


 