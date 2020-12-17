!! 최용석은 보시게 !!

# 구동방법
- linux
    1. linux에서  nodejs 설치
    2. start.sh로 스크립트로 구동시 => chmod 755/777 권한 부여 후 스크립트 동작, nohup 으로 동작
    3. start.sh 스크립트 미사용시 => node server.js 로 구동 

- window
    1. window에 nodejs 설치
    2. start.sh 로 구동 불가 함으로 powershell 이나 gitbash 로 터미널로 node server.js 로 구동

# config 수정
    - config/config.js 에서 ip와 port 지정
    
# 파일 업로드
    - 귀찮아서 안만듬
    - 파일은 항상 fileRepository 디렉토리 안에 넣어야함

# 파일 다운로드 
    - config로 지정한 웹으로(ex.localhost:3100) 접근 후 파일 다운로드

# 웹 화면 변경 및 파일 저장 방법
    - views/index.ejs 의 주석부분 참조
    - 파일명과 href 에 지정된 경로, 파일명이 항상 fileRepository 안에 항상 일치해야함


수고링 맛있는거나 사주삼