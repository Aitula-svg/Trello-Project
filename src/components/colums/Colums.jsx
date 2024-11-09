import React, { useState } from "react";

import { CiViewList } from "react-icons/ci";
import { TodoList } from "../Todos/TodoList";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { TiPlus } from "react-icons/ti";

import { addCards, deleteColumns } from "../../redux/slices/columsSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Colums = ({ title, cards, id }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const deleteButton = () => {
    dispatch(deleteColumns({ columnId: id }));
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newcards = {
      columnId: id,
      id: Date.now().toString(),
      title: inputValue,
    };

    dispatch(addCards(newcards));
    setInputValue("");
    setShowInput(false);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <StyleColums>
      <StyleDivIcon>
        <StyleP>{title}</StyleP>

        <TfiLayoutMenuSeparated className="icon" onClick={handleOpenModal} />
      </StyleDivIcon>

      <TodoList todos={cards} />

      <StyleForm onSubmit={handleSubmit}>
        {showInput ? (
          <>
            <AddInput
              type="text"
              value={inputValue}
              onChange={handleInputValue}
              placeholder="Добавить карточку"
            />
            <StyleDivAdd>
              <StyleAdd type="submit">
                <TiPlus className="plus" />
                Добавить карточку
              </StyleAdd>
              <CiViewList className="card" />
            </StyleDivAdd>
          </>
        ) : (
          <StyleButtonCard>
            <StyleAdd type="button" onClick={() => setShowInput(true)}>
              <TiPlus className="plus" /> Добавить карточку
            </StyleAdd>
            <CiViewList className="card" />
          </StyleButtonCard>
        )}
      </StyleForm>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <StyleModalP>Изменить описание</StyleModalP>
          <StyleModalP>Добавить карточку</StyleModalP>
          <StyleModalP onClick={deleteButton}>
            Архивировать карточку
          </StyleModalP>
          <StyleModalP>Создать копию</StyleModalP>
          <Button variant="outlined" onClick={handleCloseModal}>
            Закрыть
          </Button>
        </Box>
      </Modal>
    </StyleColums>
  );
};

export default Colums;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyleModalP = styled.p`
  font-size: 20px;
  margin: 15px;
  cursor: pointer;
  &:hover {
    background-color: #92bed7;
    border-radius: 8px;
    width: 280px;
  }
`;

const StyleColums = styled.div`
  width: 300px;
  height: fit-content;
  background-color: #72a372;
  padding: 20px;
  display: flex;

  justify-content: center;
  padding: 10px 15px 20px 20px;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
`;

const StyleP = styled.p`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
`;

const StyleDivIcon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  & > .icon {
    font-size: 30px;
    cursor: pointer;
  }
`;

const StyleAdd = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 5px;
  background-color: #0c4b0c;
  color: white;
  border: 0.3px solid rebeccapurple;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0px 25px 0 25px;
  align-items: center;
  font-size: 15px;
`;

const StyleButtonCard = styled.div`
  display: flex;
  justify-content: space-between;

  & .card {
    font-size: 35px;
  }
  & .plus {
    font-size: 20px;
  }
`;

const StyleDivAdd = styled.div`
  display: flex;
  justify-content: space-between;
  & .card {
    font-size: 35px;
    cursor: pointer;
  }
`;

const AddInput = styled.input`
  width: 262px;
  height: 40px;
  padding-left: 15px;
  border: 0.3px solid rebeccapurple;
  border-radius: 5px;
`;

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
