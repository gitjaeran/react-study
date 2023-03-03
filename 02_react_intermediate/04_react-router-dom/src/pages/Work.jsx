import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../shared/data';

function Work() {
    const params = useParams();

    //어떤 todo인지 찾아보기
    const foundData = data.find((list)=>{
        return list.id === parseInt(params.id)
    })

  return (
    <div>
        <h3>할 일: {foundData.todo}</h3>
    </div>
  )
}

export default Work