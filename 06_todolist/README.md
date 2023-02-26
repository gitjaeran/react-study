# MY TODOLIST
## 1. 소개

**목적**

useState, props, map(), filter() 연습

<br/>

**기능**

- todolist 추가, 삭제, 완료 및 되돌리기
- todolist 추가시 Working에, 완료하기 클릭시 Done에 렌더링
- 되돌리기 클릭시 다시 Working에 렌더링

<br/>
<br/>
<br/>

## 2. Components

MY TODOLIST를 만들기 위해 분리한 Component 구조:

<br/>
<br/>

### `1) Header`

제목인 MY TODOLIST와 연습 대상인 React를 알 수 있도록 head 추가

<br/>

### `2) inputForm`

제목, 내용을 입력할 수 있는 input과 해당 값을 받아 새로운 Todolist를 추가할 수 있는 button

<br/>

### `3) TodoContainer`

Todolist의 상태에 따라 Working과 Done으로 나누어져 있는 공간을 감싸고 있는 Container

<br/>

### `4) TodoWorking`

list가 추가되면 자동으로 Working에 렌더링되며, Done에 있는 list의 '되돌리기' 버튼을 클릭해도 상태 관리에 따라 Working에 렌더링

<br/>

### `5) TodoDone`

Working에 있는 list의 '완료하기' 버튼 클릭시 Done으로 렌더링

<br/>
<br/>
<br/>

## 3. props
부모 컴포넌트: app.jsx<br/>
자식 컴포넌트: InputForm.jsx , TodoContainer.jsx

<br/>

부모 컴포넌트: TodoContainer.jsx<br/>
자식 컴포넌트: TodoWorking.jsx , TodoDone.jsx