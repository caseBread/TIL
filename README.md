# 실행 방법

![](https://postfiles.pstatic.net/MjAyMjA4MTFfMjAg/MDAxNjYwMjAwNDc3MDUz.7Ju3g1AtjORkbgKrWAh1o_mtCz5fqTYGHWFXaIla1Tog.cBWcxIEnLc3gkucEVp5geZVmZAp1wFVw5NuQdXQuG7Yg.GIF.kgu0515/ezgif-4-b23322af0d.gif?type=w773)

# 체크리스트

### 에코 서버 관련

- [x] TCP 에코 서버 bind

- [x] 클라이언트 접속 후 정보 출력

- [x] 클라이언트에서 보낸 데이터 재전송

### 챌린지 서버 관련

- [x] checkin 요청 구현

  - [x] 캠프 아이디 범위 확인 + 응답

  - [x] 그룹 할당 후 그룹 번호 전달

- [ ] checkout 요청 구현

  - [ ] 그룹 내 다른 캠퍼에게 퇴장 안내

  - [x] TCP 연결 종료시 checkout 처리

- [x] mission 요청 구현

  - [x] day 확인후 키워드 전송

- [ ] peersession 요청 구현

  - [ ] 그룹내 브로드캐스트 시작

- [ ] complete 요청 구현

  - [ ] 그룹내 브로드캐스트 종료

- [ ] message

  - [ ] 피어세션 진행중에 그룹내 브로드캐스트

  - [ ] 그 외에는 무시

- [ ] direct 요청 구현

  - [ ] 특정 캠퍼에게 전송

### 챌린지 클라이언트 관련

- [ ] 캠프아이디 입력 후 checkin 요청 campId 전송

  - [ ] 활동 시각 저장

- [ ] checkout 전송후 연결 해재

  - [ ] 체크인부터 체크아웃까지 활동 시간 출력

- [ ] peersession 요청 maxCount 전송

- [ ] complete 요청 전송

- [ ] message 요청 text 전송

- [ ] direct 요청 campId, text 전송

# 학습메모
