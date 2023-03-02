import React from 'react'

function TodoList({todoList}) {
  return (
    <div>
        <h2>Todo List</h2>
        <div className='todoList-container'>
        {todoList.map(list => { return (list.isDone === false && 
            (<div key={list.id} className='list-box'>
                <div className='list-component'>{list.contents}</div>
            </div>)
        )})}
        </div>
    </div>
  )
}

export default TodoList