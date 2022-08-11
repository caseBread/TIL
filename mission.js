const { missionKeyword } = require("./serverData");

const mission = (day) => {
  if (day === undefined) {
    return `mission의 keyword를 확인할 날을 입력하지 않았습니다.`;
  }
  if (!(day in missionKeyword)) {
    return `${day}의 keywords가 존재하지 않습니다.`;
  }
  return `${day} keywords are "${missionKeyword[day]}"`;
};

module.exports = { mission };
