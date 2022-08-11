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
        mission(json, socket.clientId);
        break;
      case "peersession":
        peerSession(json, socket.clientId); // checkin 거치면 socket에 clientId생성됨.
        break;
      case "complete":
        complete(json, socket.clientId);
        break;
      case "message":
        message(json, socket.clientId);
        break;
      case "direct":
        direct(json, socket.clientId);
        break;
      case "checkout":
        checkOut(json, socket.clientId);
        break;
      case "help":
        break;
      default:
    }

    socket.write(JSON.stringify(json));
  });

  socket.on("close", function () {
    log("client disconnted.");
  });

  //socket.write(`welcome to BoostCamp\r\n`); // 이거 보내면 에러뜸 json형태로 보내야함
});

server.on("error", function (err) {
  log(`err : ${err}`);
});

server.listen(portNumber, function () {
  //
  log(`linsteing on ${portNumber}..`);
});
