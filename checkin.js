const { attendance, group, checkinTime } = require("./serverData");
let { nowGroupNumber } = require("./serverData");
const { prefix } = require("./util");
let newClientId = 1;

/**
 * 동일 소켓이 여러 checkin 가능한 오류 존재
 *
 * @param {String} campId
 * @param {Object} socket
 * @returns String
 */
const checkIn = (campId, socket) => {
  const campIdNum = Number(campId.substr(1));
  if (campIdNum < 1 || 384 < campIdNum) {
    return `${prefix(
      `server`
    )} 잘못된 ID를 입력하였습니다. ID범위 : (J001 ~ J384)`;
  }

  if (attendance[campId]) {
    return `${prefix(`server`)} 이미 출석하였습니다.`;
  }

  /**
   * 입력한 campId와 socket을 매칭
   */
  attendance[campId] = socket;
  socket.clientId = campId; // socket에도 campId 저장 => peersession에서 활용
  if (4 <= group[nowGroupNumber].length) {
    nowGroupNumber++;
  }

  /**
   * 그룹 저장
   */
  group[nowGroupNumber].push(campId);

  /**
   *  checkin 성공한 시각 저장 => server 출력시 활용
   */
  checkinTime[campId] = new Date();

  return `${prefix(`server`)} ${campId} checkin완료 그룹번호:${nowGroupNumber}`;
};

module.exports = { checkIn };
