const { rxApplication } = require("./rxApplicationLayer");

const log = console.log;

const rxPresentation = (message) => {
    const newMessage = [ ...message ]
    newMessage[5] = Buffer.from(newMessage[5], "base64").toString('utf8')
    log("================= 수신 표현계층 ======================")
    log(newMessage[5]);
    rxApplication(newMessage)
}

module.exports = { rxPresentation }