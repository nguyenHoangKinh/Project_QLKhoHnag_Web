import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <>
    
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        <div className="text">Email Or UserName</div>
        <input
          type="text"
          placeholder="Email Or Username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="text"> Password </div>
        <div className="input-pass">
        <input
          type={isShowPassword === true ? "text" : "password"}
          placeholder="password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <i className={isShowPassword === true ? "fa-solid fa-eye" :"fa-sharp fa-solid fa-eye-slash"}
        onClick={() => setIsShowPassword(!isShowPassword)}
        ></i>
        </div>
        <button className={email && password ? "active" : "" } disabled={email && password ? false : true}>Login</button>
        <div className="back">
          <i className="fa-solid fa-chevron-left"></i> Go back
        </div>
      </div>
    </>
  );
};
export default Login;
