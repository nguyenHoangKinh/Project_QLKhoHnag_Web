import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../config";

const Logout = (token) => {
//   console.log("category: ", token);
  axios
    .get(BASE_URL + "/logout", {
      headers: {
        token: token,
      },
    })
    .then((res) => {
      if (res) {
        localStorage.removeItem("jsonwebtoken");
        window.location.href = "/login";
      }
    }).catch((error) => {
        console.log(error.res.message);
      });
};
export { Logout };
