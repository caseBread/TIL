# 체크리스트
- [x] [적절한 node.js 기반 크롤링 모듈 찾기](#적절한-nodejs-기반-크롤링-모듈-찾기)
- [x] 크롤링 모듈 활용
- [ ] 검색 결과 HTML에서 제목, 링크 주소, 미리보기 추출
# 학습 메모

## 적절한 node.js 기반 크롤링 모듈 찾기

axios 모듈을 찾았다.

axios 모듈이란,

Node.js환경으로 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.

HTTP 요청과 응답을 JSON 형태로 자동 변경 해준다는 특징이 있다.

## 크롤링 모듈 활용


axios 모듈의 기본 형태는 다음과 같다.
```
const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
  try {
    return await axios.get("url");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("className");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('className').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));
```
