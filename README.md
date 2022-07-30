# My Todo List

### TECH :::
#### REACT JS, Redux, Router, Styled-Components, Yarn
<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/Create React App-09D3AC?style=for-the-badge&logo=Create React App&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">
  <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</p>

-----

### 완료 화면
<img src="https://github.com/YooJinRa/reactjs-my-todo-list/blob/main/image_main.png" alt="완료 페이지" width="500">
<img src="https://github.com/YooJinRa/reactjs-my-todo-list/blob/main/image_detail_1.png" alt="완료 페이지" width="500">
<img src="https://github.com/YooJinRa/reactjs-my-todo-list/blob/main/image_detail_2.png" alt="완료 페이지" width="500">

-----

### 기술 구현 특징
- ReactJS Redux 사용하여 전역 스토어 데이터 관리
- ReactJS Router 사용하여 상세 페이지 구현
- nanoId 사용하여 랜덤 문자열(8자리) 아이디 적용
- Todolist 추가, 완료, 취소, 삭제, 상세페이지 구현

### 컨포넌트 구조
#### src/
- index.js (+ globalStyles)____________// 전역 스타일 적용(globalStyles)
- App.js
- shared/route_________________________// 페이지별 url 관리
- redux/config/congigStore_____________//
- redux/modules/todos__________________// 전역 데이터 관리
- pages/TodoList (+ styles)____________// Todo List 입력, 완료, 취소, 삭제 기능 가능
- pages/TodoDetail (+ styles)________// 상세 Todo 확인 + 목록으로(뒤로가기) 버튼 구현
- components/layout/Layout (+ styles)__// 페이지별 컨포넌트 구성
- components/header/Header (+ styles)
- components/form/Form (+ styles)____// 타이틀, 텍스트 입력 및 추가하기 구현
- components/list/List (+ styles)____// Todo 상태값 변경 가능(완료, 취소, 삭제 기능 및 상세 페이지 이동)
- components/todo/Todo (+ styles)__// 각각의 Todo 내용 확인
- components/detail/Detail (+ styles)// 상세페이지 Todo 내용 확인

#### 컨포넌트 별 기능 구현 내용 및 이유
> - Form에서 입력한 Title 및 Text 값은 useState 활요하여 입력값 저장 ::: 데이터 입력하는 이벤트는 Form 컨포넌트에서만 진행하면 되서 useState 활용
> - 추가하기 버튼 클릭 시, 입력한 Title, Text 값과 함께 ID값, isDone(완료 여부) 내용 Redux 활용한 전역에 저장 ::: 추가하기, 삭제하기, 완료하기, 취소하기 기능은 전역 스토어에서 관리
> - List에서 전역으로 저장된 데이터값 불러오기 및 isDone(완료 여부)에 따라 Working,, Done에 데이터 불러오기(map 메서드 이용/Todo 컨포넌트 활용)
> - List에서 취소하기, 완료하기, 삭제하기 버튼이벤트 실행 -> 전역에서 함수 동작하여 필요한 데이터만 List에 전달
> - Router 활용하여 상세 페이지 연동(useNavigate, useParams)





