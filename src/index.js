import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Start from './pages/start/start.jsx'
import reportWebVitals from './reportWebVitals.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/about.jsx';
import Main from './pages/main/main.jsx';
import Error from './pages/404/404.jsx';
import Users from './components/users/users.jsx';
import User from './components/user/user.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/main",
    element: <Main/>,
  },
  {
    path: "/*",
    element: <Error/>,
  },
  {
    path: "/users",
    element: <Users/>,
  },
  {
    path: "/users/:id",
    element: <User/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
