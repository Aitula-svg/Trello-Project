import React from "react";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

export const TodoList = ({ todos = [], columnId }) => {
  return (
    <StyleUl>
      {todos.map((item) => (
        <TodoItem key={item.id} columnId={columnId} {...item} />
      ))}
    </StyleUl>
  );
};

const StyleUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
