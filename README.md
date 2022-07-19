# 체크리스트
- [x] VirtualBox 설치
- [x] Linux 설치
- [ ] 가상환경에 원격으로 접속할 수 있도록 ssh 설정
- [ ] root 이외에 본인이 접속할 계정 추가
- [ ] 본인 계정에 대한 패스워드 설정
- [ ] 로컬 컴퓨터에서 가상 환경 리모트 컴퓨터에 ssh로 접속해서 본인 계정으로 로그인한다.
- [ ] 본인 계정에서 /monitoring 디렉토리를 생성하고 764 모드로 접근 권한을 바꿔서, 본인 계정으로 쓸 수 있도록 설정한다.
- [ ] 가상 환경에서 터미널을 열고 /monitoring 경로에 대해 권한을 확인하는 화면을 캡처한다.
- [ ] 가상 환경에 오늘 날짜 + 서울 시간대로 지정해서 로컬과 가상 환경이 동일하도록 맞춘다.
- [ ] 가상 환경에서 터미널을 열고 date 명령으로 오늘 날짜를 출력한 상태로, 화면을 캡처한다.
- [ ] 가상 환경에 node.js 를 설치하고 버전을 확인한다.
- [ ] 어제 작성한 day1 미션 js파일을 복사해서 실행한다.

# 학습 메모

- VirtualBox 설치

1. 먼저 [virtualbox 사이트](https://www.virtualbox.org)에 접속한다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfODMg/MDAxNjU4MjAxNTA4MzMx.DU7opEpUV5mqD63cgOuNPSj9xvNFkhpkN6yuHaekx20g.IjnMb-ZWSj8itU0alS9j7kA-MVxXTfjXhmXrjCoy6nIg.JPEG.kgu0515/virtualBox_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C1.jpg?type=w773)

2. Window용으로 VirtualBox를 설치한다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjg0/MDAxNjU4MjAxNTA4MzM0.Cw7ySDjCUY0vmY_pGAhQiMO0B9TF3qXZudgc18i_1egg.oG658ORkg_xmDbUyIrjO9sYTaMqL0-Q8p7vra40H6YUg.JPEG.kgu0515/virtualBox_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C2.jpg?type=w773)

3. 아래의 창이 뜨면 계속 Next를 눌러주어 설치한다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjk1/MDAxNjU4MjAxNTA4Mjky.fzP9TQuZl9SmAm3QhdWch8aE6bXBNKz_REePkvNIHosg.mYlddPyB-i-VV-Z5gPVj-5vIId70pI7w5tYORyIkzKcg.JPEG.kgu0515/virtualBox_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C3_%EC%9D%B4%ED%9B%84%EB%A1%9C%EB%8A%94_%EB%8B%A4_next.jpg?type=w773)

- Linux 설치

1. VirtualBox를 설치해준 후 실행하면 아래의 창이 뜬다.
![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjIz/MDAxNjU4MjAxODUyNzQ2.vr81Dt5iozRKkl88wzFKFjEpL5pQYTT6yThur4HkTIQg.tLbalSP7eNVaZa15xAjkT0dGSMXyPhTkIgWVbwTTngEg.PNG.kgu0515/image.png?type=w773)

2. [새로 만들기] 클릭을 통해 새 가상 하드디스크 설정.

3. [설정] -> [저장소] -> [비어 있음] -> CD모양 클릭
![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjUz/MDAxNjU4MjAyNzI4OTQ2.enxfYzx3tDsBJTp_Exl-VdYmh9KKlmiGjYNyeC8x4d8g.EstI0mskrqoqBG8VEJzIkRKNJ1FpLNo9RbZP9ShbxaYg.PNG.kgu0515/image.png?type=w773)

4. [ubuntu홈페이지](https://ubuntu.com/download/desktop)에서 다운받은 iso 부팅이미지를 넣는다.

5. 시작버튼을 눌러 가상머신 실행 후 설치

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjA5/MDAxNjU4MjA3NzE5NzA5.B-haNl38TsD07k_uu1od22_76Qn74GY6A-KUbr-SHekg.z1670SpMUaJz2I7jNSw8mLDTZQZdrNZ5RgWRKlhFu8og.PNG.kgu0515/image.png?type=w773)
설치 끝!
