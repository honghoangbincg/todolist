import React from "react";
import Todo from "./Todo";

const TodoList = ({ todolist }) => {
  return (
    <>
      {todolist.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
