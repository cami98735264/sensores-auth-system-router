import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthenticationContext from './components/Authentication/AuthenticationContext.js';
import {
  createHashRouter, createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import AuthenticationForms from './components/Forms/AuthenticationForms.js';
import Dashboard from './components/Dashboard/Dashboard.js';
const loginContext = createContext();


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/login",
    element: <AuthenticationForms isLogin={true}/>,
  },
  {
    path: "/register",
    element: <AuthenticationForms isLogin={false}/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "*",
    element: <h1>¡Ruta no existente!</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationContext>
      <RouterProvider router={router} />
    </AuthenticationContext>
  </React.StrictMode>
);


export default loginContext;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
