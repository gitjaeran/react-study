import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log(`hello useEffect! : ${value}`)

    //clean up
    //return문을 함수 형태로 작성하면 contents가 사라질때(컴포넌트가 죽을 때) 동작하게 됨
    return () => {
      console.log('나 사라져요!')
    }
  }, [value]) //여기서 []가 의존성 배열임

  return <div>
    <input
    type='text'
    value={value}
    onChange={(event)=>{
      setValue(event.target.value)
    }}/>
  </div>
}

export default App;

/*
1. input에 값 입력
2. value, 즉 state가 변경됨
3. state가 바뀌었기 때문에 app 컴포넌트 리렌더링
4. 리렌더링하면 useEffect 실행
5. 위의 내용 반복
  => input 태그에 값을 입력할 때마다 렌더링이 다시 되고 있다.
하지만 내가 원하는 건 app이 로딩 됐을때만 실행시키고 싶음
이를위해 '의존성 배열=Dependency Array'이 필요함


**'의존성 배열=Dependency Array'
이 배열에 값을 넣으면, 그 값이 바뀔 때만 useEffect를 실행한다.

  useEffect(() => {
    console.log(`hello useEffect! : ${value}`)
  }, [value]) //여기서 []가 의존성 배열임.
*/