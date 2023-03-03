import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { data } from '../shared/data';

function Works() {
    const navigate = useNavigate();
    const location = useLocation();
    //버튼을 클릭했을 때 해당 객체의 정보를 활용하여 현재 위치 등을 활용하여 조건부 렌더링 가능
    console.log(location) 

  return (
    <>
    <div>
        Works
        <br/>
        <button onClick={()=>{
            navigate('/')
        }}>Go Home</button>
        <br/>

        {/* a tag 표방 */}
        <Link to='/contact'>Go Contact</Link> 
    </div>

    <div>
        <h3>할 일 목록</h3>
        {data.map((list)=>{
            return (
                <div key={list.id}>
                    {list.id}
                    &nbsp;
                    <Link to={`/works/${list.id}`}>{list.todo}</Link>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Works