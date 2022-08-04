const https = require("https");

const { getHeader } = require("./header");
const log = console.log;

const url = 'https://m.naver.com/'



const main = async () => {
    let mostLargeSize = 0, mostLargeSizeFile;
    let mostLongWaitTime = 0, mostLongWaitTimeFile;
    let mostLongDownloadTime = 0, mostLongDownloadTimeFile;
    let getHeaderCount = 0; // 요청개수
    let imgCount = 0;
    let codeCount = 0;
    let sizeSum = 0;
    let redirectCount = 0;
    const domainArr = new Set();
    const startRequest = new Date();
    const [ mainData, src ] = await getHeader(url, true);
    domainArr.add(mainData["domain"])
    getHeaderCount++;
    if (mainData["redirect"]) redirectCount++;
    log(mainData);
    for (const x of src) {
        const srcData = await getHeader(x,false);
        domainArr.add(srcData["domain"])
        getHeaderCount++;
        if (srcData["type"].split("/")[0] === "image") imgCount++;
        else if (srcData["type"].split("/")[0] === "application") codeCount++;
        if (srcData["redirect"]) redirectCount++;
        nowSize = Number(srcData["size"].split(" ")[0]);
        sizeSum += nowSize;
        nowWaitTime = Number(srcData["waitTime"].split(" ")[0])
        nowDownloadTime = Number(srcData["downloadTime"].split(" ")[0])
        log(srcData);

        if (nowSize > mostLargeSize) {
            mostLargeSize = nowSize;
            mostLargeSizeFile = srcData["fileName"];
        }
        if (nowWaitTime > mostLongWaitTime) {
            mostLongWaitTime = nowWaitTime;
            mostLongWaitTimeFile = srcData["fileName"];
        }
        if (nowDownloadTime > mostLongDownloadTime) {
            mostLongDownloadTime = nowDownloadTime;
            mostLongDownloadTimeFile = srcData["fileName"];
        }
    }
    const endRequest = new Date();

    log(`domain count is ${domainArr.size}`);
    log(`request count is ${getHeaderCount}`);
    log(`image(png,gif,jpg) count is ${imgCount}`);
    log(`code(css,js) count is ${codeCount}`);
    log(`sum of file size is ${sizeSum}kb`);
    log(`redirect count is ${redirectCount}`);
    log(`all loading time is ${endRequest-startRequest}ms`);
    log(`most large file size is [${mostLargeSizeFile}] ${mostLargeSize}kb`);
    log(`most long wait time is [${mostLongWaitTimeFile}] ${mostLongWaitTime}ms`);
    log(`most long download time is [${mostLongDownloadTimeFile}] ${mostLongDownloadTime}ms`);

}

main();