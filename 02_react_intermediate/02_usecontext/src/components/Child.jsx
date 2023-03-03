import React, { useContext } from 'react'
import { Context } from '../context/Context'

const style = {
    color: 'blue',
    fontWeight: '900',
}

function Child() {
    const data = useContext(Context)
  return (
    <div>
        이 컴포넌트는 가장 하위 컴포넌트입니다.
        <br/>
        GrandFather 컴포넌트에서 <span style={style}>{data.myName}</span>과 <span style={style}>{data.pocketMoney}</span>를 받아와서 보여주고 있어요.
    </div>
  )
}

export default Child