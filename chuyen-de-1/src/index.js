import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import './index.css';
import App from './App';
import Login from './components/Login';
import CategoryWarehouse from './components/CategoryWarehouse';
import RegisterAccount from './components/RegisterAccount'
import HomeScreen from './components/HomeScreen';
import Home from './components/Home';
import UpdateWare from './components/UpdateWare';
import Read from './components/Read';
import Create from './components/Create';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "CategoryWarehouse",
    element: <CategoryWarehouse/>,
  },
  {
    path: "registeraccount",
    element: <RegisterAccount/>,
  },
  {
    path: "HomeScreen",
    element: <HomeScreen/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "UpdateWare",
    element: <UpdateWare/>,
  },
  {
    path: "Read",
    element: <Read/>,
  },
  {
    path: "Create",
    element: <Create/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Provider store={store}  > */}
       {/* <App /> */}
    {/* </Provider> */}
  </React.StrictMode>
   //<AppRouter />
);
reportWebVitals();
