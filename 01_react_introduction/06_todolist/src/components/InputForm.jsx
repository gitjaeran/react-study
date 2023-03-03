import React from 'react'
import { useState } from 'react'

const InputForm = ({todoList, setTodoList}) => {

  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const titleChange = (event) => {
    setTitle(event.target.value)
  }

  const contentsChange = (event) => {
    setContents(event.target.value)
  }

  const clickAddBtn = (event) => {
    let newTodo = {};
    if(!title || !contents) {
      alert('제목과 내용을 입력해주세요!')
    } else {
      newTodo = {
      id: new Date().getTime().toString(16),
      title,
      contents,
      isDone: false,
    }
    setTitle('')
    setContents('')
  }

    setTodoList([...todoList, newTodo])
    console.log(newTodo.id)
  }

  return (
    <div className='input-form'>
        <div className='input-todo'>
            <label htmlFor="todo-title">제목</label>
            <input
            value={title}
            onChange={(event)=>titleChange(event)}/>

            <label htmlFor="todo-content">내용</label>
            <input
            value={contents}
            onChange={(event)=>contentsChange(event)}/>
        </div>
        <button className='add-btn' onClick={clickAddBtn}>추가하기</button>
    </div>
  )
}

export default InputForm