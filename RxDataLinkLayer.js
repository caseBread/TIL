const { rxNetwork } = require("./RxNetworkLayer");

const rxDataLink = (frame) => {
    const MAC = "3C:5A:B4:6F:EA:DC"
    const destinationMAC = frame.substr(1,17);
    const sendingMAC = frame.substr(18,17);
    if (MAC !== destinationMAC) return;
    const datagram = frame.substring(37,frame.length-1);
    console.log(datagram);
    rxNetwork(datagram);
}

module.exports = { rxDataLink }