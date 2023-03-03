import React, { useState } from 'react'

function InputAdd({todoList, setTodoList}) {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }

    const inputContents = (event) => {
        setContents(event.target.value)
    }

    const clickAddBtn = (event) => {
        let newTodoList = {
            id: new Date().getTime().toString(16),
            title,
            contents ,
            isDone: false,
        };
        setTitle('')
        setContents('')
        setTodoList([...todoList, newTodoList])
    }

  return (
    <div>
        <div>
            <label>제목</label>
            <input 
            onChange={(event)=>inputTitle(event)}
            value={title}/>

            <label>내용</label>
            <input 
            onChange={(event)=>inputContents(event)}
            value={contents}/>
        </div>
        <div>
            <button onClick={clickAddBtn}>추가하기</button>
        </div>
    </div>
  )
}

export default InputAdd