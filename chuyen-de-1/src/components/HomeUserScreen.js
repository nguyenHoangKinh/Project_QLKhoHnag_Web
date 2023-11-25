import {useContext } from "react";
import {UserContext} from '../context/UserContext';
import { Link } from "react-router-dom";

const HomeUserScreen =() => {
  const {Logout} = useContext(UserContext);
    let Token = localStorage.getItem("jsonwebtoken");
    const LogoutToken = () => {
        Logout(Token);
      };
   

   return (<>
    <h1>HomeUserScreen</h1>
      <Link to="/listAcontActive" className="btn btn-success my-3">
        AcountActive
      </Link>
      <Link to="/listAcontDeActive" className="btn btn-success my-3">
        AcountDeActive
      </Link>
    <button onClick={LogoutToken} className="btn btn-danger my-3">
        Logout 
      </button>
     
   </>)

}

export default HomeUserScreen;