import { useState } from 'react';
import './App.css';
import AddInput from './components/AddInput';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    {id:1, contents:'이 Todo List는 React 입문 주차 마지막 날 퀴즈입니다!', isDone: false},
    {id:2, contents:'내용 입력하고 추가하기 버튼을 누르면 추가 된게 바로 렌더링 됩니다.', isDone: false},
    {id:3, contents:'오류는 없을거에요......아마도요!', isDone: false},
    {id:4, contents:'todolist box CSS도 예쁜 색으로 지정해주었어요. CSS 어려워요.', isDone: false},
  ])
  return (
    <div className='app-container'>
      <AddInput
      todoList={todoList}
      setTodoList={setTodoList}/>
      <TodoList
      todoList={todoList}
      setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
