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
              <div className='list-box'>
                <div className='list-box-title'>{list.title}</div>
                <div>{list.contents}</div>
              </div>
              <div className='btn-box'>
                <button onClick={() => clickRemoveBtn(list.id)} className="delete-btn">삭제하기</button>
                <button onClick={() => clickIsDoneFalseBtn(list.id)} className="isFalse-btn">되돌리기</button>
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