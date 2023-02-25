import React from 'react'

function TodoDone({todoList, setTodoList}) {
    //삭제
    const clickRemoveBtn = (id) => {
      const removedList = todoList.filter(list => list.id !== id)
      setTodoList(removedList)
    }
    
  return (
    <div>
        <h2>Done 🎉</h2>
        <div className='todos-wrap'>
        {
        todoList.map(list => {
          return (
            <div className='todos-component' key={list.id}>
              <div>{list.title}</div>
              <div>{list.contents}</div>
              <div>
                <button onClick={() => clickRemoveBtn(list.id)}>삭제하기</button>
                <button>되돌리기</button>
              </div>
            </div>
          )
        })
        }
        </div>
    </div>
  )
}

export default TodoDone