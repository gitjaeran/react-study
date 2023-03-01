import React from 'react'
import { useState } from 'react'

function AddInput({todoList, setTodoList}) {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const changeTitleInput = (event) => {
        setTitle(event.target.value)
    }
    const changeContentsInput = (event) => {
        setContents(event.target.value)
    }
    const clickAddBtn = () => {
        const newTodoList = {
            id: new Date().getTime().toString(16),
            title,
            contents,
            isDone: false,
        }
        setTodoList([...todoList, newTodoList])
        setTitle('')
        setContents('')
    }
    
  return (
    <div>
        <div>
            <label>제목</label>
            <input
            onChange={(event)=>changeTitleInput(event)}
            value={title}/>
            <label>내용</label>
            <input
            onChange={(event)=>changeContentsInput(event)}
            value={contents}/>
        </div>
        <div>
            <button onClick={clickAddBtn}>추가하기</button>
        </div>
    </div>
  )
}

export default AddInput