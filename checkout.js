const log = console.log;
const { attendance, group, checkinTime } = require("./serverData");
const { getKeyByValue, prefix, serverPrefix } = require("./util");

const checkOut = (json, clientId) => {
  const campId = getKeyByValue(attendance, clientId);
  if (campId === undefined) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(`server`)} checkin을 먼저 진행해주세요.\r\n`;
    return;
  }

  delete attendance[campId];
  // group의 campId도 빼야함

  const runTime = new Date() - checkinTime[clientId];

  const groupIndex = getGroupIndexById(clientId);
  group[groupIndex]
    .filter((x) => x !== clientId)
    .forEach((x, i) => {
      const newjson = {};
      newjson["header"]["from"] = "server";
      newjson["header"]["status"] = 200;
      newjson["body"] = `${prefix(
        `server`
      )} ${clientId}님이 checkout하였습니다.\r\n`;
      attendance[x].write(JSON.stringify(newjson));
    });

  log(`${prefix(`clientId`)} checkout 완료. (run time = ${runTime}ms)`);

  json["header"]["status"] = 200;
  json["body"] = `${prefix(`server`)} checkout 완료.\r\n`;
  return;
};

module.exports = { checkOut };
