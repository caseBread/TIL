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
     * decoding
     * return json
     */
    const chunk = data.toString("utf8");
    const json = JSON.parse(chunk);

    /**
     * from 설정
     */
    json["header"]["from"] = "server";

    //log(json);
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

    // /**
    //  * 명령어 인식 공간
    //  */

    switch (json.header.command) {
      case "checkin":
        checkIn(json, socket);
        break;
      case "mission":
        mission(json);
        break;
      case "peersession":
        peerSession(json, socket.clientId); // checkin 거치면 socket에 clientId생성됨.
        break;
      case "complete":
        complete(json, socket.clientId);
        break;
      case "message":
        message(json, socket);
        break;
      case "direct":
        json["body"] = direct(
          socket.clientId,
          json.message.to,
          json.message.text
        );
        socket.write(`${returnMessage}\r\n`);
        break;
      case "checkout":
        json["body"] = checkOut(socket.clientId);
        socket.write(`${returnMessage}\r\n`);
        socket.end();
        break;
      case "help":
        break;
      default:
    }

    socket.write(JSON.stringify(json));
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
