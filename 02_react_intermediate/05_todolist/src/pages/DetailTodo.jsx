import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  font-family: "Pretendard-Regular";
  font-size: large;
  width: 500px;
  height: 400px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border: 2px solid rgba(232, 71, 98, 0.27);
  border-radius: 10px;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
  color: gray;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: gray;
  display: flex;
  justify-content: flex-end;
`;
const Line = styled.div`
  border: 1px solid rgba(232, 71, 98, 0.27);
`;

const TodoDetail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
`;

const Contents = styled.div`
  font-size: 25px;
  line-height: 1.5;
  word-break: break-all;
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
        <BackLink to="/">돌아가기</BackLink>
      </DetailHeader>
      <Line></Line>
      <TodoDetail>
        <div>
          <Title>제목</Title>
          <Contents>{foundTodo.title}</Contents>
        </div>
        <div>
          <Title>내용</Title>
          <Contents>{foundTodo.contents}</Contents>
        </div>
      </TodoDetail>
    </DetailContainer>
  );
}

export default DetailTodo;
