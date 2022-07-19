# 체크리스트

## 가상머신 리눅스
- [x] [VirtualBox 설치](#--virtualbox-설치)
- [x] [Linux 설치](#--linux-설치)
- [x] [ssh를 설치하고 계정추가 및 패스워드 설정](#--ssh를-설치하고-계정추가-및-패스워드-설정)
- [x] [ssh 서버 실행 후 로컬 컴퓨터에서 ssh 서버 접속](#--ssh-서버-실행-후-로컬-컴퓨터에서-ssh-서버-접속)
- [x] [/monitoring 디렉토리를 생성, 764로 권한 변경, 가상환경에서 권한 확인](#--monitoring-디렉토리를-생성-764로-권한-변경-가상환경에서-권한-확인)
- [x] [가상 환경을 로컬 컴퓨터와 시간 동일하게 설정](#--가상-환경을-로컬-컴퓨터와-시간-동일하게-설정)
- [x] [가상 환경에 node.js 를 설치 후 day1 미션 파일 실행](#--가상-환경에-nodejs-를-설치-후-day1-미션-파일-실행)

## 쉘 스크립트
- [x] [CPU 사용률을 cat 명령으로 가져와서 user 모드 사용률을 계산한 후 환경 변수에 저장하는 스크립트를 만든다.](#--cpu-사용률을-cat-명령으로-가져와서-user-모드-사용률을-계산한-후-환경-변수에-저장하는-스크립트를-만든다)
- [x] [crontab을 이용한 자동화 알람 기능을 스크립트로 만든다.](#--crontab을-이용한-자동화-알람-기능을-스크립트로-만든다)
- [x] [알림을 보낼 때 마다 /monitoring 폴더에 YYYYMMDD-HHMMSS 형식으로 빈파일을 생성한다.](#--알림을-보낼-때-마다-monitoring-폴더에-yyyymmdd-hhmmss-형식으로-빈파일을-생성한다)
- [x] [CPU 사용률을 강제로 70% 이상 높이는 방법을 찾아서 확인한다.](#--cpu-사용률을-강제로-70-이상-높이는-방법을-찾아서-확인한다)


# 학습 메모

## - VirtualBox 설치

### 1. 먼저 [virtualbox 사이트](https://www.virtualbox.org)에 접속한다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfODMg/MDAxNjU4MjAxNTA4MzMx.DU7opEpUV5mqD63cgOuNPSj9xvNFkhpkN6yuHaekx20g.IjnMb-ZWSj8itU0alS9j7kA-MVxXTfjXhmXrjCoy6nIg.JPEG.kgu0515/virtualBox_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C1.jpg?type=w773)

### 2. Window용으로 VirtualBox를 설치한다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjg0/MDAxNjU4MjAxNTA4MzM0.Cw7ySDjCUY0vmY_pGAhQiMO0B9TF3qXZudgc18i_1egg.oG658ORkg_xmDbUyIrjO9sYTaMqL0-Q8p7vra40H6YUg.JPEG.kgu0515/virtualBox_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C2.jpg?type=w773)

### 3. 아래의 창이 뜨면 계속 Next를 눌러주어 설치한다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjk1/MDAxNjU4MjAxNTA4Mjky.fzP9TQuZl9SmAm3QhdWch8aE6bXBNKz_REePkvNIHosg.mYlddPyB-i-VV-Z5gPVj-5vIId70pI7w5tYORyIkzKcg.JPEG.kgu0515/virtualBox_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C3_%EC%9D%B4%ED%9B%84%EB%A1%9C%EB%8A%94_%EB%8B%A4_next.jpg?type=w773)

--------------------

## - Linux 설치

### 1. VirtualBox를 설치해준 후 실행하면 아래의 창이 뜬다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjIz/MDAxNjU4MjAxODUyNzQ2.vr81Dt5iozRKkl88wzFKFjEpL5pQYTT6yThur4HkTIQg.tLbalSP7eNVaZa15xAjkT0dGSMXyPhTkIgWVbwTTngEg.PNG.kgu0515/image.png?type=w773)

### 2. [새로 만들기] 클릭을 통해 새 가상 하드디스크 설정.

### 3. [설정] -> [저장소] -> [비어 있음] -> CD모양 클릭

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjUz/MDAxNjU4MjAyNzI4OTQ2.enxfYzx3tDsBJTp_Exl-VdYmh9KKlmiGjYNyeC8x4d8g.EstI0mskrqoqBG8VEJzIkRKNJ1FpLNo9RbZP9ShbxaYg.PNG.kgu0515/image.png?type=w773)

### 4. [ubuntu홈페이지](https://ubuntu.com/download/desktop)에서 다운받은 iso 부팅이미지를 넣는다.

### 5. 시작버튼을 눌러 가상머신 실행 후 설치

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjA5/MDAxNjU4MjA3NzE5NzA5.B-haNl38TsD07k_uu1od22_76Qn74GY6A-KUbr-SHekg.z1670SpMUaJz2I7jNSw8mLDTZQZdrNZ5RgWRKlhFu8og.PNG.kgu0515/image.png?type=w773)

설치 끝!

-----------------

## - ssh를 설치하고 계정추가 및 패스워드 설정

### 1. 먼저 ubuntu에서 터미널을 킨다.

### 2. ssh를 설치한다.
```
sudo apt-get install openssh-server
```
### 3. ssh 계정 생성 및 비밀번호를 설정한다.
```
sudo adduser [생성할 ID]
```
본인은 id를 boost 로 설정하였다.

-----------------

## - ssh 서버 실행 후 로컬 컴퓨터에서 ssh 서버 접속

### 1. ssh 서버를 실행한다.
```
sudo service ssh start // 실행
sudo service ssh stop // 종료
sudo service ssh status // 서버 동작 확인
```

### 2. 서버 동작을 확인한다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTYx/MDAxNjU4MjA5NDk4NTg0.F9nuPW2vnam6s2WtQ3qT-V8-m5jHXLeeY5IgcSQv3xcg.HelNXamHGUKpIUn5jiGt61DfGQBlX2lB_Q1s9MzKSCIg.PNG.kgu0515/image.png?type=w773)

active (running) 이 보인다면 서버가 잘 동작이 된다는 것이다.

### 3. [PuTTY](https://www.putty.org/) 설치하기</br>
PuTTY를 이용하면 로컬 컴퓨터에서 ssh 서버로 접속이 가능하다.

#### 3-1. PuTTY에 ssh 정보를 입력한다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTk1/MDAxNjU4MjA5NjU0ODY3.djBYtxXLTIwUFFgVqXkGW_udMZHZI0-Twm5ivhKCxpYg.Mk_AvzPP76ijMK2Cx6paIdqX75DxWgbFYbO_C_AXaY4g.PNG.kgu0515/image.png?type=w773)

위의 창에서 ssh 서버의 IP address와 Port를 입력해주어야 한다.

#### 3-2. ssh 정보 알아내기

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

#### 3-3. 로컬 컴퓨터에서 ssh 서버 접속하기
![](https://postfiles.pstatic.net/MjAyMjA3MTlfMiAg/MDAxNjU4MjEwNTI0NTA1.eyC35YWtAaNkM5IW4sYWDQWcs7i-KCQbc92EtmypRCog.89Onyau9hQ4a0FgmwZEq596m3QaN6BKBc3YTCbeb4Bsg.PNG.kgu0515/image.png?type=w773)

다시 PuTTY로 돌아와 위의 값을 입력해주면

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjAy/MDAxNjU4MjEwNTY3NDk4.3aBGBKOM3aQmkIt7ToX8jR6q45Kn2lCn_keqKgjqtCUg.TrS08nCU_pQQgLWAAP_Hz9mYIvYh5GUvXdYYj58vkcwg.PNG.kgu0515/image.png?type=w773)

이런 창이 뜨게 되고, ssh 계정으로 로그인해주면 ssh 서버에 접속할 수 있게 된다.

-----------------

## - /monitoring 디렉토리를 생성, 764로 권한 변경, 가상환경에서 권한 확인

### 1. 로컬 컴퓨터에서 실행한 ssh 서버에 다음 명령어를 입력한다.

```
mkdir monitoring // monitoring 폴더 생성
chmod 764 monitoring // monitoring 권한을 764로 변경
```

### 2. 가상 환경으로 돌아가서 로컬과 동일한 계정으로 접속

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTgg/MDAxNjU4MjExMzAxMzg2.921LvJhmGW0C7HGZHeD90WF4hXqyXb07Jym_amYAVm8g.pSHYwOpVJKhBrW67k2JS0R0CoV9ZSE7mhoBNaPrnC_Eg.PNG.kgu0515/image.png?type=w773)

### 3. monitoring 폴더에 대해 권한 확인

monitoring 폴더가 있는 폴더로 이동 후
```
ls -l 
```
명령어를 입력해주면

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTQ5/MDAxNjU4MjExMjY0NzM0.54W_U8UMQ2g-eNAMixqzkl1a-QZ747_XTdHG4SrbSuYg.9ynkUx9_2Nvj2_r_sGV083AtiZfy0d-ZylNk8ar83Bog.PNG.kgu0515/image.png?type=w773)

다음과 같은 화면이 뜬다.

-----------------

## - 가상 환경을 로컬 컴퓨터와 시간 동일하게 설정
</br></br>
이부분은 이미 리눅스 설치 과정에서 한국시간대로 설정해주었기 때문에 따로 시간을 변경해줄 필요가 없었다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjI2/MDAxNjU4MjEyNTI2NjU5.Gx5f3bAVXOK3dJA0sI1q4CPgw02ZKALF3F-2u8m4PaAg.zKcNUYUsfgDEpJveippAA2MvWQ6H78eyel_IoJ1xHrgg.PNG.kgu0515/image.png?type=w773)

캡처 완료

-----------------

## - 가상 환경에 node.js 를 설치 후 day1 미션 파일 실행

### 1. 가상환경에 node.js 설치
```
$ sudo apt-get install -y curl
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm
```
위의 4가지 명령어를 통해 node.js와 npm 설치를 할 수가 있다.

### 2. node.js 버전 확인해보기

![](https://postfiles.pstatic.net/MjAyMjA3MTlfNjUg/MDAxNjU4MjEyODc4NjI2.j1UyL13fk0Y_DAM06BCmgZKDmHUYPLudH5Iqp7Tid1Qg.B22JQFZjy63mpWpGd8jD-qBXqHjA-dnHKnHymQ8Xkfgg.PNG.kgu0515/image.png?type=w773)

### 3. 가상 환경의 웹 브라우저로 day1 미션을 진행했던 학습 저장소 접속

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMjIz/MDAxNjU4MjEzNzU1MDg5.c5uE86HkVtuadeiFmqJ6vYIOsn3CP8xny0aWRFXRFx0g.F0ATRY2S0rr2FNvZ0CxYU7xEpQf2aVyn8Ql_kDn3y8wg.PNG.kgu0515/image.png?type=w773)

### 4. 코드 복사 후 가상 환경 속 js파일 생성 후 붙혀넣기

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTc1/MDAxNjU4MjEzNzk1OTYw.i9Oihtyx4dg2IZDAtOQq7nuyYLLhPlSnwUeDAGadrHgg.YHKNtnkqMD6YTGUhspruetyWP_OfNaDJXbYFwN0MvU4g.PNG.kgu0515/image.png?type=w773)

### 5. 가상 환경의 터미널 통해 js파일 실행

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTcy/MDAxNjU4MjEzODExMTU5.S7GbAbAbWUb1TZd520psqNhxRmCOCSA7-kqzvzZh0dYg.wAqpfrXG-PXU1qPHoff1foyoGjG2qO5_jgYQF_P37UMg.PNG.kgu0515/image.png?type=w773)

-----------------

## - CPU 사용률을 cat 명령으로 가져와서 user 모드 사용률을 계산한 후 환경 변수에 저장하는 스크립트를 만든다.

### 1. 먼저 가상 환경에 sh파일을 생성해준다.
```
touch [파일이름].sh
```

### 2. cat 명령어를 활용하여 user모드 사용률을 계산한다.

```
usage = $(cat /proc/stat | head -1 | awk '{print $2*100/($1+$2+$3+$4+$5+$6+$7+$8+$9)}')
```

cat과 head 명령어를 통해 CPU 내용을 불러오고 awk 명령어를 통해 CPU의 내용을 분할하여 user모드의 cpu만 추출을 가능하게 해준다.

![](https://postfiles.pstatic.net/MjAyMjA3MTlfMTIx/MDAxNjU4MjQxOTE4NDY0.p0J-_emN4w9LV3m9e1liAfldu5qd4CgPm3BmRq_hHTYg.EP1d8uKBwhaetVOr0MXVFlhoPZOzFdDhPRTDfty685wg.PNG.kgu0515/image.png?type=w773)

user모드의 cpu는 위의 이미지에서 2번째에 해당하는 값(7512)이다. </br>

awk 명령어를 활용하면 각각의 cpu 사용량을 추출할 수 있게 된다. (순서에 따라 각각 $1, $2, ... 로 추출됨.)

따라서, user 모드의 사용량($2)을 전체 cpu 사용량($1,$2,$3,...,$8,$9)으로 나누어주면 user모드의 cpu 사용률을 구할 수 있게 된다.


### 3. 환경변수에 cpu 사용률을 저장한다.

앞에서 구한 사용률을 export 명령어를 사용하여 환경변수에 추가해주면 끝이다. 사용한 명령어는 다음과 같다.
```
export $usage
```

-----------------

## - crontab을 이용한 자동화 알람 기능을 스크립트로 만든다.

### 1. 스크립트파일 실행예약

이번 미션에서 crontab에 대해 알아야할 명령어는 다음과 같다. 
```
crontab -e // crontab 수정 
crontab -l // crontab 열람
service cron start // crontab 갱신 및 시작
service corn status // crontab 동작 확인
```

먼저 crontab -e를 통해 스크립트파일 실행 예약 명령어를 입력해야 한다. 다음과 같이 crontab 에 입력해주면 된다.
```
* * * * * b.sh
```

앞의 5개의 별은 각각 분(0-59), 시간(0-23), 일(1-31), 월(1-12), 요일(0-7)을 뜻한다. *은 default 값으로, 매 분or시간or일or월or요일을 뜻한다.
즉, 위의 코드는 매 분마다 b.sh를 실행한다는 뜻이 된다.

b.sh 는 실행할 스크립트 파일이다.

### 2. 자동화 알람 기능 스크립트 코드 작성

CPU 사용률이 70% 이상이 3번 반복될 경우 알람기능이 실행되게끔 코드를 작성하였다.
CPU 사용률이 70%가 넘었을 경우를 counting해주기 위해 아래 이미지 처럼 해당 디렉토리에 cnt파일을 생성하여 counting을 기록해주었다.

![](https://postfiles.pstatic.net/MjAyMjA3MjBfMTIx/MDAxNjU4MjQ0NTAxNzI5.BJIMCjEAUiilPNXVlJJE5Tgt3WqykTuPudeF5TeNs9og.vjQuqaoQRod6kTCToOxr5BgKqiENo4VXGtsS0tad894g.PNG.kgu0515/image.png?type=w773)


알람기능은 slack 챗봇을 활용하였다.

-----------------


## - 알림을 보낼 때 마다 /monitoring 폴더에 YYYYMMDD-HHMMSS 형식으로 빈파일을 생성한다.

```
touch monitoring/`date +%Y%m%d`-`%H%M%S`
```

date 기능을 이용하여 구현하였다.


## 최종 구현 스크립트 코드

![](https://postfiles.pstatic.net/MjAyMjA3MjBfMjQw/MDAxNjU4MjQ0OTgyNjg2.ssRHve9ODJ9ttaer3HDUg7c9Zso-_MwHNONy36QztfUg.SvHqgH5_paeKZV7jVWH7h4laOQmHqAoIsgCJi_DT3uAg.PNG.kgu0515/image.png?type=w773)

## - CPU 사용률을 강제로 70% 이상 높이는 방법을 찾아서 확인한다.


stress 명령어를 활용하면 가능하다.

```
grep -c process /proc/cpuinfo // 사용가능한 CPU 수
stress -c <사용할 CPU 수> // cpu 부하 명령어
```

stress 명령어를 실행 후
top 명령어로 CPU 과부하가 걸렸는 지를 확인해 보았다.

![](https://postfiles.pstatic.net/MjAyMjA3MjBfMzQg/MDAxNjU4MjQ2NDk4OTYw.6PJqCpt7V8lhnL1fhSqdl51jbcdnRHl7AYvq_v36P10g.4HlgFemXyuMT5MIFg1_pvH9i4e9Rzw6QsYxMnC6M2lEg.PNG.kgu0515/image.png?type=w773)

CPU 칸을 보면 사용율이 99.7%인 것을 확인할 수 있다.


## 참고자료

[Shell Script 문법 정리](https://blog.d0ngd0nge.xyz/shell-script/)

[[ubuntu] SSH로 원격접속 하기](https://velog.io/@717lumos/Ubuntu-SSH%EB%A1%9C-%EC%9B%90%EA%B2%A9%EC%A0%91%EC%86%8D-%ED%95%98%EA%B8%B0)

[리눅스 - 우분투 VM ssh 서버, 로컬 PC에서 접속하기](https://jihyewoo.tistory.com/74)

[우분투 Node.js 설치및 npm 환경구축](https://velog.io/@ywoosang/Node.js-%EC%84%A4%EC%B9%98)

[How to get overall CPU usage (e.g. 57%) on Linux](https://stackoverflow.com/questions/9229333/how-to-get-overall-cpu-usage-e-g-57-on-linux)

[[unix] 쉘 스크립트에서 부동 소수점 숫자와 비교하는 방법](http://daplus.net/unix-%EC%89%98-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EB%B6%80%EB%8F%99-%EC%86%8C%EC%88%98%EC%A0%90-%EC%88%AB%EC%9E%90%EC%99%80-%EB%B9%84%EA%B5%90%ED%95%98%EB%8A%94-%EB%B0%A9/)

[crontab 사용법](https://cloud-oky.tistory.com/320)

[리눅스 stress 툴을 통해 CPU, Memory 스트레스 부하 주는 방법](https://klero.tistory.com/entry/%EB%A6%AC%EB%88%85%EC%8A%A4-stress-%ED%88%B4%EC%9D%84-%ED%86%B5%ED%95%B4-CPU-Memory-%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4-%EB%B6%80%ED%95%98-%EC%A3%BC%EB%8A%94-%EB%B0%A9%EB%B2%95)