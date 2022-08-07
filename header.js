const https = require("https");
const cheerio = require("cheerio");
const log = console.log;

const getSrcList = (data) => {
    const $ = cheerio.load(data);
    const $src = []
    $('img').each((i,d) => {
        if (d.attribs.src) $src.push(d.attribs.src)

    });
    $('script').each((i,d) => {
        if (d.attribs.src) $src.push(d.attribs.src)
    })
    return $src;
}
const getHeader = async (url,isMain) => {
    return await getheader(url, isMain);
}

const getheader = (url, isMain) => {
    return new Promise((resolve,reject) => {
        let waitStart = new Date();
        let waitEnd;
        let downloadStart;
        let downloadEnd;
        let flag = false;
        const resData = {}
        let srcList = null;
        const request = https.request(url, (response) => {
            log(response.headers)
            const pathArr = response["req"]["path"].split("/");
            resData["fileName"] = pathArr[pathArr.length-1]
            resData["domain"] = response["req"]["host"];
            resData["scheme"] = "https"
            resData["path"] = pathArr.slice(0,-1).join("/");
            resData["type"] = response.headers["content-type"];
            resData["size"] = Number(response.headers["content-length"])/1000+" kb"
            resData["redirect"] = (300 <= response.statusCode  && response.statusCode < 400)
            let data = ''
            response.on('data', (chunk) => {
                if (!flag) {
                    flag = true;
                    waitEnd = new Date();
                    downloadStart = new Date();
                    resData["waitTime"] = (waitEnd-waitStart)+" ms";
                }
                data += chunk.toString("utf8")
            });
        
            response.on('end', () => {
                downloadEnd = new Date();
                resData["downloadTime"] = (downloadEnd-downloadStart)+" ms";
                if (isMain) {
                    resData["fileName"] = resData["domain"];
                    resData["path"] = "/";
                    resData["size"] = (new TextEncoder().encode(data)).length/1000+"KB"
                    srcList = getSrcList(data);
                    resolve([resData, srcList]);
                }
                resolve(resData);
            });
            
        })
        
        request.on('error', (error) => {
            reject('An error', error);
        });
        request.end() 
    })
}

module.exports = { getHeader }