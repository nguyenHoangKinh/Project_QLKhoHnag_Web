import {useContext } from "react";
import {UserContext} from '../context/UserContext';

const HomeUserScreen =() => {
  const {Logout} = useContext(UserContext);
    let Token = localStorage.getItem("jsonwebtoken");
    const LogoutToken = () => {
        Logout(Token);
      };
   

   return (<>
    <h1>HomeUserScreen</h1>
    <button onClick={LogoutToken} className="btn btn-danger my-3">
        Logout 
      </button>
     
   </>)

}

export default HomeUserScreen;