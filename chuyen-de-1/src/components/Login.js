import { useState, useEffect } from "react";
import { setAuthenticationHeader } from '../services/authenticate';
import  CategoryWarehouse  from './CategoryWarehouse';
import { Toast } from "bootstrap";
import axios from "axios";
const Login = (props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [loadingData, setLoadingData] = useState(false);
  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    // perform the login request
    setLoadingData(true);
    axios
      .post(BASE_URL+"/login", {
        username: credentials.username,
        password: credentials.password,
      })
      .then((response) => {
        if (response.data) {
          setLoadingData(false);
          alert("dang nhap thanh cong")
          const token = response.data.accessToken;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token); 
          // set default headers
          console.log("token:",token);    
          // console.log("token:",CategoryWarehouseService(token));   
          window.location.href = "/HomeScreen";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app-containers">
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        <div className="text">Email Or UserName</div>
        <input
          type="text"
          placeholder="Username..."
          name="username"
          onChange={handleChange}
        />
        <div className="text"> Password </div>
        <div className="input-pass">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="password..."
            name="password"
            onChange={handleChange}
          />
          <i
            className={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-sharp fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>
        <button
            className="active"
          //   disabled={username && password ? false : true}
          onClick={handleLogin}
        >
          {loadingData && <i className="fa-solid fa-sync fa-spin"></i>}
          &nbsp;Login
        </button>
        <div className="back">
          <a href="registeraccount">
            Register<i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoggedIn: () => dispatch({type: 'ON_LOGGED_IN'})
  }
}

export default Login;
