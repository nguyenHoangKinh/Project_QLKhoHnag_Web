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
import ListPostOwner from './components/owner/ListPostOwner';
import AddPost from './components/owner/AddPost';
import UpdatePost from './components/owner/UpdatePost';
import ListAcountActive from './components/ListAcountActive';
import ListAcountDeActive from './components/ListAcountDeActive';
import ListOwnerDeActive from './components/ListOwnerDeActive';
import ListOwnerActive from './components/ListOwnerActive';
import ListUserActive from './components/ListUserActive';
import HomeAdminScreen from './components/HomeAdminScreen';
import ListUserDeActive from './components/ListUserDeActive';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile'
import DetailsOrderPage from './components/DetailsOrderPage'
import Chat from './components/Chat/Chat'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {AuthProvider} from './context/UserContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailWareUser from './components/user/DetailWareUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
    path: "HomeAdminScreen",
    element: <HomeAdminScreen/>,
  },
  {
    path: "ListAcountActive",
    element: <ListAcountActive/>,
  },
  {
    path: "ListAcountDeActive",
    element: <ListAcountDeActive/>,
  },
  {
    path: "ListOwnerActive",
    element: <ListOwnerActive/>,
  },
  {
    path: "ListOwnerDeActive",
    element: <ListOwnerDeActive/>,
  },
  {
    path: "ListUserActive",
    element: <ListUserActive/>,
  },
  {
    path: "ListUserDeActive",
    element: <ListUserDeActive/>,
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
    path: "DetailsOrderPage",
    element: <DetailsOrderPage/>,
  },
	{
    path: "/DetailWareUser/:id",
    element: <DetailWareUser/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/chatUse",
    element: <Chat/>,
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
