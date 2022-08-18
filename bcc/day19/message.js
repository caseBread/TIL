const net = require("net");
const { group, attendance } = require("./serverData");
const { getGroupIndexById, prefix } = require("./util");
const log = console.log;

// 아예 socket.clientId만 받도록 수정
const message = (json, clientId) => {
  const groupIndex = getGroupIndexById(clientId);
  const sendMessage = json.header.msg.text;
  /**
   * 가능한 메시지 횟수를 다 소모하였거나 피어세션을 시작하지 않은 경우
   *
   * return 무시
   */
  if (
    attendance[clientId].possibleMessage === 0 ||
    attendance[clientId].possibleMessage === undefined
  ) {
    json["header"]["status"] = 400;
    log(`message from group#${groupIndex}(${clientId}) => (failure)`);
    return;
  }

  /**
   * 그룹원들에게 메시지 보내기
   */

  const newjson = { header: {} };
  newjson["header"]["from"] = clientId;
  newjson["header"]["status"] = 200;
  newjson["body"] = `${prefix(`${clientId}(group)`)} ${sendMessage}\r\n`;
  group[groupIndex]
    .filter((x) => x !== clientId)
    .forEach((x, i) => {
      attendance[x].write(JSON.stringify(newjson));
      log(
        `message to group#${groupIndex} => text="${sendMessage}", from="${clientId}"`
      );
    });

  /**
   * 가능한 메시지 횟수 하나 소모
   */
  attendance[clientId].possibleMessage -= 1;
  json["header"]["status"] = 201;

  log(`message from group#${groupIndex}(${clientId}) => "${sendMessage}"`);
  return;
};

module.exports = { message };
