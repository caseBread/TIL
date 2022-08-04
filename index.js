const https = require("https");

const { getHeader } = require("./header");
const log = console.log;
const time = console.time;
const timeEnd = console.timeEnd;

const url = 'https://m.naver.com/'


const main = async () => {
    const [ mainData, src ] = await getHeader(url, true);
    log(mainData);
    src.forEach( async (x,i) => {
        const srcData = await getHeader(x,false);
        log(srcData);
    })
}

main();