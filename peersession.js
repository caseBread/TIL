const { attendance, group } = require("./serverData")
const net = require("net");
const { getGroupIndexById } = require("./util");


const peerSession = (maxCount, socket) => {
    const clientId = socket.clientId;

    /**
     * 명령어를 보낸 client가 checkin 을 안한 경우
     */
    if (socket.clientId === undefined) {
        return `먼저 checkin을 진행해주세요.`;
    }

    /**
     * 명령어를 이
     */

    const groupIndex = getGroupIndexById(clientId);
    group[groupIndex].forEach((x,i) => {
        attendance[x].possibleMessage = maxCount;
        attendance[x].write(`>> server : 피어세션이 시작되었습니다. (가능한 메시지 횟수=${maxCount})\r\n`);
    });
}

module.exports = { peerSession }