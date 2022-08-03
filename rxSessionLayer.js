const { rxPresentation } = require("./rxPresentationLayer");


const log = console.log;
const rxSession = (data) => {
    const dataArr = data.split("\n");
    log("================= 수신 세션계층 ======================")
    log(dataArr[3]); 
    rxPresentation(dataArr);
}

module.exports = { rxSession }