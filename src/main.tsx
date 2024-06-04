import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login/Login.tsx'
import Register from './Register/Register.tsx'
import Confirmation from './Confirmation/Confirmation.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);