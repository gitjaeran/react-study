import React from 'react'
import DoneList from './DoneList'
import WorkingList from './WorkingList'

function TodoContainer({todoList, setTodoList}) {
  return (
    <div>
        <h2>Working 🎵</h2>
            {todoList.map(list => {
                return (
                    list.isDone === false && (
                    <div key={list.id}>
                        <div>
                            <div>{list.title}</div>
                            <div>{list.contents}</div>
                        </div>
                    
                        <WorkingList
                        id={list.id}
                        todoList={todoList}
                        setTodoList={setTodoList}/>
                    </div>))})}

        <h2>Done 🎉</h2>
            {todoList.map(list => {
                return (
                    list.isDone === true &&
                    <div key={list.id}>
                        <div>
                            <div>{list.title}</div>
                            <div>{list.contents}</div>
                        </div>
                        <DoneList
                        id={list.id}
                        todoList={todoList}
                        setTodoList={setTodoList}/>
                    </div>)})}

    </div>
  )
}

export default TodoContainer