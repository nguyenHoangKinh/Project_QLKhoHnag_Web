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
import UpdateWare from './components/UpdateWare';
import ShowListOrderOwner from './components/ShowListOrderOwner';
import ListBlog from './components/ListBlog';
import HomeUserScreen from './components/HomeUserScreen';
import Create from './components/Create';
import ListWarehouseUser from './components/ListWarehouseUser';
import InformationOrder from './components/InformationOrder';
import ListPostOwner from './components/owner/ListPostOwner';
import AddPost from './components/owner/AddPost';
import UpdatePost from './components/owner/UpdatePost';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile'
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
  },{
    path: "ShowOrders",
    element: <ShowOrders/>,
  },{
    path: "HomeUserScreen",
    element: <HomeUserScreen/>,
  },
  {
    path: "ListBlog",
    element: <ListBlog/>,
  },
  {
    path: "ShowListOrderOwner",
    element: <ShowListOrderOwner/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
  {
    path: "ListPostOwner",
    element: <ListPostOwner/>,
  },
  {
    path: "AddPost",
    element: <AddPost/>,
  },
  {
    path: "UpdatePost",
    element: <UpdatePost/>,
  },
  {
    path: "Profile",
    element: <Profile/>,
  },
  {
    path: "UpdateProfile",
    element: <UpdateProfile/>,
  },
  {
    path: "InformationOrder",
    element: <InformationOrder/>,
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
