import React from 'react'

function ClickDoneBtn({todoList, setTodoList, id}) {
    const clickDoneHandler = (id) => {
        setTodoList(todoList.map(list => {
            if(list.id === id){
                return list = {...list, isDone: true}
            } else {
                return list
            }
        }))
    }
  return (
    <><button onClick={()=>clickDoneHandler(id)}>완료하기</button></>
  )
}

export default ClickDoneBtn