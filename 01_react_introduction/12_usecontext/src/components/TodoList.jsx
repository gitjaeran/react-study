import React, { useContext } from 'react'
import { AppContext } from '../App';

const TodoList = () => {
    const todoListContext = useContext(AppContext);
console.log(todoListContext)
    return (
        <div>
            <h2>Todo List</h2>
            <div className='todoList-container'>
            {todoListContext.map(list => { return (list.isDone === false && 
                (<div key={list.id} className='list-box'>
                    <div className='list-component'>{list.contents}</div>
                </div>)
            )})}
            </div>
        </div>
      )
}

export default TodoList