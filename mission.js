const { missionKeyword } = require("./serverData");
const { prefix } = require("./util");

const mission = (json) => {
  const day = json.header.day;
  if (day === undefined) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(`server`)} 날짜를 입력하지 않았습니다.\r\n`;
    return;
  }
  if (!(day in missionKeyword)) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(
      `server`
    )} ${day}의 keywords가 존재하지 않습니다.\r\n`;
    return;
  }
  json["header"]["status"] = 200;
  json["body"] = `${prefix(`server`)} ${day} keywords are "${
    missionKeyword[day]
  }"\r\n`;
  return;
};

module.exports = { mission };
