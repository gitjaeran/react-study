//action value
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
const WORKING_TODO = "WORKING_TODO";

//action creator : action value return function
export const createTodo = payload => {
  return {
    type: CREATE_TODO,
    payload: payload,
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const doneTodo = id => {
  //   console.log(id, isDone);
  return {
    type: DONE_TODO,
    payload: id,
  };
};

export const workingTodo = id => {
  return {
    type: WORKING_TODO,
    payload: id,
  };
};

//초기 상태값(state)
const initialState = [
  {
    id: 1,
    title: "React 공부하기",
    contents: "React로 TodoList 만들기",
    isDone: false,
  },
  {
    id: 2,
    title: "Redux 공부하기",
    contents: "Redux로 TodoList 전역 상태 관리하기",
    isDone: true,
  },
];

//리듀서: state에 변화를 일으키는 함수(action의 type에 따라 변경)
const data = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(list => list.id !== action.payload);
    case DONE_TODO:
      console.log(action.payload);
      //   console.log(state);
      //해당 list.id가 맞다면
      //그 list의 isDone을 true로 변경하고, 변경되지 않은 다른 list는 그대로.
      const isDoneTrue = state.map(list => {
        if (list.id === action.payload) {
          return (list = { ...list, isDone: true });
        } else {
          return list;
        }
      });
      return isDoneTrue;
    case WORKING_TODO:
      const isDoneFalse = state.map(list => {
        if (list.id === action.payload) {
          return (list = { ...list, isDone: false });
        } else {
          return list;
        }
      });
      return isDoneFalse;
    default:
      return state;
  }
};

export default data;
