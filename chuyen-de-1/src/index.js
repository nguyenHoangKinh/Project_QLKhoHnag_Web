import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import './index.css';
import App from './App';
import Login from './components/Login';
import CategoryWarehouse from './components/CategoryWarehouse';
import RegisterAccount from './components/RegisterAccount'
import HomeScreen from './components/HomeScreen';
import InformationWarehouse from './components/InformationWarehouse';
import ShowOrders from './components/ShowOrders';
>>>>>>> Kinh/ShowOrders
import UpdateWare from './components/UpdateWare';
import HomeUserScreen from './components/HomeUserScreen';
import Create from './components/Create';
import ListWarehouseUser from './components/ListWarehouseUser';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {AuthProvider} from './context/UserContext';
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
    path: "UpdateWare",
    element: <UpdateWare/>,
  },
  {
    path: "Create",
    element: <Create/>,
  },
  {
    path: "InformationWarehouse",
    element: <InformationWarehouse/>,
  },
  {
    path: "ListWarehouseUser",
    element: <ListWarehouseUser/>,

    path: "ShowOrders",
    element: <ShowOrders/>,
  },{
    path: "HomeUserScreen",
    element: <HomeUserScreen/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
reportWebVitals();
