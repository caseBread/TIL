const log = console.log;
const { attendance, group, checkinTime } = require("./serverData");
const {
  getKeyByValue,
  prefix,
  serverPrefix,
  getGroupIndexById,
} = require("./util");

const checkOut = (json, clientId) => {
  if (clientId === undefined) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(`server`)} checkin을 먼저 진행해주세요.\r\n`;
    return;
  }

  delete attendance[clientId];
  // group의 clientId도 빼야함

  const runTime = new Date() - new Date(checkinTime[clientId]);

  const groupIndex = getGroupIndexById(clientId);
  const newjson = { header: {} };
  newjson["header"]["from"] = clientId;
  newjson["header"]["status"] = 200;
  newjson["body"] = `${prefix(
    `server`
  )} ${clientId}님이 checkout하였습니다.\r\n`;
  group[groupIndex]
    .filter((x) => x !== clientId)
    .forEach((x, i) => {
      attendance[x].write(JSON.stringify(newjson));
    });

  log(`${prefix(`clientId`)} is checkout (success). (run time = ${runTime}ms)`);

  json["header"]["status"] = 200;
  json["header"]["closed"] = true;
  json["body"] = `${prefix(`server`)} checkout 완료.\r\n`;

  return;
};

module.exports = { checkOut };
