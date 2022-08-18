const { missionKeyword } = require("./serverData");
const { prefix, getGroupIndexById } = require("./util");
const log = console.log;

const mission = (json, clientId) => {
  const groupIndex = getGroupIndexById(clientId);
  const day = json.header.day;
  if (day === undefined) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(`server`)} 날짜를 입력하지 않았습니다.\r\n`;
    log(`mission from group#${groupIndex}${clientId} (failure) : wrong input`);
    return;
  }
  if (!(day in missionKeyword)) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(
      `server`
    )} ${day}의 keywords가 존재하지 않습니다.\r\n`;
    log(`mission from group#${groupIndex}${clientId} (failure) : wrong input`);
    return;
  }
  json["header"]["status"] = 200;
  json["body"] = `${prefix(`server`)} ${day} keywords are "${
    missionKeyword[day]
  }"\r\n`;

  /**
   * log 출력
   */

  log(
    `mission from group#${groupIndex}(${clientId}) (success) : ${day} => '${missionKeyword[day]}'`
  );
  return;
};

module.exports = { mission };
