import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import './index.css';
import App from './App';
import Login from './components/Login';
import CategoryWarehouse from './components/CategoryWarehouse';
import RegisterAccount from './components/RegisterAccount'
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}  >
    <RouterProvider router={router} />
       <App />
    </Provider>
  </React.StrictMode>
   //<AppRouter />
);
reportWebVitals();
