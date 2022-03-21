// 필요한 모듈 require
const express = require("express");
const app = express();
const router = express.Router(); // express의 라우터 기능

const controller = require("../controllers/todo");



// Main
router.get('/', controller.get); // router.get(req, res)

// Write
router.post('/write', controller.write); // router.get(req, res)

// Edit
router.get("/edit/:id", controller.edit); // router.get(req, res)

// Update
router.post("/update/:id", controller.update); // router.get(req, res)

// Remove
router.get("/remove/:id", controller.remove); // router.get(req, res)



// 이 파일을 export하여 다른 파일에서 사용 가능하도록 함.
module.exports = router;