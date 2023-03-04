import React from "react";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoListContainer from "./components/TodoListContainer";

function App() {
  return (
    <div>
      <Header />
      <CreateTodo />
      <TodoListContainer />
    </div>
  );
}

export default App;
