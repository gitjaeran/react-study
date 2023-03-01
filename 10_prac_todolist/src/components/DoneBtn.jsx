import React from 'react'

function DoneBtn({todoList, setTodoList, id}) {
    const clickIsDoneTrueHandler = (id) => {
        setTodoList(todoList.map(list => {
            if(list.id === id) {
                return list = {...list, isDone:true}
            } else{
                return list
            }
        }))
    }
  return (
    <>
        <button onClick={()=>clickIsDoneTrueHandler(id)}>완료하기</button>
    </>
  )
}

export default DoneBtn