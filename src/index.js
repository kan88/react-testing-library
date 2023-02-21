import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Start from './pages/start/start.jsx'
import reportWebVitals from './reportWebVitals.js';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/about.jsx';
import Main from './pages/main/main.jsx';

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RouterProvider router={router} />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
