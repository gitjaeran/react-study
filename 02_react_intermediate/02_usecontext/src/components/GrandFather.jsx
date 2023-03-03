import React from 'react'
import { Context } from '../context/Context';
import Father from './Father';

//GrandFather -> Child에게 어떤 정보를 전달하여 Child에서 출력
function GrandFather() {
    const myName = 'cecilia';
    const pocketMoney = 10000;

  return (
  <Context.Provider value={{
    myName,
    pocketMoney
  }
  }>
    <Father/>
  </Context.Provider>
 )
}

export default GrandFather