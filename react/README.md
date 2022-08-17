# 2장 정리

### 2-1 Before React

- react는 반복되는 형태의 html 구조를 있는구조를 불러오게끔? 해줌
- 특정 주소를 script src 통해 불러오면 react 설정 끝

### 2-2 Our First React Element

![image](https://user-images.githubusercontent.com/92029332/185049104-53a1ff83-6942-4957-8774-fe1f681e010f.png)

- 위의 그림처럼 render를 이용하면 root가 id인 태그 에 span이 생김.

- createElement를 이용하면 태그안의 요소를 정의할 수 있다. 텍스트던, 아이디이름이던, css요소던, ...

- 즉, react를 이용하면 html적인 요소를 js 안에서 표현할 수 있게 되는것 같다.

### 2-3 Events in React

- event적인 요소 추가 가능

- createElement 의 파라미터로 2번째에 객체를 넣는데, 여기에 원하는 이벤트 요소를 넣으면 된다.

- 다음은 그 예시다.

```javascript
const h3 = React.createElement(
  "h3",
  {
    id: "title",
    onMouseEnter: () => console.log("mouseEnter"),
  },
  "Hello i am span"
);
```
