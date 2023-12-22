import React, { useState } from "react";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import "./conversation.css";
import { BASE_URL } from "../../config";
import axios from "axios";
const Conversation = ({ data, currentUser, online }) => {
  let token = localStorage.getItem("jsonwebtoken");
  const [userData, setUserData] = useState(null)
  useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser)
    if (userId) {
      axios.get(BASE_URL + '/auth/account-by-id', {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              id: userId
          }
      }).then((res) => {
          setUserData(res.data.others)
      }).catch((error) => {
          console.log(error.message);
      });
  }
  }, [data])
  return (
    <>
    {userData != null ?
    ( 
      <>
      <div className="follower conversation">
        <div className="row">
        <div className="col">
        {online && <div className="online-dot" style={{marginLeft:"15px"}}></div>}
          <img
            src={userData.avatar}
            alt="Profile"
            className="followerImage"
            style={{ width: "53px", height: "50px" }}
          />  
        </div>
          <div className="col" style={{fontSize: '0.8rem'}}>
            <span>{userData.username}</span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
      </>
    )
    :""}
    </>
  );
};

export default Conversation;
