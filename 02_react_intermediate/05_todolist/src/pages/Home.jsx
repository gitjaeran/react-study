import React from "react";
import CreateTodo from "../components/CreateTodo";
import Header from "../components/Header";
import TodoListContainer from "../components/TodoListContainer";

const Home = () => {
  return (
    <>
      <Header />
      <CreateTodo />
      <TodoListContainer />
    </>
  );
};

export default Home;
