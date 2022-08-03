const { dataLink } = require("./dataLinkLayer")

const network = (segment) => {
    const sendIP = "192.168.1.5";
    const receiveIP = "192.168.1.9";
    const datagram = "{"+sendIP+","+receiveIP+","+segment+"}";
    log("datagram : "+datagram);
    dataLink(datagram);
}

module.exports = { network }