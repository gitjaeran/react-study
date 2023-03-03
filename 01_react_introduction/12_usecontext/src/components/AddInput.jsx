import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const AddInput = ({todoList, setTodoList}) => {
    // const todoListContext = useContext(AppContext);

    
    const [contents, setContents] = useState('')
    
    const changeContents = (event) => {
        setContents(event.target.value)
    }

    const clickAddBtn = () => {
        const newTodoList = {
            id: new Date().getTime().toString(16),
            contents,
            isDone: false,
        }
        setContents('')
        setTodoList([...todoList, newTodoList])
        // console.log(todoList)
    }

    return (
        <div>
            <div>
                <input
                value={contents}
                onChange={(event)=>changeContents(event)}/>
                <button onClick={clickAddBtn}>추가하기</button>
            </div>
        </div>
    )
}

export default AddInput