import React from 'react'

function TodoDone({todoList, setTodoList}) {
    //삭제
    const clickRemoveBtn = (id) => {
      const removedList = todoList.filter(list => list.id !== id)
      setTodoList(removedList)
    }
    
    //되돌리기
    const clickIsDoneFalseBtn = (id) => {
      const isDoneFalseList = todoList.map(list => {
        if(list.id === id) {
          return list = {...list, isDone: false}
        } else {
          return list = {...list}
        }
      })
      setTodoList(isDoneFalseList)
    }

  return (
    <div>
        <h2>Done 🎉</h2>
        <div className='todos-wrap'>
        {
        todoList.map(list => {
          return (
            list.isDone === true && (
            <div className='todos-component' key={list.id}>
              <div>{list.title}</div>
              <div>{list.contents}</div>
              <div>
                <button onClick={() => clickRemoveBtn(list.id)}>삭제하기</button>
                <button onClick={() => clickIsDoneFalseBtn(list.id)}>되돌리기</button>
              </div>
            </div>
            )
          )
        })
        }
        </div>
    </div>
  )
}

export default TodoDone