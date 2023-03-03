import React, { useState } from 'react'

function AddInput({todoList, setTodoList}) {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const changeTitle = (event) => {
        const newTitle = event.target.value
        setTitle(newTitle)
    }

    const changeContents = (event) => {
        const newContents = event.target.value
        setContents(newContents)
    }

    const clickAddBtn = () => {
        const newTodoList = {
            id: Date.now(),
            title,
            contents,
            isDone: false
        }
        setTitle('')
        setContents('')
        setTodoList([...todoList, newTodoList])
    }

  return (
    <div>
        <div>
            <label>제목</label>
            <input
            onChange={(event)=>changeTitle(event)}
            value={title}/>
            <label>내용</label>
            <input
            onChange={(event)=>changeContents(event)}
            value={contents}/>
        </div>
        <div>
            <button onClick={clickAddBtn}>추가하기</button>
        </div>
    </div>
  )
}

export default AddInput