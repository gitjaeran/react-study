import React, { useState } from "react"
import './App.css';
import Button from './components/Button';
import User from './components/User';

function App() {
  // const users = [
  //   {id: 1, age: 30, name: "송중기"},
  //   {id: 2, age: 24, name: "송강"},
  //   {id: 3, age: 21, name: "김유정"},
  //   {id: 4, age: 29, name: "구교환"},
  // ]

  //위의 배열을 useState 안에 초기값으로 설정하여 상태관리 시작
  const [users, setUsers] = useState([
      {id: 1, age: 30, name: "송중기"},
      {id: 2, age: 24, name: "송강"},
      {id: 3, age: 21, name: "김유정"},
      {id: 4, age: 29, name: "구교환"},
    ])

    //users를 추가하고 삭제하기 위한 작업
    //-> name과 age를 입력할 수 있는 input 만들기
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const nameChangeHandler = (event)=>{
      setName(event.target.value)
    }

    const ageChangeHandler = (event)=>{
      setAge(event.target.value)
    }

    //버튼 클릭하면 input에 입력된 state값 출력하기 = 추가
    const clickAddButtonHandler = () => {
      //1. 새로운 형태의 객체를 만든다
      const newUser = {
        id: users.length + 1,
        age, //state의 age
        name, //state의 name
      }
      //2. 객체를 배열에 더한다.
      setUsers([...users, newUser])
    }

    //버튼 클릭하면 해당 버튼이 있는 객체 제외한 나머지 출력하기 = 삭제
    const clickRemoveButtonHandler = (id) => {
      //filter()를 사용하여 key=id가 아닌 값만 가져와서 할당함
      const newUsers = users.filter(user => user.id !== id)
      // const newUsers = users.filter(function (user) {
      //   return user.id !== id;
      // })

      //setUsers에 newUsers 넣어서 상태 관리
      setUsers(newUsers)
    }


  return (
    <div>

      <div>
        이름 :&nbsp;
        <input 
        value={name}
        onChange={(event)=>nameChangeHandler(event)}/>
        <br/>

        나이 :&nbsp;
        <input 
        value={age}
        onChange={ageChangeHandler}/>
        <br/>
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
      </div>

      <div className='app-style'>
        {
          users.map(item => {
            return (
              <User
              key={item.id}
              item={item}
              removeFunction={clickRemoveButtonHandler}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;