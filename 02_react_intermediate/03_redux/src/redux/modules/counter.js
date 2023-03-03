// action value : case 변수 관리
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N"

// action creator :  action value를 return하는 함수
export const plusOne = () => {
    return {
        type: PLUS_ONE,
    }
}

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    }
}

export const plusN = (payload) => {
    return {
        type: PLUS_N,
        payload
    }
}

export const minusN = (payload) => {
    return {
        type: MINUS_N,
        payload: payload,
    }
}
/* 1. 초기 상태값(state)
원래 useState를 사용할 때 작성했던 방식:
const [number, setNumber] = useState(0)
*/
const initialState = {
    number: 0
};


/* 2. 리듀서: state에 변화를 일으키는 함수
state를 action의 type에 따라 변경하는 함수
input: state와 action을 받음

state 객체라는 것은 action type을 payload만큼 처리하는 것이다.
ex) payload가 3이면 3만큼 plus or minus
*/
const counter = (state = initialState, action) => {
    switch (action.type) { //action에 있는 type에 따라서
        case PLUS_ONE: //"PLUS_ONE"이라고 했을 때
            return {
                number: state.number + 1 //state + 1
            };
        case MINUS_ONE:
            return {
                number: state.number - 1
            };
        case PLUS_N:
            return {
                number: state.number + action.payload
            };
        case MINUS_N:
            return {
                number: state.number - action.payload
            }
        default: //아무것도 안 할때는
            return state; //최초 state인 initialState 해주면 된다는 뜻
    }
}

export default counter;