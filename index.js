const https = require("https");
const readlineSync = require("readline-sync")
const { getHeader } = require("./header");
const log = console.log;



const cache = []
let cacheCount = 0;

const isHttp = (url) => {
    if (url.startsWith("http://")) {
        return true;
    }
    return false;
}

const isRedirect = (url) => {
    if (!url.startsWith("https://")) {
        return true;
    }
    return false;
}

const cacheReplace = (x, srcData) => {
    cache.push([x, srcData]);
    if (50 < cache.length) cache.shift();
}

const caching = (x) => {
    for (let i of cache) {
        if (i[0] === x) {
            delete i[1]["waitTime"];
            delete i[1]["downloadTime"];
            cacheCount++;
            return i[1];
        }
    }
    return false;
}

const main = async () => {
    let mostLargeSize = 0, mostLargeSizeFile, mostLargeSizeIsCache = false;
    let mostLongWaitTime = 0, mostLongWaitTimeFile;
    let mostLongDownloadTime = 0, mostLongDownloadTimeFile;
    let getHeaderCount = 0; // 요청개수
    let imgCount = 0;
    let codeCount = 0;
    let sizeSum = 0;
    let redirectCount = 0;

    let url = readlineSync.question("please enter url : ")
    if (isHttp(url)) throw "Do not support http";
    if (isRedirect(url)) {
        url = "https://" + url;
        redirectCount++;
    }
    
    const domainArr = new Set();
    const startRequest = new Date();
    const [ mainData, src ] = await getHeader(url, true);
    domainArr.add(mainData["domain"])
    getHeaderCount++;
    if (mainData["redirect"]) redirectCount++;
    log(mainData);
    log(src)
    for (const x of src) {
        const cacheIs = caching(x)
        const srcData = cacheIs ? cacheIs : await getHeader(x,false);
        log(srcData);
        if(cacheIs) log(">> cached!!")
        cacheReplace(x, srcData);
        domainArr.add(srcData["domain"])
        getHeaderCount++;
        if (srcData["type"].split("/")[0] === "image") imgCount++;
        else if (srcData["type"].split("/")[0] === "application") codeCount++;
        if (srcData["redirect"]) redirectCount++;
        nowSize = Number(srcData["size"].split(" ")[0]);
        sizeSum += nowSize;

        if (nowSize > mostLargeSize) {
            mostLargeSize = nowSize;
            mostLargeSizeFile = srcData["fileName"];
            if (cacheIs) mostLargeSizeIsCache = "(cached!!!)"
            else mostLargeSizeIsCache = ""
        }

        if (!cacheIs) {
            nowWaitTime = Number(srcData["waitTime"].split(" ")[0])
            nowDownloadTime = Number(srcData["downloadTime"].split(" ")[0])
            if (nowWaitTime > mostLongWaitTime) {
                mostLongWaitTime = nowWaitTime;
                mostLongWaitTimeFile = srcData["fileName"];
            }
            if (nowDownloadTime > mostLongDownloadTime) {
                mostLongDownloadTime = nowDownloadTime;
                mostLongDownloadTimeFile = srcData["fileName"];
            }
        }
        

        
        
    }
    const endRequest = new Date();

    if (mostLargeSizeIsCache)

    log(`domain count is ${domainArr.size}`);
    log(`request count is ${getHeaderCount}`);
    log(`image(png,gif,jpg) count is ${imgCount}`);
    log(`code(css,js) count is ${codeCount}`);
    log(`sum of file size is ${sizeSum}kb`);
    log(`redirect count is ${redirectCount}`);
    log(`all loading time is ${endRequest-startRequest}ms`);
    log(`most large file size is [${mostLargeSizeFile}] ${mostLargeSize}kb ${mostLargeSizeIsCache}`);
    log(`most long wait time is [${mostLongWaitTimeFile}] ${mostLongWaitTime}ms`);
    log(`most long download time is [${mostLongDownloadTimeFile}] ${mostLongDownloadTime}ms`);
    log(`cache count is ${cacheCount}`);
    
    
}

main();