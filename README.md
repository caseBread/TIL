# 실행 방법

터미널에서 다음의 명령어 입력

```node index```

# 체크포인트

- [x] URL 입력 후 HTTP 요청 보내기 구현

- [x] HTML 파싱 - src 속성 탐색 구현

- [x] 응답 대기 시간 측정 및 출력

- [x] 다운로드 시간 측정 및 출력

- [x] 요청 도메인 개수 측정 및 출력

- [x] 전체 요청 개수 측정 및 출력

- [x] 전체 이미지 개수 측정 및 출력

- [x] 전체 코드 개수 측정 및 출력

- [x] 전체 전송 용량 측정 및 출력

- [x] 리다이렉트 개수 측정 및 출력

- [x] 응답 - 리소스 메모리 캐싱 구현

- [x] 캐싱 데이터 측정 및 출력

# 학습 메모

http cache는  오래 담아두어서는 안된다.

웹페이지는 자주 갱신될 수 있기 때문에 자주자주 갱신이 필요하다

실제 웹 브라우저의 경우, 캐시의 유효기간을 설정해주어 관리한다.

캐시의 유효기간과 비슷한 방식인 FIFO 알고리즘을 통해 캐시를 구현함.


## readline-sync

js에서 python의 input처럼 입력을 받을 수 있게 해주는 모듈이다.

먼저 npm을 통해 readline-sync 모듈을 설치해주어야 한다.

```npm install readline-sync```

그리고 사용법은 다음과 같다.

```
const readlineSync = require("readline-sync")
const input = readlineSync.question("please enter the input")
```

[web packet 분석](https://secure-key.tistory.com/45)

[chunk](https://mutpp.tistory.com/10)

[how to distinguish redirect](https://stackoverflow.com/questions/43347422/how-do-i-distinguish-a-automatic-redirect-from-a-user-intended-redirect-a-click)

[redirect code](https://im-first-rate.tistory.com/73)

[http cache](https://pjh3749.tistory.com/264)