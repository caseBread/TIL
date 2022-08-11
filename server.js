
const log = console.log;
const net = require('net'); // 여기에 on에 대한 emit이 다 있고
// 

const portNumber = 2022;

let message = null;
const server = net.createServer(function(socket){
	log(`${socket.address().address}:${socket.address().port} connected.`);
	
    
	socket.on('data', function(data){
        const char = data.toString('utf8');
        if (message === null) message = '';
        if (char === '\r\n') {
            log(`<< ${message}`);
            socket.write(`>> ${message}\r\n`);
            message = '';
            socket.end();
        } else {
		    message += char;
        }
        
	});

	socket.on('close', function(){
		log('client disconnted.');
	});

	socket.write(`welcome to J021's server\r\n`);
});


server.on('error', function(err){
	log(`err : ${err}`);
});


server.listen(portNumber, function(){ // 
	log(`linsteing on ${portNumber}..`);
});