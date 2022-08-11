const { attendance, group } = require("./serverData");
const { getKeyByValue } = require("./util");

const checkOut = (clientId) => {
  const campId = getKeyByValue(attendance, clientId);
  if (campId === undefined) {
    return "checkin을 먼저 진행해주세요.";
  }

  delete attendance[campId];
  // group의 campId도 빼야함

  return "checkout 완료.";
};

module.exports = { checkOut };
