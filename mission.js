const { missionKeyword } = require("./serverData")

const mission = (day) => {
    if (!(day in missionKeyword)) {
        return `${day}의 keywords가 존재하지 않습니다.`
    }
    return `${day} keywords are "${missionKeyword[day]}"`;
}

module.exports = { mission }