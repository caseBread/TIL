const log = console.log;
const { attendance, group, checkinTime } = require("./serverData");
const { getKeyByValue, prefix, serverPrefix } = require("./util");

const checkOut = (clientId) => {
  const campId = getKeyByValue(attendance, clientId);
  if (campId === undefined) {
    return `${prefix(`server`)} checkin을 먼저 진행해주세요.`;
  }

  delete attendance[campId];
  // group의 campId도 빼야함

  const runTime = new Date() - checkinTime[clientId];

  const groupIndex = getGroupIndexById(clientId);
  group[groupIndex]
    .filter((x) => x !== clientId)
    .forEach((x, i) => {
      attendance[x].write(
        `${prefix(`server`)} ${clientId}님이 checkout하였습니다.\r\n`
      );
    });

  log(`${prefix(`clientId`)} checkout 완료. (run time = ${runTime}ms)`);
  return `${prefix(`server`)} checkout 완료.`;
};

module.exports = { checkOut };
