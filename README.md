# 실행방법

### 1번 미션 실행

```node index```

### 2번 미션 실행

```node scenario```

# 체크포인트

- [x] EventManager 싱글톤 인스턴스 구현

- [x] Subscriber 추가 함수 구현 (여러 조건 수용)

- [x] Subscriber 제거 함수 구현 (여러 조건 수용)

- [x] postEvent 함수 구현

- [x] Worker Thread 동작 분리

- [x] 조건별 매칭한 subscriber 핸들러 동작

- [x] 핸들러 내 completed flag 지원 여부

- [x] 구독 조건들 출력 함수 구현

- [x] 비동기 async방식 postEvent 동작 구현

- [x] 지연 delay방식 postEvent 동작 구현

- [x] Subscriber 핸들러 처리 Event Emitter 동작 구현

# test 결과

### EventManager method test

* main 함수 작성
![](https://postfiles.pstatic.net/MjAyMjA4MDlfMjk4/MDAxNjU5OTgxMTQ3NTY5.yhZyCZPb_UectgugEeqL7lVyuwA1CkUek4rfnnzKiDog.VxBJqAENomkQG-317Ykg6_ars9iyXHaioDsgV3_Dxgog.PNG.kgu0515/image.png?type=w773)

* 출력 결과
![](https://postfiles.pstatic.net/MjAyMjA4MDlfNyAg/MDAxNjU5OTgwOTk3NDc5.hX2yPQ8j-TP3TgeWCiK9PkglROjPPF8Z_bhkLWcY2gEg.pJ_WLpD_3ipiL0fb37Oh6KJmnq80iLSetaNGRep_a8og.PNG.kgu0515/image.png?type=w773)

### 데이터구조
![](https://postfiles.pstatic.net/MjAyMjA4MDlfMjQx/MDAxNjU5OTgzNDc3NjE1.f8DExz_acUj6K3_ehwoSdC_DnrbAR2ZCSy9b-M-hsmgg.OfjEva7QacDeuOr4EWTa0e7s8iNn43IGH4VlT-SSJkog.PNG.kgu0515/SE-ac648c57-fae0-40dd-ac14-529a32477251.png?type=w773)



# 학습메모



## worker thread 구현 관련...

thread를 생성하면 글로벌 변수를 참조할 수 있다고 가정하고 구현하였다.
C++의 경우 thread 생성 시 글로벌 변수를 참조할 수 있기 때문에 nodejs의 worker_thread도 마찬가지일 것이라고 가정하였다.

구현 결과, 문제없이 작동하였다.

## 비동기방식, 지연방식 postEvent()

* 동작별 메소드를 만들기로 선택함.
* 비동기방식의 경우 parameter로 completed flag 추가
* 지연방식의 경우 parameter로 completed flag와 delayTime 추가
* 따라서, 동기, 비동기, 지연방식의 postEvent가 파라미터 개수에 따라 각각 인식될 수 있다.

### 의문점.

* flag가 true일때 handler의 실행을 막으면 flag의 역할이 끝 인건지..
* 지연방식에도 flag가 필요한지..

## padStart, padEnd

줄간격 맞추는 method


```"string".padStart(num,char)``` : num개 문자열이 되도록 문자열 앞에 char로 채운다

```"string".padEnd(num,char)``` : num개 문자열이 되도록 문자열 뒤에 char로 채운다


[event emitter](https://www.huskyhoochu.com/nodejs-eventemitter/)