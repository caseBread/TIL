const uuid = require("uuid");
const { transport } = require("./transportLayer");

const session = (message) => {
    const newMessage = [ ...message ];
    const sessionId = uuid.v4();
    const appendElement = "Session-Id: "+sessionId+"\r\n"
    newMessage.splice(3,0,appendElement);
    transport(newMessage.join());
}

module.exports = { session }