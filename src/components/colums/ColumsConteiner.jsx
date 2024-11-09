import React, { useState } from "react";
import Colums from "./Colums";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addColums } from "../../redux/slices/columsSlice";
import { TiPlus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const ColumsConteiner = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const { colums } = useSelector((state) => state.colums);

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColums = {
      id: Date.now().toString(),
      title: textInput,
      cards: [],
    };
    if (textInput.trim() === "") return;

    setTextInput("");
    dispatch(addColums(newColums));
  };

  return (
    <StyleContainer>
      {colums?.map((colm) => (
        <Colums key={colm.id} {...colm} />
      ))}
      {state && (
        <StyleForm onSubmit={handleSubmit}>
          <StyleInputPlus
            onChange={handleInputChange}
            type="text"
            value={textInput}
            placeholder="Загаловок"
          />
          <StyleButtonDiv>
            <StyleButtonPlus type="submit">
              <TiPlus className="plus" /> Добавить список
            </StyleButtonPlus>
            <IoClose className="close" onClick={() => setState(!state)} />
          </StyleButtonDiv>
        </StyleForm>
      )}
      <StyleButton onClick={() => setState(!state)}>
        + Добавить колонку
      </StyleButton>
    </StyleContainer>
  );
};

export default ColumsConteiner;
//
const StyleContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const StyleButton = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid rebeccapurple;
  color: #053c05;
  font-size: 16px;
  font-weight: 600;
  background-color: #bbd6bb;
  cursor: pointer;
`;

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 23px;
  background-color: #72a372;
  width: 300px;
  border-radius: 10px;
  padding: 30px 15px 20px 20px;
  height: fit-content;
`;

const StyleButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & .close {
    font-size: 27px;
    margin-top: 3px;
    cursor: pointer;
  }
`;

const StyleButtonPlus = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 5px;
  background-color: #0c4b0c;
  color: white;
  border: 0.3px solid rebeccapurple;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0px 25px 0px 25px;
  align-items: center;
  font-size: 15px;

  & .plus {
    font-size: 20px;
  }
`;

const StyleInputPlus = styled.input`
  width: 263px;
  height: 40px;
  padding-left: 15px;
  border: 0.3px solid rebeccapurple;
  border-radius: 5px;
`;
