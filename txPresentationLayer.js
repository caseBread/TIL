const { incodeBase64 } = require("./base64");
const { session } = require("./txSessionLayer");

const presentation = (message) => {
    const newMessage = [ ...message ];
    newMessage[4] = incodeBase64(newMessage[4]);
    session(newMessage);
}

module.exports = { presentation }