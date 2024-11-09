import styled from "styled-components";
import ColumsConteiner from "../components/colums/ColumsConteiner";

export const HomePage = () => {
  return (
    <StyleDiv>
      <ColumsConteiner />
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  gap: 14px;

  flex-wrap: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  & ::-webkit-scrollbar {
    display: none;
  }
`;
