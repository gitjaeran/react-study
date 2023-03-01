import React from 'react'

function DeleteBtn({todoList, setTodoList, id}) {
    const clickDelBtn = (id) => {
        const unDelList = todoList.filter(list => list.id !== id)
        setTodoList(unDelList)
    }

  return (
    <>
        <button onClick={()=>clickDelBtn(id)}>삭제하기</button>
    </>
  )
}

export default DeleteBtn