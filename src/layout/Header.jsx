import React from "react";
import styled from "styled-components";
import HeaderIcon from "../assets/images/foto.png";
import { LuUserSquare2 } from "react-icons/lu";
import { MdExpandMore } from "react-icons/md";

export const Header = () => {
  return (
    <StyleHeader>
      <img src={HeaderIcon} />
      <StyleDiv>
        <h2>
          Рабочие пространство <MdExpandMore />
        </h2>
        <h2>
          Недавние <MdExpandMore />
        </h2>
        <h2>
          В избранном <MdExpandMore />
        </h2>
        <h2>
          Больше <MdExpandMore />
        </h2>
        <button>Создать</button>
        <input placeholder="Поиск" />
        <LuUserSquare2 className="user" />
      </StyleDiv>
    </StyleHeader>
  );
};

const StyleHeader = styled.div`
  background-color: #578657;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 25px;

  gap: 10px;
  & > img {
    width: 180px;
    height: 55px;
    margin-left: 20px;
  }
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  margin-right: 20px;
  & > h2 {
    color: #15155a;
    font-size: 23px;
    cursor: pointer;
    &:hover {
      background-color: #95b793;
      width: auto;
      height: 40px;
      border-radius: 8px;
    }
  }
  & button {
    width: 97px;
    height: 37px;
    border: none;
    border-radius: 7px;
    color: antiquewhite;
    background-color: #16358c;
    cursor: pointer;
  }
  & input {
    width: 179px;
    height: 36px;
    padding-left: 15px;
    border-radius: 6px;
  }
  & .user {
    font-size: 32px;
    cursor: pointer;
  }
`;
