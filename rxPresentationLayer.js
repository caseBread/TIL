const { rxApplication } = require("./rxApplicationLayer");
const fs = require("fs");
const log = console.log;

const rxPresentation = (message) => {
    const newMessage = [ ...message ]
    newMessage[5] = Buffer.from(newMessage[5], "base64").toString('utf8')
    fs.writeFileSync("./attachment.file", newMessage[5]);
    log("================= 수신 표현계층 ======================")
    log("디코딩 데이터 파일 : attachment.file")
    rxApplication(newMessage)
}

module.exports = { rxPresentation }