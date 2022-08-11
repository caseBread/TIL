const log = console.log;
const net = require("net"); // 여기에 on에 대한 emit이 다 있고
const { checkIn } = require("./checkin");
const { checkOut } = require("./checkout");
const { complete } = require("./complete");
const { direct } = require("./direct");
const { message } = require("./message");
const { mission } = require("./mission");
const { peerSession } = require("./peersession");
const { attendance } = require("./serverData");
const { stringToArray } = require("./util");

const portNumber = 2022;

const server = net.createServer(function (socket) {
  log(`${socket.address().address}:${socket.address().port} connected.`);

  socket.on("data", function (data) {
    /**
     * 명령을
     * json형태로 한다.
     * 클라이언트에서 입력하면
     * 그것을 json으로 incoding
     * server에서는 json을 decoding
     *
     * json 형태는
     * "command":"checkin"
     * "campId":"J021"
     * ""
     */

    const chunk = data.toString("utf8").replace("\r\n", "");
    /**
     * 명령어 인식 공간
     */

    const command = stringToArray(chunk);
    let returnMessage;

    switch (command[0]) {
      case "checkin":
        returnMessage = checkIn(command[1], socket);
        socket.write(`${returnMessage}\r\n`);
        break;
      case "mission":
        returnMessage = mission(command[1]);
        socket.write(`${returnMessage}\r\n`);
        break;
      case "peersession":
        peerSession(command[1], socket.clientId);
        break;
      case "complete":
        returnMessage = complete(socket.clientId);
        socket.write(`${returnMessage}\r\n`);
        break;
      case "message":
        message(command.slice(1).join(" "), socket);
        break;
      case "direct":
        returnMessage = direct(
          socket.clientId,
          command[1],
          command.slice(2).join(" ")
        );
        socket.write(`${returnMessage}\r\n`);
        break;
      case "checkout":
        socket.write(`${checkOut(socket.clientId)}\r\n`);
        socket.end();
        break;
      case "help":
        break;
      default:
        returnMessage = "잘못된 명령어 입니다. 다시 한번 확인해주세요.";
        socket.write(`${checkOut(socket.clientId)}\r\n`);
    }

    log(`<< ${JSON.stringify(chunk)}`);
  });

  socket.on("close", function () {
    checkOut(socket.clientId); // 최적화 필요. 일단 나가면 checkout한번 더하는방식임
    log("client disconnted.");
  });

  socket.write(`welcome to BoostCamp\r\n`);
});

server.on("error", function (err) {
  log(`err : ${err}`);
});

server.listen(portNumber, function () {
  //
  log(`linsteing on ${portNumber}..`);
});
