import React from "react"
import './App.css';

function App() {

  const testArr = ['감자', '고구마', '오이', '가지', '옥수수']
  return (
    <div className='app-style'>
      {
        /*
        map()을 사용하여 컴포넌트 반복출력하기 1
        -> 전체 컴포넌트 보여줄때
        */
        // testArr.map(function(item){
        //   return <div className='component-style'>{item}</div>
        // })
        //*map()을 사용하여 컴포넌트 반복출력하기 2
        // testArr.map((item) => {
        //   return <div className='component-style'>{item}</div>
        // })

        /*
        filter()를 사용하여 특정 컴포넌트만 반복출력하기
        -> 특정 컴포넌트 제외하고 남은것만 보여줄때
        */
        testArr.filter(function (item) {
          return item != '오이';
        })
        .map((item) => {
          return <div className='component-style'>{item}</div>
        })
      }
    </div>
  );
}

export default App;