# 체크리스트
- [x] VirtualBox 설치
- [x] Linux 설치
- [x] ssh를 설치하고 계정추가 및 패스워드 설정
- [x] ssh 서버 실행 후 로컬 컴퓨터에서 ssh 서버 접속
- [x] /monitoring 디렉토리를 생성, 764로 권한 변경, 가상환경에서 권한 확인
- [x] 가상 환경을 로컬 컴퓨터와 시간 동일하게 설정
- [ ] 가상 환경에 node.js 를 설치 후 day1 미션 파일 실행

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

- ssh를 설치하고 계정추가 및 패스워드 설정

1. 먼저 ubuntu에서 터미널을 킨다.

2. ssh를 설치한다.
```
sudo apt-get install openssh-server
```
3. ssh 계정 생성 및 비밀번호를 설정한다.
```
sudo adduser [생성할 ID]
```
본인은 id를 boost 로 설정하였다.

- ssh 서버 실행 후 로컬 컴퓨터에서 ssh 서버 접속

1. ssh 서버를 실행한다.
```
sudo service ssh start // 실행
sudo service ssh stop // 종료
sudo service ssh status // 서버 동작 확인
```

2. 서버 동작을 확인한다.
![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTYx/MDAxNjU4MjA5NDk4NTg0.F9nuPW2vnam6s2WtQ3qT-V8-m5jHXLeeY5IgcSQv3xcg.HelNXamHGUKpIUn5jiGt61DfGQBlX2lB_Q1s9MzKSCIg.PNG.kgu0515/image.png?type=w773)

active (running) 이 보인다면 서버가 잘 동작이 된다는 것이다.

3. [PuTTY](https://www.putty.org/) 설치하기</br>
PuTTY를 이용하면 로컬 컴퓨터에서 ssh 서버로 접속이 가능하다.

3-1. PuTTY에 ssh 정보를 입력한다.
![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTk1/MDAxNjU4MjA5NjU0ODY3.djBYtxXLTIwUFFgVqXkGW_udMZHZI0-Twm5ivhKCxpYg.Mk_AvzPP76ijMK2Cx6paIdqX75DxWgbFYbO_C_AXaY4g.PNG.kgu0515/image.png?type=w773)
위의 창에서 ssh 서버의 IP address와 Port를 입력해주어야 한다.

3-2. ssh 정보 알아내기
![](https://postfiles.pstatic.net/MjAyMjA3MTlfODAg/MDAxNjU4MjEwNDE4NTY1.9xihB3j0wIp5tgu7VC5P8ID4RrErYsx25DcGzn21YiAg.neX4u3fkAJYnzz-uMFVcqsfGaPIDrKQE3VWZsE7yQgIg.PNG.kgu0515/image.png?type=w773)
ubuntu의 터미널에서 
```
ip addreess
```
명령어를 입력해주면 ip 주소를 알아낼 수 있다.
위의 이미지에서 빨간 동그라미 부분이 서버 주소이다.
이 주소만으로는 연결이 되지 않는다.
VirtualBox에서 포드 포워딩을 설정해주면 된다.
![](https://postfiles.pstatic.net/MjAyMjA3MTlfOTQg/MDAxNjU4MjEwNDcwNjc2.jao0A8EP9cp8eETtXxAjDxg2dYICFMlIsARBBFKBrDMg.q_cLlVONySvAXoShzJOfcLi6YmOUJuy48vdH2e3yRH4g.PNG.kgu0515/image.png?type=w773)
위 이미지와 같이 설정해주면 호스트IP(127.0.0.1)과 호스트 포트(1234)를 통해 ssh 서버에 접속이 가능하다.

3-3. 로컬 컴퓨터에서 ssh 서버 접속하기
![](https://postfiles.pstatic.net/MjAyMjA3MTlfMiAg/MDAxNjU4MjEwNTI0NTA1.eyC35YWtAaNkM5IW4sYWDQWcs7i-KCQbc92EtmypRCog.89Onyau9hQ4a0FgmwZEq596m3QaN6BKBc3YTCbeb4Bsg.PNG.kgu0515/image.png?type=w773)
다시 PuTTY로 돌아와 위의 값을 입력해주면

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjAy/MDAxNjU4MjEwNTY3NDk4.3aBGBKOM3aQmkIt7ToX8jR6q45Kn2lCn_keqKgjqtCUg.TrS08nCU_pQQgLWAAP_Hz9mYIvYh5GUvXdYYj58vkcwg.PNG.kgu0515/image.png?type=w773)
이런 창이 뜨게 되고, ssh 계정으로 로그인해주면 ssh 서버에 접속할 수 있게 된다.

- /monitoring 디렉토리를 생성, 764로 권한 변경, 가상환경에서 권한 확인

1. 로컬 컴퓨터에서 실행한 ssh 서버에 다음 명령어를 입력한다.

```
mkdir monitoring // monitoring 폴더 생성
chmod 764 monitoring // monitoring 권한을 764로 변경
```

2. 가상 환경으로 돌아가서 로컬과 동일한 계정으로 접속
![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTgg/MDAxNjU4MjExMzAxMzg2.921LvJhmGW0C7HGZHeD90WF4hXqyXb07Jym_amYAVm8g.pSHYwOpVJKhBrW67k2JS0R0CoV9ZSE7mhoBNaPrnC_Eg.PNG.kgu0515/image.png?type=w773)

3. monitoring 폴더에 대해 권한 확인

monitoring 폴더가 있는 폴더로 이동 후
```
ls -l 
```
명령어를 입력해주면
![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTQ5/MDAxNjU4MjExMjY0NzM0.54W_U8UMQ2g-eNAMixqzkl1a-QZ747_XTdHG4SrbSuYg.9ynkUx9_2Nvj2_r_sGV083AtiZfy0d-ZylNk8ar83Bog.PNG.kgu0515/image.png?type=w773)
다음과 같은 화면이 뜬다.

- 가상 환경을 로컬 컴퓨터와 시간 동일하게 설정
</br></br>
이부분은 이미 리눅스 설치 과정에서 한국시간대로 설정해주었기 때문에 따로 시간을 변경해줄 필요가 없었다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjI2/MDAxNjU4MjEyNTI2NjU5.Gx5f3bAVXOK3dJA0sI1q4CPgw02ZKALF3F-2u8m4PaAg.zKcNUYUsfgDEpJveippAA2MvWQ6H78eyel_IoJ1xHrgg.PNG.kgu0515/image.png?type=w773)
캡처 완료

