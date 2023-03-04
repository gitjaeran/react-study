import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailTodo from "../pages/DetailTodo";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolistcontainer/:id" element={<DetailTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
