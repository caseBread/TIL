const { rxPhysical } = require("./rxphysicalLayer");

const physical = (frame) => {
    let hex = ""
    for (let i = 0; i < frame.length; i++) {
        hex += frame.charCodeAt(i).toString(16); // 문자 => 16진수
    }
    rxPhysical(hex);
}

module.exports = { physical }