// 필요한 모듈 require
const express = require("express");
const app = express();
const router = express.Router(); // express의 라우터 기능

const controller = require("../controllers/todo");

// 이 파일을 export하여 다른 파일에서 사용 가능하도록 함.
module.exports = router;

// Main
router.get('/', controller.get);

// Write
router.post('/write', controller.write);

// Edit
router.get("/edit/:id", controller.edit);

// Update
router.post("/update/:id", controller.update);

// Remove
router.get("/remove/:id", controller.remove);

