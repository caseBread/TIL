const net = require("net");
const { group, attendance } = require("./serverData");
const { getGroupIndexById } = require("./util");

// 아예 socket.clientId만 받도록 수정
const message = (sendMessage, socket) => {
  const clientId = socket.clientId;

  /**
   * 가능한 메시지 횟수를 다 소모하였거나 피어세션을 시작하지 않은 경우
   *
   * return 무시
   */
  if (
    attendance[clientId].possibleMessage === 0 ||
    attendance[clientId].possibleMessage === undefined
  ) {
    return;
  }

  /**
   * 그룹원들에게 메시지 보내기
   */
  const groupIndex = getGroupIndexById(clientId);
  group[groupIndex]
    .filter((x) => x !== clientId)
    .forEach((x, i) => {
      attendance[x].write(`${prefix(`${clientId}(group)`)} ${sendMessage}\r\n`);
    });

  /**
   * 가능한 메시지 횟수 하나 소모
   */
  attendance[clientId].possibleMessage -= 1;
};

module.exports = { message };
