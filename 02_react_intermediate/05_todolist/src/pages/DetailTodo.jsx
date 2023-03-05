import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  font-size: large;
  max-width: 1200px;
  min-width: 500px;
  height: 400px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border: 2px solid rgba(128, 128, 128, 0.47);
  border-radius: 10px;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
`;

const Line = styled.div`
  border: 1px solid rgba(128, 128, 128, 0.47);
`;

const TodoDetail = styled.div`
  padding: 20px;
`;

const TodoTitleBox = styled.div`
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-weight: bold;
`;
function DetailTodo() {
  const params = useParams();
  const todoList = useSelector(state => state.data);

  const foundTodo = todoList.find(list => {
    return list.id === Number(params.id);
  });

  return (
    <DetailContainer>
      <DetailHeader>
        <div>ID: {foundTodo.id}</div>
        <Link to="/">돌아가기</Link>
      </DetailHeader>
      <Line></Line>
      <TodoDetail>
        <TodoTitleBox>
          <Title>제목</Title>
          <div>{foundTodo.title}</div>
        </TodoTitleBox>
        <div>
          <Title>내용</Title>
          <div>{foundTodo.contents}</div>
        </div>
      </TodoDetail>
    </DetailContainer>
  );
}

export default DetailTodo;
