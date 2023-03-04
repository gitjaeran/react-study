import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function DetailTodo() {
  const params = useParams();
  const todoList = useSelector(state => state.data);

  const foundTodo = todoList.find(list => {
    console.log(typeof list.id);
    console.log(typeof params.id);
    console.log(typeof Number(params.id));

    return list.id === Number(params.id);
  });

  return (
    <div>
      <div>{foundTodo.id}</div>
      <Link to="/">돌아가기</Link>
      <div>{foundTodo.title}</div>
      <div>{foundTodo.contents}</div>
    </div>
  );
}

export default DetailTodo;
