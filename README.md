# 실행 방법

# 체크포인트

- [x] 전송 응용계층 구현
    - [x] 전송 응용 계층 메일 입력 구현
- [x] 전송 표현계층 구현
    - [x] 전송 표현 계층 BASE64 인코딩 구현
- [x] 전송 세션계층 구현
    - [x] 전송 세션 계층 UUID 추가 구현
- [x] 전송 전송계층 구현
    - [x] 전송 계층 3-way 핸드쉐이크 (SYN, ACK, DATA) 구현
    - [x] 전송 계층 세그멘트 나누기 처리 구현    
- [x] 전송 네트워크계층 구현
    - [x] 네트워크 계층 헤더 포함 구현
- [x] 전송 데이터링크계층 구현
    - [x] 데이터링크 계층 헤더 포함 구현
- [x] 전송 물리계층 구현
    - [x] 물리계층 문자열-16진수-문자열 변환 구현

===========================

- [x] 수신 물리계층 구현
- [x] 수신 데이터링크계층 구현
    - [x] 수신 데이터링크 계층 헤더 제거, MAC 주소 비교 구현
- [x] 수신 네트워크계층 구현
    - [x] 수신 네트워크 계층 헤더 제거, IP 주소 비교 구현
- [x] 수신 전송계층 구현
    - [x] 수신 전송 계층 3-way 핸드쉐이크 (SYN+ACK, DATA+ACK) 구현
    - [x] 수신 전송 계층 세그멘트 합치기 처리 구현
- [x] 수신 세션계층 구현
    - [x] 수신 UUID 출력 세션 계층 구현
- [x] 수신 표현계층 구현
    - [x] 수신 표현 계층 BASE64 디코딩 구현
- [x] 수신 응용계층 구현
    - [x] 수신 응용 계층 메일 출력, 파일 저장 구현


## 리팩토링할 점

- transportLayer에서 ip를 멤버변수에서 못가져오는 오류 고치기
- transportLayer에서 객체입력 문자열로 고치기

# 학습메모

 



* 다른 파일 간 동시 참조 불가능 ?!!!   ex ) a.js 에서 b.js에 있는 bfunc 함수 호출 => bfunc 함수에서 a.js 에 있는 afunc 함수 참조 시 에러 ?!?!?!?!

* 데이터 전송 시에도 syn ack 번호 규칙이 같다 ??

![](https://user-images.githubusercontent.com/45806836/98881108-a11ea300-24cc-11eb-9c62-12d58c635f96.png)


* 계층간 이동 및 PDU 종류

![](https://velog.velcdn.com/images%2Fkong2520%2Fpost%2Fa3be4a83-e74d-45c3-9c84-e030224db2be%2Fimage.png)

[base64](https://jsikim1.tistory.com/167)

[OSI 계층 구조](https://velog.io/@kong2520/OSI-%EA%B3%84%EC%B8%B5-%EA%B5%AC%EC%A1%B0)

[UUID v4](https://www.huskyhoochu.com/what-is-uuid/)

[js 문자 ascii 변환](https://www.delftstack.com/ko/howto/javascript/javascript-convert-character-code-to-ascii-code/)

