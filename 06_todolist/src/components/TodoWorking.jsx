import React from 'react'
import { useState } from 'react'

function TodoWorking({todoList, setTodoList}) {

  const [isDone, setIsDone] = useState(false)


  //삭제
  const clickRemoveBtn = (id) => {
    const removedList = todoList.filter(list => list.id !== id)
    setTodoList(removedList)
  }

  //완료 idDone false -> true
  const clickIsDoneBtn = () => {
    // 선택한 key값을 가지고있는 list의 isDone을 true로 바꿔줘야함
    // true로 바뀐 컴포넌트를 제외한 나머지 컴포넌트만 출력
    // isDone이 true바뀐 컴포넌트를 TodoDone.js에 넘겨줘야함?
  }

  return (
    <div>
        <h2>Working 🎵</h2>
        <div className='todos-wrap'>
        {
        todoList.map(list => {
          return (
            <div className='todos-component' key={list.id}>
              <div>{list.title}</div>
              <div>{list.contents}</div>
              <div>
                <button onClick={() => clickRemoveBtn(list.id)}>삭제하기</button>
                <button onClick={() => clickIsDoneBtn(list.id, list.isDone)}>완료하기</button>
              </div>
            </div>
          )
        })
        }
        </div>

    </div>
  )
}
export default TodoWorking