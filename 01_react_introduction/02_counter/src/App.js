import './App.css';
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const PlusBtnClickHandler = () => {
    const plusCount = count + 1
    setCount(plusCount)
    //또는 setCount(count+1)
  }
  return (
  <div>
    <div>{count}</div>
    <div>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={PlusBtnClickHandler}>+</button>
    </div>
  </div>
  )
}

export default App;
