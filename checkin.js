const { attendance, group, nowGroupNumber } = require("./serverData");
let newClientId = 1;

const checkIn = (campId, socket) => {
  const campIdNum = Number(campId.substr(1));
  if (campIdNum < 1 || 384 < campIdNum) {
    return "잘못된 ID를 입력하였습니다. ID범위 : (J001 ~ J384)";
  }

  if (attendance[campId]) {
    return `이미 출석하였습니다.`;
  }

  /**
   * 입력한 campId와 socket을 매칭
   */
  attendance[campId] = socket;
  socket.clientId = campId; // socket에도 campId 저장 => peersession에서 활용
  if (4 <= group[nowGroupNumber].length) {
    nowGroupNumber++;
  }
  group[nowGroupNumber].push(campId);
  return `${campId} 출석 되었습니다. 그룹번호:${nowGroupNumber}`;
};

module.exports = { checkIn };
