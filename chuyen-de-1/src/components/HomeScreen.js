import { useEffect } from "react";
import { Logout } from "../services/UserServices";
import { setAuthenticationHeader } from "../services/authenticate";

const HomeScreen = () => {
  let name = localStorage.getItem("jsonwebtoken");
  const LogoutToken = () => {
    Logout(name);
  };
  return (
    <div className="app-containers">
      <div className="login-container">
        <button onClick={LogoutToken}>Logout</button>
      </div>
    </div>
  );
};

export default HomeScreen;
