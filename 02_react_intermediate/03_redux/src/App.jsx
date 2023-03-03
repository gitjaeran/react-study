import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { plusOne, minusOne } from './redux/modules/counter'
import { plusN, minusN } from './redux/modules/counter'

function App() {
  const [number, setNumber] = useState(0)

  //여기에서 store에 접근하여 counter의 l값을 읽어오기
  //**useSelector
  const counter = useSelector((state) => { //state는 store안에 있는 중앙 저장소 전체를 말함
    // return state.counter;
    return state.counter;
  })


  // //**useEffect: 렌더링시 작동하는 hook
  // useEffect(()=>{
  //   console.log(number)
  // }, [number]) //number라는 state가 변경될때마다 실행

  //**dispatch 가져오기
  const dispatch = useDispatch();

  console.log(counter.number)

  return (
    <>
      <div>현재 카운트: {counter.number}</div>
      <div>
        <input
        type='number'
        value={number}
        onChange={(event)=>{
          // setNumber(+event.target.value) 앞에 +를 붙여주면 자동으로 형변환 해줌
          const {value} = event.target; //구조분해할당
          setNumber(+value)
        }}
        />
      </div>

      <button onClick={()=> { //+1 해주는 로직
        // dispatch(plusOne())
        dispatch(plusN(number))
      }}>더하기</button>

      <button onClick={()=> { //-1 해주는 로직
        // dispatch(minusOne())
        dispatch(minusN(number))
      }}>빼기</button>
    </>
  );
}

export default App;
