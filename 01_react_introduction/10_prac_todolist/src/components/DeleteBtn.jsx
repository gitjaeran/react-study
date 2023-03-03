import React from 'react'

function DeleteBtn({todoList, setTodoList, id}) {
    const clickDeleteHandler = (id) => {
        setTodoList(todoList.filter(list => list.id !== id))
    }

  return (
        <button onClick={()=>clickDeleteHandler(id)}>삭제하기</button>
  )
}

export default DeleteBtn