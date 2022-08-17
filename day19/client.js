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
      result.header = {
        command: "checkin",
        campId: command[1],
        date: new Date(),
      };
      break;
    case "mission":
      result.header = {
        command: "mission",
        day: command[1],
      };
      break;
    case "peersession":
      result.header = {
        command: "peersession",
        maxCount: command[1],
      };
      break;
    case "complete":
      result.header = {
        command: "complete",
      };
      break;
    case "message":
      result.header = {
        command: "message",
        msg: {
          text: command.slice(1).join(" "),
        },
      };
      break;
    case "direct":
      result.header = {
        command: "direct",
        msg: {
          to: command[1],
          text: command.slice(1).join(" "),
        },
      };
      break;
    case "checkout":
      result.header = {
        command: "checkout",
      };
      break;
    default:
  }

  return result;
};

socket.on("connect", function () {
  log("connected to server!");

  rl.on("line", (line) => {
    const json = incoding(line.toString("utf8"));
    socket.write(JSON.stringify(json));
  });
  rl.on("close", () => {
    process.exit();
  });
});

socket.on("data", function (data) {
  const chunk = data.toString("utf8");
  const json = JSON.parse(chunk);
  if (body in json) process.stdout.write(json.body);
  if (json.header.closed) socket.end();
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
