const { attendance } = require("./serverData");
const { prefix } = require("./util");

const direct = (clientId, receiverId, sendMessage) => {
  /**
   * 옳바른 client?
   */
  if (clientId === undefined) {
    return `${prefix(`server`)} checkin을 먼저 진행해주세요.`;
  }
  /**
   * 옳바른 receiver?
   */
  const receiverIdNum = Number(receiverId.substr(1));
  if (receiverIdNum < 1 || 384 < receiverIdNum) {
    return `${prefix(`server`)} 잘못된 ID를 입력하였습니다. ID범위:(J001~J384)`;
  }

  if (receiverId === undefined) {
    return `${prefix(`server`)} ${receiverId}님이 체크아웃 상태입니다.`;
  }

  /**
   * send direct message
   */
  attendance[receiverId].write(
    `${prefix(`${clientId}(direct)`)} ${sendMessage}\r\n`
  );
  return `${prefix(`server`)} ${receiverId}님께 메시지 전송 완료.`;
};

module.exports = { direct };
