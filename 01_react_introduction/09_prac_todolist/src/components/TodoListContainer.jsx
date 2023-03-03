import React from 'react'
import ClickDeleteBtn from './ClickDeleteBtn'
import ClickDoneBtn from './ClickDoneBtn'
import ClickWorkingBtn from './ClickWorkingBtn'

function TodoListContainer({todoList, setTodoList}) {
  return (
    <div>
        <div>
            <h2>Working</h2>
            {todoList.map(list=> { return (list.isDone === false &&
            (<div key={list.id}>
                <div>
                    <div>{list.title}</div>
                    <div>{list.contents}</div>
                </div>
                <div>
                    <ClickDeleteBtn
                    todoList={todoList}
                    setTodoList={setTodoList}
                    id={list.id}/>
                    <ClickDoneBtn
                    todoList={todoList}
                    setTodoList={setTodoList}
                    id={list.id}/>
                </div>
            </div>)
            )})}

            
        </div>

        <div>
            <h2>Done</h2>
            {todoList.map(list=> { return(list.isDone === true &&
            (<div key={list.id}>
                <div>
                    <div>{list.title}</div>
                    <div>{list.contents}</div>
                </div>
                <div>
                    <ClickDeleteBtn
                    todoList={todoList}
                    setTodoList={setTodoList}
                    id={list.id}/>
                    <ClickWorkingBtn
                    todoList={todoList}
                    setTodoList={setTodoList}
                    id={list.id}/>
                </div>
            </div>))})}
           
        </div>
    </div>
  )
}

export default TodoListContainer