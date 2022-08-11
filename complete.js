// 팀원들의 possibleMessage 수를 0으로 만들어버린다
// + 피어세션 종료되었다는 메시지 출력

const { group, attendance } = require("./serverData");
const { prefix, getGroupIndexById } = require("./util");

const complete = (clientId) => {
  if (clientId === undefined) {
    return `${prefix(`server`)} 먼저 checkin을 진행해주세요.`;
  }

  if (!attendance[clientId].groupLeader) {
    return `${prefix(`server`)} 당신은 그룹장이 아닙니다.`;
  }

  const groupIndex = getGroupIndexById(clientId);
  group[groupIndex]
    .filter((x) => x !== clientId)
    .forEach((x, i) => {
      attendance[x].possibleMessage = 0;
      attendance[x].groupLeader = false;
      attendance[x].write(`${prefix(`server`)} 피어세션이 종료되었습니다.\r\n`);
    });

  return `${prefix(`server`)} 당신이 피어세션을 종료하였습니다.`;
};

module.exports = { complete };
