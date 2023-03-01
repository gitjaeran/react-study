import React from 'react'

function WorkingBtn({todoList, setTodoList, id}) {
  const clickIsTrueBtn = (id) => {
    const newTrueList = todoList.map(list => {
      if(list.id === id){
        return list = {...list, isDone:true}
      } else{
        return list
      }
    })
    setTodoList(newTrueList)
  }

  return (
    <>
      <button onClick={()=>clickIsTrueBtn(id)}>완료하기</button>
    </>
  )
}

export default WorkingBtn