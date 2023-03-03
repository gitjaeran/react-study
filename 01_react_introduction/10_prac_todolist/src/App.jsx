import { useState } from 'react';
import AddInput from './components/AddInput';
import Header from './components/Header';
import TodolistContainer from './components/TodolistContainer';

function App() {
  const [todoList, setTodoList] = useState([
    {id:1, title:"title1", contents:"contents1", isDone:false},
    {id:2, title:"title2", contents:"contents2", isDone:false},
    {id:3, title:"title3", contents:"contents3", isDone:true},
  ])

  return (
    <div>
      <Header/>
      <AddInput
      todoList={todoList}
      setTodoList={setTodoList}/>
      <TodolistContainer
      todoList={todoList}
      setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
