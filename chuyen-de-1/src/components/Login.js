import { useState, useEffect } from "react";
import { setAuthenticationHeader } from '../services/authenticate';
import { Toast } from "bootstrap";
import axios from "axios";
// import { userNavigate } from "react-router-dom";
const Login = (props) => {
  // const navigate = userNavigate();
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
      .post("https://warehouse-management-api.vercel.app/v1/auth/login", {
        username: credentials.username,
        password: credentials.password,
      })
      .then((response) => {
        if (response.data) {
          setLoadingData(false);
          alert("dang nhap thanh cong")
          const token = response.data.accessToken;
          console.log(response);
          localStorage.setItem("jsonwebtoken", token);
          // set default headers
          setAuthenticationHeader(token);
          // navigate("/registeraccount");
          // props.history.push('/registeraccount', token);
          localStorage.setItem("username", credentials.username);
          // props.onLoggedIn();
          window.location.href = "/";
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
