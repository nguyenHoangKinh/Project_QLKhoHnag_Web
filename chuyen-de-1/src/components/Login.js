import { useState, useEffect, useContext } from "react";
import { Alert } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../context/UserContext";
const Login = (props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loadingData, LoginUserToken } = useContext(UserContext);
  const handleLogin = async () => {
    if (username && password) {
      LoginUserToken(username, password);
    }
  };

  return (
    <div className="bg-info d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-white p-5 rounded mx-auto" style={{ width: "600px" }}>
        <h1 className="border-bottom border-dark-subtle py-2 text-capitalize text-center fs-1 mb-4 pb-3">
          User Login
        </h1>
        <div> 
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label fs-5 text-capitalize"
            >
              UserName
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ height: "40px" }}
              type="text"
              placeholder="Username..."
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your username with anyone else.
            </div>
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="exampleInputPassword1" className="form-label fs-5">
              Password
            </label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              style={{ height: "40px" }}
              type={isShowPassword === true ? "text" : "password"}
              placeholder="password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="position-absolute"
              style={{ right: "3%", top: "58%" }}
            >
              <i
                className={
                  isShowPassword === true
                    ? "fa-solid fa-eye"
                    : "fa-sharp fa-solid fa-eye-slash"
                }
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            className="btn btn-primary w-100 p-3 fs-5 text-uppercase fw-semibold"
            onClick={handleLogin}
          >
            {loadingData && <i className="fa-solid fa-sync fa-spin"></i>}
            Login
          </button>
          <div className="d-flex justify-content-center" style={{marginTop:"16px"}}>
            <a href="registeraccount">
              Register<i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
