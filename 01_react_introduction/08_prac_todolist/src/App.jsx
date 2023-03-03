import { useState } from 'react';
import './App.css';
import AddInput from './components/AddInput';
import Header from './components/Header';
import TodoListContainer from './components/TodoListContainer';

function App() {
  const [todoList, setTodoList] = useState([
    {id:1, title: 'Title 1', contents: 'Contents 1', isDone: false},
    {id:2, title: 'Title 2', contents: 'Contents 2', isDone: true},
  ])

  return (
    <div>
      <Header/>
      <AddInput
      todoList={todoList}
      setTodoList={setTodoList}/>
      <TodoListContainer
      todoList={todoList}
      setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
