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

### 2.4 Recap

- 기껏 createElement 배워왔는데 이거 이제 안쓴대

### 2.5 JSX

- Babel을 통해 JSX를 createElement로 변환한다
- jsx 변환기를 달아주면 jsx로 작성한 내용을 createElement 식으로 인식시킬 수 있다.
- jsx 방식은 다음과 같다.

```javascript
const Title = (
  <h3 id="title" onmouseenter={() => console.log("mouseEnter")}>
    Hello im a title
  </h3>
);
```

- jsx 변환 형식은 다음 사이트에서 확인할 수 있다. [babeljs.io](https://babeljs.io/)

### 2.6 JSX part two

- container 안에 넣을 요소의 이름은 무조건 첫글자를 대문자로 선언해야한다. (`Title`, `Button` 처럼)
- 컴포넌트는 함수로 만들어 주어야 한다.
  - function 사용시 return붙여야함
  - 화살표함수는 안붙혀도됌.

### 3.0 Understanding State

- 한번 렌더링 후 리렌더링 해주어야 화면에 count가 업데이트 됨. 렌더링 필수!
- 렌더링 필요할때마다 렌더링 전체를 해주면 비효율적임
- 다음시간엔 효율적인 렌더링 방법에 대해 알아볼것임!

### 3.1 setState part One

- setState : 호율적인 렌더링을 위한 메쏘드
- setState의 리턴값은 값과 값modefier 두개다.
- 아래 방식으로 리턴값에 이름지어주기가 가능하다.

```javascript
const data = React.useState(666);
const [counter, modifier] = data;
```

### 3.2 setState part Two

- counter와 modifier를 함수로 묶어 동작하게끔 설정.
- 그 함수는 onClick의 인자로 넣어

### 3.3 Recap

- state (counter부분)이 modifier(setCounter부분) 을 통해 값이 바뀌면 렌더링이 일어난다!!
- App 부분 안에서 state 가 쓰이는 모든 부분이 refresh 됌!

### 3.4 State Function

- `setCounter(counter + 1);` 요방식 말고 `setCounter((current) => current + 1);` 요방식 써라!!
- 아마 첫번째 방식을 쓰면 비동기 관련 오류 나는듯

### 3.5 Inputs and State

- html 속성으로 js의 명령어를 쓰지 말것 (ex. class, for)
- html 속성에 value하고 onChange 넣기
- 그리고 onChange의 modifier에다 받은 event의 원하는 정보 찾아 넣기..
- event.target.value가 입력한 정보이다..

### 3.6 State Practice part One

- setState에 어떤 값을 파라미터로 넣으면 default값됨.
- minutes 와 setMinutes 다루기... 시야확장타임
