const { attendance } = require("./serverData");
const { prefix } = require("./util");

const direct = (json, clientId) => {
  const receiverId = json.header.msg.to;
  const sendMessage = json.header.msg.text;
  /**
   * 옳바른 client?
   */
  if (clientId === undefined) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(`server`)} checkin을 먼저 진행해주세요.\r\n`;
    return;
  }
  /**
   * 옳바른 receiver?
   */
  const receiverIdNum = Number(receiverId.substr(1));
  if (receiverIdNum < 1 || 384 < receiverIdNum) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(
      `server`
    )} 잘못된 ID를 입력하였습니다. ID범위:(J001~J384)\r\n`;
    return;
  }

  if (receiverId === undefined) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(
      `server`
    )} ${receiverId}님이 체크아웃 상태입니다.\r\n`;
    return;
  }

  /**
   * send direct message
   */
  const newjson = { header: {} };
  newjson["header"]["status"] = 200;
  newjson["header"]["from"] = clientId;
  newjson["body"] = `${prefix(`${clientId}(direct)`)} ${sendMessage}\r\n`;
  attendance[receiverId].write(JSON.stringify(newjson));

  json["header"]["status"] = 200;
  json["body"] = `${prefix(`server`)} ${receiverId}님께 메시지 전송 완료.\r\n`;
  return;
};

module.exports = { direct };
