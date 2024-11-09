import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { EditCards } from "../../redux/slices/columsSlice";

export const TodoItem = ({ id, title, columnId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const saveHandleClick = (e) => {
    e.preventDefault();
    dispatch(EditCards({ columnId, cardId: id, newText: editValue }));

    setIsEdit(false);
  };

  const cancelEditHandler = () => {
    setIsEdit(false);
    setEditValue(title);
  };
  return (
    <StyleLiDuv>
      {isEdit ? (
        <StyleFormNew onSubmit={saveHandleClick}>
          <input value={editValue} type="text" onChange={handleEditChange} />
          <button className="save" type="submit">
            Save
          </button>
          <button className="x" onClick={cancelEditHandler} type="button">
            X
          </button>
        </StyleFormNew>
      ) : (
        <>
          <StyleP>
            <StyledP>{title}</StyledP>
            <AiOutlineEdit className="edit" onClick={handleEdit} />
          </StyleP>
        </>
      )}
    </StyleLiDuv>
  );
};

const StyleP = styled.div`
  background-color: #cfe1d4;
  width: 260px;
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  justify-content: space-between;
  padding: 0px 25px 0px 25px;
  align-items: center;

  gap: 20px;

  & .edit {
    cursor: pointer;
    font-size: 20px;
  }
`;

const StyleLiDuv = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledP = styled.p`
  font-size: 18px;
`;

const StyleFormNew = styled.form`
  display: flex;
  gap: 5px;
  & > input {
    width: 180px;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
  }
  & .save {
    width: 45px;
    border-radius: 5px;
    background-color: #0c4b0c;
    color: white;
    cursor: pointer;
  }
  & .x {
    width: 30px;
    border-radius: 5px;
    background-color: #0c4b0c;
    color: white;
    cursor: pointer;
  }
`;
