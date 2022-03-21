// 필요한 모듈 require
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

// 라우터 생성
const router = require("./routes/index");


const app = express(); // 앱 생성
const port = 3000; // port 입력

app.use(router); // 앱에 라우터 설정

app.set("view engine", "ejs"); // 뷰엔진 설정 
app.set("views", path.join(__dirname + '/public')); // 템플릿 경로

app.use("/public", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// MongoDB 연결 및 서버 오픝
mongoose.connect("mongodb://localhost:27017/node", {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if (err) { // err 변수 (아무이름 사용 가능) 에러 설명이 담긴 객체를 포함
        console.error("mongoDB Connection Error!", err);
    }
    console.log("mongoDB Connected!");

    app.listen(port, function() {
        console.log("Server listening on port " + port + "!");
    });
});

