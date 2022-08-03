const { rxDataLink } = require("./RxDataLinkLayer");

const rxPhysical = (hex) => {
    // hex to string
    let frame = ""
    for (let i = 0; i < hex.length; i+=2) {
        frame += String.fromCharCode(parseInt(hex.substr(i,2),16));
    }
    console.log(frame);
    rxDataLink(frame);
}

module.exports = { rxPhysical }