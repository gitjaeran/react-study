import React from 'react'

function DoneBtn({todoList, setTodoList, id}) {
  const clickIsFalseBtn = (id) => {
    const newFalseList = todoList.map(list => {
      if(list.id === id){
        return list = {...list, isDone:false}
      }else{
        return list
      }
    })
    setTodoList(newFalseList)
  }
  return (
    <>
      <button onClick={()=>clickIsFalseBtn(id)}>되돌리기</button>
    </>
  )
}

export default DoneBtn