import React from 'react'
import DeleteList from './DeleteList'

function DoneList({todoList, setTodoList, id}) {
    const clickRollbackBtn = (id) => {
        const rollBackList = todoList.map(list => {
            if(list.id === id) {
                return list = {...list, isDone: false}
            } else {
                return list = {...list}
            }
        })
        setTodoList(rollBackList)
    }

  return (
    <div>
        <DeleteList
        todoList={todoList}
        setTodoList={setTodoList}
        id={id}/>
        <button onClick={() => clickRollbackBtn(id)}>되돌리기</button>
    </div>
  )
}

export default DoneList