const { missionKeyword } = require("./serverData");
const { prefix } = require("./util");

const mission = (day) => {
  if (day === undefined) {
    return `${prefix(`server`)} 날짜를 입력하지 않았습니다.`;
  }
  if (!(day in missionKeyword)) {
    return `${prefix(`server`)} ${day}의 keywords가 존재하지 않습니다.`;
  }
  return `${prefix(`server`)} ${day} keywords are "${missionKeyword[day]}"`;
};

module.exports = { mission };
