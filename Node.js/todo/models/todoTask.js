// 필요한 모듈 require
const mongoose = require('mongoose');

// 사용할 스키마 객체 생성


const todoTaskSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }
});


// refactoring 가능하도록 exports 해주기
module.exports = mongoose.model('TodoTask', todoTaskSchema);