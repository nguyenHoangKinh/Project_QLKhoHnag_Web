import React, { useRef, useState, useContext } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import Conversation from "../Coversation/Conversation";
import { UserContext } from "../../context/UserContext";
import "./Chat.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import Navbar from "../HomeNavbar";

const Chat = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const socket = useRef();
  let idUser = jwtDecode(Token);
  const { chats, userChats } = useContext(UserContext);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  let idUsers = idUser.id;
  // Get the chat in chat section
  useEffect(() => {
    userChats(Token,idUser.id);
  }, [idUser.id]);
  
  // console.log(chats);  
  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("http://localhost:3001");
    socket.current.emit("new-user-add", idUsers);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [idUsers]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data);
      setReceivedMessage(data);
    });
  }, []);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== idUser.id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div style={{background:"#ececec"}}>
    <Navbar/>
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <div className="Chat-container">
         <div className="Chat-thanh">
         <h2>Chats</h2>
          <div className="Chat-list">
            {chats != "" ? chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUser={idUser.id}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            )): "khong co du lieu"}
          </div>
         </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <ChatBox
          chat={currentChat}
          currentUser={idUser.id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
    </div>
  );
};

export default Chat;
