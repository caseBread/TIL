const { session } = require("./sessionLayer");

const presentation = (message) => {
    const newMessage = [ ...message ];
    newMessage[4] = Buffer.from(newMessage[4], "utf8").toString('base64');
    session(newMessage);
}

module.exports = { presentation }