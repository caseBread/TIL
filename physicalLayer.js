const physical = (frame) => {
    let hex = ""
    for (let i = 0; i < frame.length; i++) {
        hex += frame.charCodeAt(i).toString(16); // 문자 => 16진수
    }
    console.log(hex); // 두개씩 끊어서
}

module.exports = { physical }