import { useContext } from "react";
import { UserContext } from '../context/UserContext';
import ListBlog from "./ListBlog";

const HomeUserScreen = () => {
  const { Logout } = useContext(UserContext);
  let Token = localStorage.getItem("jsonwebtoken");
  const LogoutToken = () => {
    Logout(Token);
  };
  return (<>
    <h1>HomeUserScreen</h1>
    <ListBlog />
    <button onClick={LogoutToken} className="btn btn-danger my-3">
      Logout
    </button>
  </>)

}

export default HomeUserScreen;import {useContext } from "react";
import {UserContext} from '../context/UserContext';
import ListBlog from "./ListBlog";

const HomeUserScreen =() => {
  const {Logout} = useContext(UserContext);
    let Token = localStorage.getItem("jsonwebtoken");
    const LogoutToken = () => {
        Logout(Token);
      };
   return (<>
    <h1>HomeUserScreen</h1>
    <ListBlog/>
    <button onClick={LogoutToken} className="btn btn-danger my-3">
        Logout 
      </button>
   </>)

}

export default HomeUserScreen;