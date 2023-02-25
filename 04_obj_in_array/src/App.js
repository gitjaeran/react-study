import React from "react"
import './App.css';

function App() {
  const users = [
    {id: 1, age: 30, name: "송중기"},
    {id: 2, age: 24, name: "송강"},
    {id: 3, age: 21, name: "김유정"},
    {id: 4, age: 29, name: "구교환"},
  ]
  return (
    <div className='app-style'>
      {/*map()을 사용하여 동일한 컴포넌트 출력하기
      -> 배열 안에 객체가 있는 경우
        {users.map(function (item) {
        return (
          <div className='component-style'>
            {item.age} - {item.name}
          </div>
        )
      })} */}

      {
        //map() 쓸때 꼭 key 붙여주기
        users.map(item => {
          return <div key={item.id} className='component-style'>{item.age} - {item.name}</div>
        })
      }
    </div>
  );
}

export default App;
