import React from 'react'
import DeleteList from './DeleteList'

function WorkingList({todoList, setTodoList, id}) {
    const clickDoneBtn = (id) => {
        const makeDoneList = todoList.map(list => {
            if(list.id === id) {
                return list = {...list, isDone: true}
            } else{
                return list = {...list}
            }
        })
        setTodoList(makeDoneList)
    }

  return (
    <div>
        <DeleteList
        todoList={todoList}
        setTodoList={setTodoList}
        id={id}/>
        <button onClick={() => clickDoneBtn(id)}>완료하기</button>
    </div>
  )
}

export default WorkingList