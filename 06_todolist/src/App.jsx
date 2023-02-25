import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoContainer from './components/TodoContainer';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: "React 공부하기", contents: "React 입문 강의 듣기", isDone: false},
    {id: 2, title: "React 과제하기", contents: "React로 TodoList 만들기", isDone: false},
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
