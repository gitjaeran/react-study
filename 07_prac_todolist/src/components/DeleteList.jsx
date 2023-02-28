import React from 'react'

function DeleteList({todoList, setTodoList, id}) {
    const clickDeleteBtn = (id) => {
        const deleteList = todoList.filter(list => list.id !== id)
        setTodoList(deleteList)
    }
  return (
    <>
        <button onClick={() => clickDeleteBtn(id)}>삭제하기</button>
    </>
  )
}

export default DeleteList