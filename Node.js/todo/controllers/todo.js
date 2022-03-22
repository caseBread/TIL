// model require
const TodoTask = require("../models/todoTask");




// Date 세팅
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");


// 이렇게하면 get이라는 이름으로 exports가 가능함.
// 이 방식과
// module.exports = {
//    get : function() {
//        ~~~
//    }
// }
// 이 두 방식은 동일하다.
exports.get = function(req, res) {
    console.log("------!Todo!-------");

    // find(filter, [options], [callback])
    // 'filter' 데이터에서 options를 기준으로 정렬하고 tasks로 받아와 함수를 실행하라
    // 여기서 함수부분은 { res.render(~~) } 이다.
    // render("ejs파일경로", { 데이터이름표 : 전송할데이터 })
    TodoTask.find({}, null, {sort: {date:-1}}, (err,tasks) => {
        res.render("todo", { todoTasks: tasks });
    });
};

exports.write = async function(req, res) {
    try {
        // 자바스크립트는 함수가 콜백형식이여야만 실행순서를 보장받을 수 있다!
        const todoTask = new TodoTask({
            content : req.body.content,
            date : moment().format("YYYY-MM-DD HH:mm:ss") // 현재시간
        });

        
        await todoTask.save(); // todoTask.save() 의 프로미스가 돌아올 때 까지 코드동작 중지
        console.log("==== Success!! save new TodoTask ====");
        console.table([{id:todoTask._id, content: todoTask.content, date:todoTask.date}]);
        res.redirect("/todo");
    } catch(err) {
        // 이쪽 에러 계속 뜸. 수정 필요
        console.error("==== fail!! save TodoTask ====");
        console.log(err);
        res.redirect("/todo");
    }
};

// 편집 창
exports.edit = function(req, res){
    const id = req.params.id; //파라미터로 받은 id를 id에 저장
    TodoTask.find({}, null, {sort: {date: -1}}, (err, tasks) => { //db에서 조회해서
        res.render("todo-edit", { todoTasks: tasks, idTask: id }); //todo-edit.ejs에 id와 함께 보낸다
    });
};

// 수정
exports.update = function(req, res){
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => { //해당 id값의 content를 변경
        if(err){
            console.log("==== Fail!! Update TodoTask ====");
            console.error(err);
        }
        console.log("==== Success!! Update TodoTask ====");
        console.log("id: " + id + "\nchanged content: " + req.body.content);
        res.redirect("/todo");
    });
}

//삭제
exports.remove = function(req, res){
    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => { //해당 id의 데이터를 삭제
        if(err){
            console.log("==== Fail!! Remove TodoTask ====");
            console.error(err);
        }
        console.log("==== Success!! Remove TodoTask ====");
        console.log("id: " + id);
        res.redirect("/todo");
    });  
};