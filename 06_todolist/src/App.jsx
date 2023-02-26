import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoContainer from './components/TodoContainer';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: "React 공부하기", contents: "React 입문 강의 듣기", isDone: false},
    {id: 2, title: "React 과제하기", contents: "React로 TodoList 만들기", isDone: true},
    {id: 3, title: "TodoList 다시만들기", contents: "다시 만들면서 Props, State 연습하기", isDone: false},
    {id: 4, title: "CSS grid", contents: "grid 넣어서 안 좁아지게 하기", isDone: false},
    {id: 5, title: "CSS text, btn", contents: "컴포넌트 안에 text, btn 바꾸기", isDone: false},
  ])

  return (
    <div className='app'>
      <Header/>
      <InputForm
      todoList={todos}
      setTodoList={setTodos}
      />
      <TodoContainer
      todoList={todos}
      setTodoList={setTodos}
      />
    </div>
  );
}

export default App;
