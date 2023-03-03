import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoContainer from './components/TodoContainer';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: "React 강의 듣기", contents: "React 입문 강의 듣기", isDone: true},
    {id: 2, title: "React 과제하기", contents: "React로 My TodoList 만들기", isDone: true},
    {id: 3, title: "TodoList 다시 만들기", contents: "다시 만들면서 Props, State 연습하기", isDone: false},
    {id: 4, title: "input form", contents: "빈값이면 알림 띄우고 추가 안 되게 하기, 추가하면 input 초기화하기", isDone: true},
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
