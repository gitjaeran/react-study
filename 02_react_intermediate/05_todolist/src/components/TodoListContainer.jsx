import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteTodo,
  doneTodo,
  workingTodo,
} from "../redux/config/modules/todoList";

function TodoListContainer() {
  const todoList = useSelector(state => state.data);
  const dispatch = useDispatch();

  return (
    <div>
      {/* working */}
      <div>
        <h2>Working</h2>
        {todoList.map(list => {
          return (
            list.isDone === false && (
              <div key={list.id}>
                <div>
                  <Link to={`/todolistcontainer/${list.id}`}>상세페이지</Link>
                  <div>{list.title}</div>
                  <div>{list.contents}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(list.id));
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => {
                      dispatch(doneTodo(list.id, list.isDone));
                    }}
                  >
                    완료하기
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>

      {/* Done */}
      <div>
        <h2>Done</h2>
        {todoList.map(list => {
          return (
            list.isDone === true && (
              <div key={list.id}>
                <div>
                  <Link to={`/todolistcontainer/${list.id}`}>상세페이지</Link>
                  <div>{list.title}</div>
                  <div>{list.contents}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(list.id));
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => {
                      dispatch(workingTodo(list.id));
                    }}
                  >
                    되돌리기
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default TodoListContainer;
