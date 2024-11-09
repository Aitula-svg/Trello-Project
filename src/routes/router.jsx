// import { createBrowserRouter, Navigate } from "react-router-dom";
// import Login from "../Auth/Login";
// import { MainLayout } from "../layout/MainLayout";
// import HomePage from "../pages/HomePage";

// import ColumsConteiner from "../components/colums/ColumsConteiner";
// import Header from "../layout/Header";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/login" />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/main",

//     element: <MainLayout />,
//     children: [
//       {
//         index: true,

//         element: <Navigate to="/main/home-page" />,
//       },
//       {
//         path: "home-page",
//         element: <HomePage />,
//       },
//       {
//         path: "header",
//         element: <Header />,
//       },
//       {
//         path: "colums-conteiner",
//         element: <ColumsConteiner />,
//       },
//     ],
//   },
// ]);
