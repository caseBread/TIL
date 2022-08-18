const { presentation } = require("./txPresentationLayer")


const application = (from, to, title, file) => {
    const message = [
        `From: ${from}\r\n`,
        `To: ${to}\r\n`,
        `Title: ${title}\r\n`,
        `\r\n`,
        `${file}`
    ]
    presentation(message);
}

module.exports = { application }