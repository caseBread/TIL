const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const keyboard = "apple";

const getHtml = async (keyboard) => {
  try {
    return await axios.get("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+encodeURI(keyboard));
  } catch (error) {
    console.error(error);
  }
};

getHtml(keyboard)
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.api_ani_send");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find(".link_tit").text(),
          url: $(this).find(".link_tit").attr("href"),
          preview: $(this).find(".dsc_txt").text(),
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));