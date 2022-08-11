const log = console.log;
const net = require('net'); // 여기에 on에 대한 emit이 다 있고
const { checkIn } = require('./checkin');
const { checkOut } = require('./checkout');
const { mission } = require('./mission');
const { stringToArray } = require('./util');
// 

const portNumber = 2022;

let message = "";
let status = "";
let newClientId = 1;
const server = net.createServer(function(socket){
    socket.clientId = newClientId++;
	log(`${socket.address().address}:${socket.address().port} / clientId = ${socket.clientId} connected.`);
    
	socket.on('data', function(data){
        const message = data.toString('utf8').replace("\r\n","");
        /**
         * 명령어 인식 공간
         */
        
        const command = stringToArray(message);
        let returnMessage;
        
        switch (command[0]) {
            case "checkin" :
                returnMessage = checkIn(command[1], socket.clientId);
                break;
            case "mission" :
                returnMessage = mission(command[1]);
                break;
            case "peersession" :

                break;
            case "complete" :

                break;
            case "message" :

                break;
            case "direct" :

                break;
            case "checkout" :
                socket.write(`${checkOut(socket.clientId)}\r\n`);
                socket.end();
                break;
            default :
                returnMessage = "잘못된 명령어 입니다. 다시 한번 확인해주세요."
        }
        socket.write(`${returnMessage}\r\n`);         
    
        log(`<< ${JSON.stringify(message)}`);
        //socket.write(`>> ${JSON.stringify(message)}\r\n`); 캠퍼에게 다시 메시지보낼이유 엄슴
	});

	socket.on('close', function(){
        checkOut(socket.clientId); // 최적화 필요. 일단 나가면 checkout한번 더하는방식임
		log('client disconnted.');
	});

	socket.write(`welcome to BoostCamp\r\n`);
});


server.on('error', function(err){
	log(`err : ${err}`);
});


server.listen(portNumber, function(){ // 
	log(`linsteing on ${portNumber}..`);
});