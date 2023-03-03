//1. 초기 상태값(state)
const initialState = {
    userId: 123,
};
/*
원래 useState를 사용할 때 작성했던 방식:
const [number, setNumber] = useState(0)
*/


//2. 리듀서: state에 변화를 일으키는 함수
//state를 action의 type에 따라 변경하는 함수
//input: state와 action을 받음
const users = (state = initialState, action) => {
    switch (action.type) { //action에 있는 type에 따라서
        default: //아무것도 안 할때는
            return state; //최초 state인 initialState 해주면 된다는 뜻
    }
}

export default users;