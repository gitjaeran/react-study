import { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import AddInput from './components/AddInput';
import TodoList from './components/TodoList';

export const AppContext = createContext();

const App = () => {
  
  const todoListContext = [
    {id:1, contents:'이 Todo List는 React 입문 주차 마지막 날 퀴즈입니다!', isDone: false},
    {id:2, contents:'내용 입력하고 추가하기 버튼을 누르면 추가 된게 바로 렌더링 됩니다.', isDone: false},
    {id:3, contents:'오류는 없을거에요......아마도요!', isDone: false},
    {id:4, contents:'todolist box CSS도 예쁜 색으로 지정해주었어요. CSS 어려워요.', isDone: false},
  ]
  const [todoList, setTodoList] = useState(todoListContext)

  return (
    <div className='app-container'>
      <AppContext.Provider value={todoList}>
          <AddInput todoList={todoList} setTodoList={setTodoList}/>
          <TodoList/>
      </AppContext.Provider>
    </div>
  );
}

export default App;

