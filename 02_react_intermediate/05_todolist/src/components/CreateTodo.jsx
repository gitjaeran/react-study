import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodo } from "../redux/config/modules/todoList";

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  background-color: rgba(128, 128, 128, 0.117);
  border-radius: 10px;
`;

const AddInputBox = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

const AddInput = styled.div`
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

const AddBtn = styled.div`
  font-weight: bold;
  color: rgb(232, 230, 230);

  background-color: rgb(232, 71, 98);

  border: none;
  border-radius: 10px;
  padding: 12px 45px;

  cursor: pointer;
`;

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  return (
    <AddContainer>
      <AddInputBox>
        <AddInput>
          <label>제목</label>
          <input
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </AddInput>
        <AddInput>
          <label>내용</label>
          <input
            value={contents}
            onChange={e => {
              setContents(e.target.value);
            }}
          />
        </AddInput>
      </AddInputBox>

      <div>
        <AddBtn
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
        </AddBtn>
      </div>
    </AddContainer>
  );
}

export default CreateTodo;
