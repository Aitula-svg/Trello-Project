import React from "react";
import { Navigate, Outlet } from "react-router";

import { Header } from "./Header";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const MainLayout = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  return isAuthenticated ? (
    <StyleMain>
      <Header />
      <Outlet />
    </StyleMain>
  ) : (
    <Navigate to="/login" />
  );
};

const StyleMain = styled.div`
  background-image: url("https://images.unsplash.com/photo-1617472600356-d6cc97119a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
