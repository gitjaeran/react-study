import React from 'react'
import DeleteBtn from './DeleteBtn'
import DoneBtn from './DoneBtn'
import WorkingBtn from './WorkingBtn'

function TodoListContainer({todoList, setTodoList}) {
  return (
    <div>
        <h2>Working</h2>
        {todoList.map(list => {return( list.isDone === false &&
            (<div key={list.id}>
                <div>
                    <div>{list.title}</div>
                    <div>{list.contents}</div>
                </div>
                <div>
                    <DeleteBtn
                    id={list.id}
                    todoList={todoList}
                    setTodoList={setTodoList}/>
                    <WorkingBtn
                    id={list.id}
                    todoList={todoList}
                    setTodoList={setTodoList}/>
                </div>
            </div>)
            )
        })}

        <h2>Done</h2>
        {todoList.map(list => { return (list.isDone === true && (
            <div key={list.id}>
                <div>
                    <div>{list.title}</div>
                    <div>{list.contents}</div>
                </div>
                <div>
                    <DeleteBtn
                    id={list.id}
                    todoList={todoList}
                    setTodoList={setTodoList}/>
                    <DoneBtn
                    id={list.id}
                    todoList={todoList}
                    setTodoList={setTodoList}/>
                </div>
            </div>
        )
        )})}
    </div>
  )
}

export default TodoListContainer