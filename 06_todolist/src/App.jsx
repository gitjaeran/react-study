import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoContainer from './components/TodoContainer';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: "React 공부하기", contents: "React 입문 강의 듣기", isDone: true},
    {id: 2, title: "React 과제하기", contents: "React로 TodoList 만들기", isDone: true},
    {id: 3, title: "TodoList 다시만들기", contents: "다시 만들면서 Props, State 연습하기", isDone: false},
    {id: 4, title: "CSS grid", contents: "grid 넣어서 안 좁아지게 하기", isDone: true},
    {id: 5, title: "test", contents: "grid test component", isDone: true},
    {id: 5, title: "test", contents: "grid test component", isDone: false},
    {id: 6, title: "test", contents: "grid test component", isDone: false},
    {id: 7, title: "test", contents: "grid test component", isDone: false},
    {id: 8, title: "test", contents: "grid test component", isDone: false},
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
