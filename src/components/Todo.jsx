import React from "react";
import styled from "styled-components";
const DivTodo = styled.div`
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  background-color: rgba(138, 138, 138, 0.1);
  cursor: pointer;
  &:hover {
    background-color: rgba(138, 138, 138, 0.2);
  }
`;
const Todo = ({ todo }) => {
  return <DivTodo>{todo.name}</DivTodo>;
};

export default Todo;
