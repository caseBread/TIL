const https = require("https");
const cheerio = require("cheerio")
const log = console.log;
const time = console.time;
const timeEnd = console.timeEnd;

const url = "https://s.pstatic.net/static/www/mobile/edit/20220802_1095/upload_1659430355619unGWb.jpg"

const request = https.request(url, (response) => {
    log(response.headers["content-length"])
    const $src = []
    let data = ''
    response.on('data', (chunk) => {
        data += chunk,toString("utf8")
    });
  
    response.on('end', () => {
        const $ = cheerio.load(data);
        $('img').each((i,d) => {
            if (d.attribs.src) $src.push(d.attribs.src)

        });
        $('script').each((i,d) => {
            if (d.attribs.src) $src.push(d.attribs.src)
        })
        reGet($src);
    });
})
request.on('error', (error) => {
    console.log('An error', error);
});
request.end() 

const re = (src) => {
    log(src);
    https.get(src,(res) => {
    })
}

const reGet = ($src) => {
    $src.forEach((x,i) => {
        re(x);
    })
}

