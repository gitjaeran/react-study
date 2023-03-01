import React from 'react'

function ClickWorkingBtn({todoList, setTodoList, id}) {
    const clickWorkingHandler = (id) => {
        setTodoList(todoList.map(list => {
            if(list.id === id) {
                return list = {...list, isDone:false}
            } else {
                return list
            }
        }))
    }

  return (
    <><button onClick={()=>clickWorkingHandler(id)}>되돌리기</button></>
  )
}

export default ClickWorkingBtn