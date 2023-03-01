import React from 'react'
import { useState } from 'react'

function AddInput({todoList, setTodoList}) {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }

    const changeContents = (event) => {
        setContents(event.target.value)
    }

    const clickAddBtn = ()  => {
        const newTodoList = {
            id: new Date().getTime().toString(16),
            title,
            contents,
            isDone: false,
        }
        setTitle('')
        setContents('')
        setTodoList([...todoList, newTodoList])

    }

  return (
    <div>
        <div>
            <div>
                <label>제목</label>
                <input
                value={title}
                onChange={(event)=>changeTitle(event)}/>
            </div>
            <div>
                <label>내용</label>
                <input
                value={contents}
                onChange={(event)=>changeContents(event)}/>
            </div>
        </div>

        <div>
            <button onClick={clickAddBtn}>추가하기</button>
        </div>
    </div>
  )
}

export default AddInput