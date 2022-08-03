const { APR } = require("./APR");
const { physical } = require("./physicalLayer");


const dataLink = (datagram) => {
    const [ sendIP, receiveIP ] = [ datagram.substr(1,11), datagram.substr(13,11) ];
    const frame = "("+APR[receiveIP]+","+APR[sendIP]+","+datagram+")";
    physical(frame);
}

module.exports = { dataLink }