const log = console.log;
const net = require("net");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const portNumber = 2022;
const socket = net.connect({ port: portNumber });

const incoding = (line) => {
  const result = { header: {} };
  const command = line.split(" ");
  switch (command[0]) {
    case "checkin":
      result["header"]["command"] = "checkin";
      result["header"]["campId"] = command[1];
      result["header"]["date"] = new Date();
      break;
    case "mission":
      result["header"]["command"] = "mission";
      result["header"]["day"] = command[1];

      break;
    case "peersession":
      result["header"]["command"] = "peersession";
      result["header"]["maxCount"] = command[1];
      break;
    case "complete":
      result["header"]["command"] = "complete";
      break;
    case "message":
      result["header"]["command"] = "message";
      result["header"]["msg"]["text"] = command.slice(1).join(" ");
      break;
    case "direct":
      result["header"]["command"] = "direct";
      result["header"]["msg"]["to"] = command[1];
      result["header"]["msg"]["text"] = command.slice(2).join(" ");
      break;
    case "checkout":
      result["header"]["command"] = "checkout";
      break;
    default:
  }

  return result;
};

socket.on("connect", function () {
  log("connected to server!");

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

  rl.on("line", (line) => {
    const json = incoding(line.toString("utf8"));
    socket.write(JSON.stringify(json));
  });
  rl.on("close", () => {
    process.exit();
  });
});

socket.on("data", function (chunk) {
  log(`recv : ${chunk}`);
});

socket.on("end", function () {
  log("disconnected.");
});

socket.on("error", function (err) {
  log(err);
});

socket.on("timeout", function () {
  log("connection timeout.");
});
