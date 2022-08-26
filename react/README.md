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
- state 와 modifier 다루기... 시야확장타임

### 3.7 State Practice part Two

- disabled 속성 : 입력창 비활성화 여부
- State 두개이상 다뤄보기 시간이었음

### 3.8 Recap

- text에다가도 state를 활용할 수 있다.
- state의 다양한 범용성

### 3.9 Final Practice and Recap

- 이제 지금까지 만든 시간변환기를 함수로 묶으면 html 태그처럼 사용이 가능하다.
- App이라는 함수에 지금까지 만든 묶음을 사용해주면 된다.
- 물론 App이라는 함수에도 setState를 만들어 적절히 배치해주면 된다.

### 챌린지 과제 (km to miles 코드 짜기)

- 왜 div를 써야하는가
- label에 꼭 속성 붙혀야 하는가
- placeholder ?? htmlFor ?? 모르는 속성이 너무 많다!
- event.target.value 는 자주쓸거같으니까 외우자

### 4.0 Props

- component의 재사용 방법을 알아봄. 약간 OOP 느낌
- component(`<Btn />`) 안에 파라미터를 넣으면 function에서 받을 수 있다.
- 파라미터 값을 통해 text나 속성 구성 가능
- 파라미터 이름은 자유인듯 ?? text쓰던 foo 쓰던 banana 쓰던 big 쓰던 ...

### 4.1 Memo

- 선언한 component 에는 원래 html 속성을 쓸 수 없다.
  - ex) `<Btn />` 안에 속성으로 `onClick` 따위 쓸수 없다.
  - `Btn`을 선언한 함수 내에서 사용해야함.
- `React.memo()`
  - 리액트는 컴포넌트의 상태가 변경되면 모든 컴포넌트를 rendering하게됨
  - 이 과정에서 변경할 필요가 없는 컴포넌트도 rendering하게됨 (성능저하 원인)
  - 변경하지 않도록 해주는 것이 React.memo()

### 4.2 Prop Types

- 함수 파라미터로 보낼 대 type을 따지게 해줌

  - 파라미터 잘못보내는 실수 방지
  - typeScript를 사용할 경우 prop types를 굳이 안따져도 됌.
  - 정확한 메쏘드명은 `(prop이름).PropTypes = {}` 이다.

- PropTypes가 확인할 수 있는 다양한 요소들

```javascript
MyComponent.propTypes = {
  // 리액트 요소
  // <div>123</div> , <Component />
  menu: PropTypes.element,

  // 컴포넌트 함수가 반환할 수 있는 모든 것(비추)
  // <SomeComponent />, 123
  description: PropTypes.node,

  // Message 클래스로 생성된 모든 객체
  // new Messages() -> 참, new Car() -> 거짓
  message: PropTypes.instanceOf(Message),

  // 배열에 포함된 값 중에서 하나를 만족
  name: PropTypes.oneOf(["jake", "olivia"]),

  // 배열에 포함된 타입 중에서 하나를 만족
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])

  // 특정 타입만 포함하는 배열
  // [1, 5, 7] -> 참, ['a', 'b'] -> 거짓
  ages: PropTypes.arrayOf(PropTypes.number),

  // 객체의 속성값 타입을 정의
  // {color: 'red', weight: 123} -> 참
  info: PropTypes.shape({
    color: PropTypes.string,
    weight: PropTypes.number
  })

  // 객체에서 모든 속성값의 타입이 같은 경우
  // {prop1: 123, prop2: 456}
  infos: PropTypes.objectOf(PropTypes.number)
}
```

### 4.3 Recap

- 컴포넌트에 필요한 속성넣기...

### 5.0 intruduction

- `npx create-react-app [appname]` 시 react app 생성됨.
- `npm run start` 하면 react 서버 생성됨.

### 5.1 Tour of CRA

- App.js 있는 폴더에 js폴더 만들어서 기능 구현 + export 후 App.js에 import 해주면 됌.
- propTypes 검사할 때 `.isRequired` 붙히면 그 요소가 필수적으로 있어야 된다는 뜻.

- 이번 강의에서 Button.js와 style.css 파일 작성 후 적용방법 알아봄.
- 아래 그림처럼 className 적으면 랜덤한 이름을 생성한다 ??
  ![image](https://user-images.githubusercontent.com/92029332/185778481-565c22db-475e-4a48-9624-1992ef3c52ba.png)
  - 따라서, className이 겹쳐도 상관없다.
  - 랜덤한 className을 생성하기 때문에 컴포넌트들이 독립적으로 존재할 수 있게 됌.

### 6.0 ~ 6.1

- `useEffect`에 대해 배움
- `useEffect`란, 프로그램 실행 시 불필요하게 여러번 실행되는 것을 방지하기 위해 한번만 실행하게 끔 해주는 함수
- 파라미터로 function, [] 를 넣는다.

### 6.2 Deps

- `useEffect` 에 파라미터로 function과 []를 넣는것을 지난시간에 배웠다.

  - [] 안에 넣는것의 정체는 바로 **변화대상**이다!
  - 즉, 변화대상이 변화되는 순간 `useEffect`가 실행되는 것이다! (약간 emit 느낌)
  - 변화대상을 지정해주지 않으면 최초1번만 실행.

- `useEffect` 안에 if문을 넣어도 된다.
