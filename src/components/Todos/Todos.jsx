import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";
import styled from "styled-components";

export const Todos = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCart = {
      id: Date.now().toString(),
      title: text,
    };
    dispatch(addTodo(newCart));
  };

  return (
    <StyleForm onSubmit={handleSubmit}>
      <StyleInput
        type="text"
        placeholder="задачи..."
        onChange={handleInputChange}
        value={text}
      />
      <StyleButton>+ Добавить карточку</StyleButton>
    </StyleForm>
  );
};

const StyleForm = styled.form`
  display: flex;

  flex-direction: column;
  gap: 10px;
  background-color: #72a372;
  margin-left: 10px;
`;

const StyleInput = styled.input`
  width: 280px;
  height: 36px;
  border-radius: 10px;
  border: none;
  padding-left: 15px;
  background-color: antiquewhite;
`;

const StyleButton = styled.button`
  width: 280px;

  border-radius: 7px;
  height: 36px;
  border: none;
  color: white;
  background-color: #063e06;
`;
