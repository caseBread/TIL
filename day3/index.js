
const readline = require("readline");
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;
let keyboard = ''

class LRUCache {
    constructor(max = 5) {
        this.max = max;
        this.cache = new Map();
    }
    get(key) {
        let item = this.cache.get(key);
        if (item) {
            // refresh key
            this.cache.delete(key);
            this.cache.set(key, [item[0],item[1]+1]);
            return item[0];
        }
        else {
            return -1;
        }
    }
    put(key, val) {
        // refresh key
        if (this.cache.has(key)) this.cache.delete(key);
        // evict oldest
        else if (this.cache.size == this.max) this.cache.delete(this.first());
        this.cache.set(key, val);
    }
    first() {
        return this.cache.keys().next().value;
    }
}
let lruCache = new LRUCache();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", async (line) => {
    keyboard = line;
    let is_key = lruCache.get(keyboard);
    if (keyboard === "$cache") {
        process.stdout.write("키워드 : ");
        lruCache.cache.forEach((value,key) => {
            process.stdout.write(key+"("+value[1]+"), ");
        })
        log();
    }
    //cache에 없을 경우, 크롤링해서 put
    else if (is_key === -1) {
        let crawl = await parsing(keyboard);
        lruCache.put(keyboard, [crawl,1]);
        log(crawl);
    }
    else {
        log(is_key);
    }
});


const getHtml = async (keyboard) => {
  try {
    return await axios.get("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+encodeURI(keyboard));
  } catch (error) {
    console.error(error);
  }
};

const parsing = async (keyboard) => {
    const html = await getHtml(keyboard);
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.api_ani_send");
    let ulList = [];
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find(".link_tit").text(),
          url: $(this).find(".link_tit").attr("href"),
          preview: $(this).find(".dsc_txt").text(),
      };
    });
    return ulList.filter(n => n.title)
}
