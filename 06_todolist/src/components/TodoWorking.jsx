import React from 'react'

function TodoWorking({todoList, setTodoList}) {
  //삭제
  const clickRemoveBtn = (id) => {
    const removedList = todoList.filter(list => list.id !== id)
    setTodoList(removedList)
  }

//  완료 isDone false -> true
  const clickIsDoneTrueBtn = (id) => {
    const isDoneTrueList = todoList.map(list => {
      if(list.id === id) {
        return list = {...list, isDone: true}
      } 
      else {
        return list = {...list}
      }
    })
    // 선택한 key값을 가지고있는 list의 isDone을 true로 바꿔줘야함 o
    // true로 바뀐 컴포넌트를 제외한 나머지 컴포넌트만 출력 -> setTodoList()
    // isDone이 true로 바뀐 컴포넌트를 TodoDone.js에 넘겨줘야함? no! state관리되는중
    setTodoList(isDoneTrueList)
  }

  return (
    <div>
        <h2>Working 🎵</h2>
        <div className='todos-wrap'>
        {
        todoList.map(list => {
          return (
            list.isDone === false && (
              <div className='todos-component' key={list.id}>
                <div className='list-box'>
                  <div className='list-box-title'>{list.title}</div>
                  <div>{list.contents}</div>
                </div>
                <div className='btn-box'>
                  <button onClick={() => clickRemoveBtn(list.id)} className="delete-btn">삭제하기</button>
                  <button onClick={() => clickIsDoneTrueBtn(list.id)} className="isTrue-btn">완료하기</button>
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
export default TodoWorking