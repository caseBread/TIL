# 체크리스트

- [x] boostset class 구현
- [x] countSet class 구현
- [x] 각각 메쏘드 -> 함수형 프로그래밍으로 개선

  - [x] sum 합집합 구현
  - [x] complement 구현
  - [x] intersect 구현
  - [x] append 구현
  - [x] remove 구현
  - [x] sum 구현
  - [x] complement 구현
  - [x] intersect 구현
  - [x] resultAll 구현

- [x] map 구현
- [x] filter 구현
- [x] display 구현
- [x] 고차함수로 동작하는 메쏘드 구현

- [x] 각 기능을 확인하기 위한 상위 프로그램 구현

# 학습메모

클로저, 람다,

spread, rest

filter, map은 object에 안먹힘

=> list로 변환

### 클로저

클로저는 쉽게 함수를 값으로써 다루는것을 이용하는것임..

```javascript
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc(); // makeFunc의 반환함수로 선언됨
console.log(myFunc()); // 반환함수에 대한 함수인ㄷ 이때 makeFunc가 선언된시절 name인 Mozilla를 기억하게 되는것 이게 클로저!!!!!!!!!!!
```
