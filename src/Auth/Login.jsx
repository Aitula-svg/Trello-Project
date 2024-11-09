import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordCahnge = (e) => {
    setPassword(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginHandler({ email: email, password: password }));

    if (isAuthenticated) {
      navigate("/main");
    }
  };
  return (
    <StyleDiv>
      <StyleForm onSubmit={hundleSubmit}>
        <StyleInput
          type="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="email"
        />
        <StyleInput
          type="password"
          onChange={handlePasswordCahnge}
          value={password}
          placeholder="password"
        />
        {error && <StylePR style={{ color: "red" }}>{error}</StylePR>}
        <CtyleButton type="submit ">Войти</CtyleButton>
        <StyleB>Забыли пароль?</StyleB>
      </StyleForm>
    </StyleDiv>
  );
};

export default Login;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 100px 0 0 0;
`;

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #73b57d;
  border-radius: 10px;
  padding: 30px;
`;

const StyleInput = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rebeccapurple;
  padding-left: 15px;
`;

const CtyleButton = styled.button`
  width: 350px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rebeccapurple;
  color: white;
  background-color: #2863c9;
  cursor: pointer;
`;

const StyleB = styled.b`
  display: flex;
  justify-content: center;
  color: #c61919;
  font-size: 20px;
  cursor: pointer;
`;

const StylePR = styled.p`
  display: flex;
  justify-content: center;
`;
