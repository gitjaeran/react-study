import React from 'react'
import { useState } from 'react'

function TodoWorking({todoList, setTodoList}) {

  //삭제
  const clickRemoveBtn = (id) => {
    // [
    //   {id: 1, title: "React 공부하기", contents: "React 입문 강의 듣기", isDone: false},
    //   {id: 2, title: "React 과제하기", contents: "React로 TodoList 만들기", isDone: false},
    // ]
    const removedList = todoList.filter(list => list.id !== id)
    setTodoList(removedList)
  }

  //완료 isDone false -> true
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
          // list.isDone === false
           return (
            list.isDone === false && (
              <div className='todos-component' key={list.id}>
                <div>{list.title}</div>
                <div>{list.contents}</div>
                <div>
                  <button onClick={() => clickRemoveBtn(list.id)}>삭제하기</button>
                  <button onClick={() => clickIsDoneTrueBtn(list.id)}>완료하기</button>
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