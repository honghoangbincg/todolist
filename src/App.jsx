import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
const DivApp = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;
const Input = styled.input`
  border-radius: 3px 0px 0px 3px;
  padding: 8px 15px;
  border: 1px solid #de6590;
  outline: none;
  box-shadow: none;
  width: 100%;
  font-family: inherit;
  color: #8a8a8a;
  transition: 0.5s ease-out;
  &::placeholder {
    color: rgba(222, 101, 144, 0.4);
  }
`;
const Button = styled.button`
  background-color: #de6590;
  padding: 9px 50px;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  font-family: inherit;
  cursor: pointer;
  transition: 0.5s ease-out;
`;
const App = () => {
  const [texInput, setTextInput] = useState("");
  const [todolist, setTodoList] = useState([]);

  const onChangeTextInput = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onClickButtonAdd = useCallback(() => {
    setTodoList([
      {
        id: uuidv4(),
        name: texInput,
        isCompleted: false,
      },
      ...todolist,
    ]);
    setTextInput("");
  }, [texInput, todolist]);
  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      setTodoList([
        {
          id: uuidv4(),
          name: texInput,
          isCompleted: false,
        },
        ...todolist,
      ]);
      setTextInput("");
    }
  };
  return (
    <DivApp>
      <h3 style={{ textAlign: "center" }}>TO-DO LIST</h3>
      <div className="form-group">
        <Input
          type="text"
          value={texInput}
          onChange={onChangeTextInput}
          placeholder="ADD TODO HERE..."
          onKeyDown={onKeyDownEnter}
        />
        <Button onClick={onClickButtonAdd}>+</Button>
      </div>
      <p>YOUR TODOS:</p>
      <TodoList todolist={todolist} />
    </DivApp>
  );
};

export default App;
