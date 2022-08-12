# 실행 방법

- server 실행 : `node server`
- client 실행 : `node client`

### 실행 명령어 시나리오 (예시)

```javascript
// 순서대로 시나리오 진행
// 2개의 client 실행 필요


//J111
checkin J111

//J111
mission day1

//  J222
checkin J222

//J111
peersession 2

//J111
message hello~~

//  J222
message nice to meet you

//J111
complete

//J111
direct J222 nice to meet you too

//  J222
checkout

//J111
checkout

```

# 체크리스트

### 에코 서버 관련

- [x] TCP 에코 서버 bind

- [x] 클라이언트 접속 후 정보 출력

- [x] 클라이언트에서 보낸 데이터 재전송

![](https://postfiles.pstatic.net/MjAyMjA4MTFfMjAg/MDAxNjYwMjAwNDc3MDUz.7Ju3g1AtjORkbgKrWAh1o_mtCz5fqTYGHWFXaIla1Tog.cBWcxIEnLc3gkucEVp5geZVmZAp1wFVw5NuQdXQuG7Yg.GIF.kgu0515/ezgif-4-b23322af0d.gif?type=w773)

### 챌린지 서버 관련

- [x] checkin 요청 구현

  - [x] 캠프 아이디 범위 확인 + 응답

  - [x] 그룹 할당 후 그룹 번호 전달

- [x] checkout 요청 구현

  - [x] 그룹 내 다른 캠퍼에게 퇴장 안내

  - [x] TCP 연결 종료시 checkout 처리

- [x] mission 요청 구현

  - [x] day 확인후 키워드 전송

- [x] peersession 요청 구현

  - [x] 그룹내 브로드캐스트 시작

- [x] complete 요청 구현

  - [x] 그룹내 브로드캐스트 종료

- [x] message

  - [x] 피어세션 진행중에 그룹내 브로드캐스트

  - [x] 그 외에는 무시

- [x] direct 요청 구현

  - [x] 특정 캠퍼에게 전송

### 챌린지 클라이언트 관련

- [x] 캠프아이디 입력 후 checkin 요청 campId 전송

  - [x] 활동 시각 저장

- [x] checkout 전송후 연결 해재

  - [x] 체크인부터 체크아웃까지 활동 시간 출력

- [x] peersession 요청 maxCount 전송

- [x] complete 요청 전송

- [x] message 요청 text 전송

- [x] direct 요청 campId, text 전송

## 시연 연상

![](https://postfiles.pstatic.net/MjAyMjA4MTJfMjgx/MDAxNjYwMjY1MDc5MTA2.460bQ7bf2zJfv-L9hOOSLLZicLVRjfqao1j0LBGoTYUg.R58d9NoaE5Mj9H-PfZYfyssGW-lBEWist_A_O-IMxaEg.GIF.kgu0515/testing.gif?type=w773)

## 리팩토링할 점

- 모듈화

# 학습메모

- json 구조 설명

header를 중심으로 구성되었고,

request와 response의 구분은 `body` 와 `status` 요소의 유무로 확인이 가능하다.

```javascript
// request
json = {
  header: {
    command: "~~",
    campId: "~~",
    date: new Date(),
    msg: {
      to: "Jxxx",
      text: "~~~",
    },
  },
};
```

```javascript
// response
json = {
  header: {
    command: "~~",
    campId: "~~",
    date: new Date(),
    msg: {
      to: "Jxxx",
      text: "~~~",
    },
    status: "~~~",
  },
  body: "~~~~~~~~~~~~~~~~~~~~~",
};
```

- json encoding decoding 과정 설명 (OSI 7계층 느낌)

1. client에서 명령어 입력
2. 명령어를 json에 삽입
3. JSON.stringify(json) 사용하여 json -> 문자열로 변경
4. 문자열 server로 전송
5. server는 버퍼형태 data 전송받음
6. buffer decoding (buffer -> 문자열)
7. JSON.parse(chunk) 사용하여 문자열 -> json으로 변경

[net module docs](https://nodejs.org/api/net.html)

[TCP socket](https://mindflip.github.io/node.js/Nodejs_TCP_Socket/)

[socket programming](https://recipes4dev.tistory.com/153)

[client & server](https://velog.io/@wanzekim/HTTP)

[http 구조](https://programmer93.tistory.com/60)
