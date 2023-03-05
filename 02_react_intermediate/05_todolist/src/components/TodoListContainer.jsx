import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  deleteTodo,
  doneTodo,
  workingTodo,
} from "../redux/config/modules/todoList";

const LayoutBox = styled.div`
  padding: 20px;
`;

const TodoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  padding-bottom: 30px;
`;

const TodoComponent = styled.div`
  font-size: larger;
  font-weight: 500;

  width: 300px;
  height: 170px;

  padding: 23px;
  margin-right: 10px;

  border: 4px solid rgba(232, 71, 98, 0.27);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const DetailTodo = styled.div`
  font-size: 15px;
  padding-bottom: 10px;
`;

const TodoTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 5px;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  font-size: 14px;

  background-color: white;
  border: 1px solid ${props => props.borderColor};

  border-radius: 10px;
  padding: 10px 45px;

  cursor: pointer;
`;
function TodoListContainer() {
  const todoList = useSelector(state => state.data);
  const dispatch = useDispatch();

  return (
    <LayoutBox>
      {/* working */}
      <div>
        <h2>Working</h2>
        <TodoWrap>
          {todoList.map(list => {
            return (
              list.isDone === false && (
                <TodoComponent key={list.id}>
                  <ListBox>
                    <DetailTodo>
                      <Link to={`/todolistcontainer/${list.id}`}>
                        상세페이지
                      </Link>
                    </DetailTodo>
                    <TodoTitle>{list.title}</TodoTitle>
                    <div>{list.contents}</div>
                  </ListBox>
                  <BtnBox>
                    <Btn
                      borderColor="rgba(197, 13, 19, 0.414)"
                      onClick={() => {
                        dispatch(deleteTodo(list.id));
                      }}
                    >
                      삭제하기
                    </Btn>
                    <Btn
                      borderColor="rgba(5, 66, 188, 0.358)"
                      onClick={() => {
                        dispatch(doneTodo(list.id, list.isDone));
                      }}
                    >
                      완료하기
                    </Btn>
                  </BtnBox>
                </TodoComponent>
              )
            );
          })}
        </TodoWrap>
      </div>

      {/* Done */}
      <div>
        <h2>Done</h2>
        <TodoWrap>
          {todoList.map(list => {
            return (
              list.isDone === true && (
                <TodoComponent key={list.id}>
                  <div>
                    <DetailTodo>
                      <Link to={`/todolistcontainer/${list.id}`}>
                        상세페이지
                      </Link>
                    </DetailTodo>
                    <TodoTitle>{list.title}</TodoTitle>
                    <div>{list.contents}</div>
                  </div>
                  <BtnBox>
                    <Btn
                      borderColor="rgba(197, 13, 19, 0.414)"
                      onClick={() => {
                        dispatch(deleteTodo(list.id));
                      }}
                    >
                      삭제하기
                    </Btn>
                    <Btn
                      borderColor="rgba(8, 100, 8, 0.475)"
                      onClick={() => {
                        dispatch(workingTodo(list.id));
                      }}
                    >
                      되돌리기
                    </Btn>
                  </BtnBox>
                </TodoComponent>
              )
            );
          })}
        </TodoWrap>
      </div>
    </LayoutBox>
  );
}

export default TodoListContainer;
