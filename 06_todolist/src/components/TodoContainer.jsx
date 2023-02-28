import React from 'react'
import TodoDone from './TodoDone'
import TodoWorking from './TodoWorking'

function TodoContainer({todoList, setTodoList}) {

  return (
    <div className='todo-container'>
        <TodoWorking
        todoList={todoList}
        setTodoList={setTodoList}
        />
        <TodoDone
        todoList={todoList}
        setTodoList={setTodoList}/>
    </div>
  )
}

export default TodoContainer