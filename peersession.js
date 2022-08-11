const { attendance, group } = require("./serverData");
const net = require("net");
const { getGroupIndexById, prefix } = require("./util");

const peerSession = (json, clientId) => {
  const maxCount = json.header.maxCount;
  /**
   * 명령어를 보낸 client가 checkin 을 안한 경우
   */
  if (clientId === undefined) {
    json["header"]["status"] = 400;
    json["body"] = `${prefix(`server`)} 먼저 checkin을 진행해주세요.\r\n`;
    return;
  }

  /**
   * 명령어를 보낸 client 기준 같은그룹원들에게 메시지 출력
   * 동시에 그룹원들의 possibleMessage 설정
   * 주의할점 : 입력받은 socket이 아닌 attendance에 있는 socket에 저장
   */
  const groupIndex = getGroupIndexById(clientId);
  group[groupIndex].forEach((x, i) => {
    attendance[x].possibleMessage = maxCount;
    attendance[x].write(
      `${prefix(`server`)} 피어세션이 시작되었습니다.(maxCount=${maxCount})\r\n`
    );
  });

  /**
   * 명령어 보낸 client가 group Leader가 됨 => complete에서 활용
   */
  attendance[clientId].groupLeader = true;
};

module.exports = { peerSession };
