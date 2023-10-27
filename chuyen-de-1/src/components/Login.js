import { useState, useEffect } from "react";
import { loginApi } from "../services/UserService";
import { Toast } from "bootstrap";
// import { userNavigate } from "react-router-dom";
const Login = () => {
  // const navigate = userNavigate();
  const [username, setUserNamel] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = async () => {
    if (!username || !password) {
      Toast.error("Emial/Password is required!");
      return;
    }
    setLoadingData(true);
    let res = await loginApi(username, password);
    // console.log(">>> check login", res);
    if (res && res.token) {
      localStorage.setItem("token",res.token);
      //nieu dang nhap thanh cong thi se chuyen vao trang home
      // navigate('/');
    }else{
      //error
      if(res && res.status === 400){
        Toast.error(res.data.error);
      }
    }
    alert("dang nhap thanh cong");
    
    setLoadingData(false);
  };
  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        {/* <form> */}
        <div className="text">Email Or UserName</div>
        <input
          type="text"
          placeholder="Email Or Username..."
          value={username}
          onChange={(event) => setUserNamel(event.target.value)}
        />
        <div className="text"> Password </div>
        <div className="input-pass">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
          className={username && password ? "active" : ""}
          disabled={username && password ? false : true}
          onClick={() => handleLogin()}
        >
          {loadingData && <i className="fa-solid fa-sync fa-spin"></i>}
          &nbsp;Login
        </button>
        {/* </form> */}
        <div className="back">
          <i className="fa-solid fa-chevron-left"></i> Go back
        </div>
      </div>
    </>
  );
};
export default Login;