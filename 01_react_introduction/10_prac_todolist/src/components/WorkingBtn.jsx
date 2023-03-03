import React from 'react'

function WorkingBtn({todoList, setTodoList, id}) {
    const clickIsDoneFalseHandler = (id) => {
        setTodoList(todoList.map(list => {
            if(list.id === id) {
                return list = {...list, isDone: false}
            } else {
                return list
            }
        }))
    }
  return (
    <>
        <button onClick={()=>clickIsDoneFalseHandler(id)}>되돌리기</button>
    </>
  )
}

export default WorkingBtn