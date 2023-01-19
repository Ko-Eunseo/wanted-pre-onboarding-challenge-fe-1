# wanted-pre-onboarding-frontend
원티드 프리온보딩 사전과제 Todo

# 구현 화면
## Login
> https://user-images.githubusercontent.com/85021536/210786405-0b094950-2c2d-4cd8-9614-566715986e82.mov

## Logout
> https://user-images.githubusercontent.com/85021536/213477970-b768c502-d14f-4f28-b41e-f9f9ea467826.mov

## Signup
> https://user-images.githubusercontent.com/85021536/210797225-670cea72-1ea8-4214-aab2-34cd5423a804.mov

## Todo
### Read
> https://user-images.githubusercontent.com/85021536/210788180-acea1699-d188-459f-826d-281c1a2290d5.mov

### Update
> https://user-images.githubusercontent.com/85021536/210788343-628898cd-6040-4783-897d-bd1cbc6aa449.mov

### Create
> https://user-images.githubusercontent.com/85021536/210788557-6dd93484-312e-428a-ac2f-c12355a1af5e.mov

### Delete
> https://user-images.githubusercontent.com/85021536/213477859-9c60308a-8e8d-4019-8613-3a321c96d882.mov

## Installation
> 백엔드 서버를 구동하기 위해 api를 추가로 설치해야합니다.
[서버 api url](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)
```
> git clone https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api
  > cd wanted-pre-onboarding-challenge-fe-1-api
  > npm install
  > npm start # http://localhost:8080
```
> 프론트 코드 실행
```
> git clone https://github.com/Ko-Eunseo/wanted-pre-onboarding-challenge-fe-1
  > cd wanted-pre-onboarding-challenge-fe-1
  > npm install
  > npm start # http://localhost:3000
```

## Environment
.env 파일에 아래 코드 추가
```
REACT_APP_SERVER_URL = 'http://localhost:8080'
```
## 구현 요구사항 목록
### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [ ] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [ ] 이메일 조건 : 최소 `@`, `.` 포함
  - [ ] 비밀번호 조건 : 8자 이상 입력
  - [ ] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [ ] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [ ] 목록 / 상세 영역으로 나누어 구현해주세요
  - [ ] Todo 목록을 볼 수 있습니다.
  - [ ] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [ ] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [ ] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [ ] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [ ] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 사용한 프레임워크 및 라이브러리
```
react
styled-components
react-router-dom
axios
react query
typescript
```

## 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂api
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┣ 📂TodoItem
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┣ 📂iconButton
 ┃ ┃ ┗ 📂textaea
 ┃ ┣ 📂hooks
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┣ 📂signup
 ┃ ┃ ┗ 📂todo
 ┃ ┃ ┃ ┣ 📂editMode
 ┃ ┃ ┃ ┣ 📂todoCreate
 ┃ ┃ ┃ ┣ 📂todoDetail
 ┃ ┃ ┃ ┣ 📂todoHome
 ┃ ┃ ┃ ┗ 📂todoList
 ```
 기능에 따라 api/common/hooks/pages로 구분
 
## 과제 진행 시 주안점
요구사항에 맞추어 개발하는 데 주력
공통 스타일 컴포넌트를 만들어 재사용성과 효율성을 높임

### Refactor
> 1. 타입스크립트 적용
벨로그: https://velog.io/@koyk0408/series/typescript
> 2. 스타일과 로직 분리
벨로그: https://velog.io/@koyk0408/react-%EC%8A%A4%ED%83%80%EC%9D%BC%EA%B3%BC-%EB%A1%9C%EC%A7%81-%EB%B6%84%EB%A6%AC%ED%95%98%EA%B8%B0
> 3. tab focusing
벨로그: https://velog.io/@koyk0408/React-tab-focusing
> 4. react query 적용 벨로그: [todo list](https://velog.io/@koyk0408/React-useState-useEffect-%EB%8C%80%EC%8B%A0-useQuery-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0) | [todo CRUD](https://velog.io/@koyk0408/React-useState-useEffect-%EB%8C%80%EC%8B%A0-useMutation-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-Create-Update-Delete-d26cs7ke)

