import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/config/modules/todoList";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>
          <label>제목</label>
          <input
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label>내용</label>
          <input
            value={contents}
            onChange={e => {
              setContents(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            dispatch(
              createTodo({
                id: Date.now(),
                title,
                contents,
                isDone: false,
              })
            ); //dispatch
            setTitle("");
            setContents("");
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
