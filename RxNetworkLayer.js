const rxNetwork = (datagram) => {
    const IP = "192.168.1.5"
    const destinationIP = datagram.substr(1,11);
    const sendIP = datagram.substr(12,11);
    if (IP !== destinationIP) return;
    const segment = datagram.substring(25,datagram.length-1);
    console.log(segment);
}

module.exports = { rxNetwork }