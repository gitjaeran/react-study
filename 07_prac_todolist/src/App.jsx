import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputAdd from './components/InputAdd';
import TodoContainer from './components/TodoContainer';

function App() {
const [todoList, setTodoList] = useState([
  {id: 1, title: "강의 듣기", contents: "React 입문 강의 듣기", isDone: false},
  {id: 2, title: "React 과제하기", contents: "React로 My TodoList 만들기", isDone: true},
])

  return (
    <div>
      <Header/>
      <InputAdd
      todoList={todoList}
      setTodoList={setTodoList}/>
      <TodoContainer
      todoList={todoList}
      setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
