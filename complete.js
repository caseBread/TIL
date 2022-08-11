// 팀원들의 possibleMessage 수를 0으로 만들어버린다
// + 피어세션 종료되었다는 메시지 출력

const { group, attendance } = require("./serverData");
const { prefix, getGroupIndexById } = require("./util");

const complete = (clientId) => {
  if (clientId === undefined) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(`server`)} 먼저 checkin을 진행해주세요.\r\n`;
    return;
  }

  if (!attendance[clientId].groupLeader) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(`server`)} 당신은 그룹장이 아닙니다.\r\n`;
    return;
  }

  const groupIndex = getGroupIndexById(clientId);
  group[groupIndex]
    .filter((x) => x !== clientId)
    .forEach((x, i) => {
      const newjson = {};
      attendance[x].possibleMessage = 0;
      attendance[x].groupLeader = false;
      newjson["header"]["from"] = "server";
      newjson["header"]["status"] = 200;
      newjson["body"] = `${prefix(`server`)} 피어세션이 종료되었습니다.\r\n`;
      attendance[x].write(JSON.stringify(json));
    });

  json["header"]["status"] = 200;
  json["body"] = `${prefix(`server`)} 당신이 피어세션을 종료하였습니다.\r\n`;
  return;
};

module.exports = { complete };
