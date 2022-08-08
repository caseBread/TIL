# 실행방법

# 체크포인트

- [x] EventManager 싱글톤 인스턴스 구현

- [x] Subscriber 추가 함수 구현 (여러 조건 수용)

- [x] Subscriber 제거 함수 구현 (여러 조건 수용)

- [x] postEvent 함수 구현

- [x] Worker Thread 동작 분리

- [ ] 조건별 매칭한 subscriber 핸들러 동작

- [ ] 핸들러 내 completed flag 지원 여부

- [ ] 구독 조건들 출력 함수 구현

- [ ] 비동기 async방식 postEvent 동작 구현

- [ ] 지연 delay방식 postEvent 동작 구현

- [ ] Subscriber 핸들러 처리 Event Emitter 동작 구현

# 학습메모

## padStart, padEnd

줄간격 맞추는 method

## worker thread 구현 관련...

thread를 생성하면 글로벌 변수를 참조할 수 있다고 가정하고 구현하였다.
C++의 경우 thread 생성 시 글로벌 변수를 참조할 수 있기 때문에 nodejs의 worker_thread도 마찬가지일 것이라고 가정하였다.

구현 결과, 문제없이 작동하였다.




```"string".padStart(num,char)``` : num개 문자열이 되도록 문자열 앞에 char로 채운다

```"string".padEnd(num,char)``` : num개 문자열이 되도록 문자열 뒤에 char로 채운다