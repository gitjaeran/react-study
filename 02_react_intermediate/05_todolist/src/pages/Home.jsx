import React from "react";
import CreateTodo from "../components/CreateTodo";
import Header from "../components/Header";
import TodoListContainer from "../components/TodoListContainer";
import styled from "styled-components";

const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <LayoutBox>
      <Header />
      <CreateTodo />
      <TodoListContainer />
    </LayoutBox>
  );
};

export default Home;
