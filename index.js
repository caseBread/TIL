
const readline = require("readline");
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;


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
            this.cache.set(key, item);
            return item;
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


let keyboard = ''

let lruCache = new LRUCache();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", async (line) => {
    keyboard = line;

    //cache에 없을 경우, 크롤링해서 put
    if (lruCache.get(keyboard) === -1) {
        temp = await parsing(keyboard);
        lruCache.put(keyboard, temp);
        log(temp);
    }
    else {
        log(2);
        log(lruCache.get(keyboard));
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
