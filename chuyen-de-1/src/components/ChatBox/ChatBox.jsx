import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useRef } from "react";
import "./ChatBox.css";
import InputEmoji from 'react-input-emoji'
import { BASE_URL } from "../../config";
import axios from "axios";

const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
  const { messages, setMessages, fetchMessages, PostMessage } =
    useContext(UserContext);
  let token = localStorage.getItem("jsonwebtoken");
  const [userData, setUserData] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file);
  };

  // fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      if (userId) {
        axios
          .get(BASE_URL + "/auth/account-by-id", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              id: userId,
            },
          })
          .then((res) => {
            // console.log(res.data.others);
            setUserData(res.data.others);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetch messages
  useEffect(() => {
    if (chat !== null) fetchMessages(token, chat._id);
  }, [chat]);

  // Always scroll to last Message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send Message
  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };
    const receiverId = chat.members.find((id) => id !== currentUser);
    // send message to socket server
    setSendMessage({ ...message, receiverId });
    // send message to database
    try {
      PostMessage(token, message);
      setNewMessage("");
    } catch {
      console.log("error");
    }
  };

  // Receive Message from parent component
  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage);
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);
  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };
  const scroll = useRef();
  const imageRef = useRef();
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
                  <img
                    src={
                      userData?.avatar != ""
                        ? userData?.avatar
                        : process.env.REACT_APP_PUBLIC_FOLDER +
                          "defaultProfile.png"
                    }
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                    {userData?.username}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "100%",
                  border: "0.1px solid blue",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body">
              {messages != ""
                ? messages.map((message) => (
                    <>
                    {console.log(message,currentUser)}
                      <div
                        ref={scroll}
                        className={
                          message.senderId === currentUser
                            ? "message own"
                            : "message"
                        }
                      >
                        <span>{message.text}</span>{" "}
                        <span>{formatTime(message.createdAt)}</span>
                      </div>
                    </>
                  ))
                : ""}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div onClick={() => imageRef.current.click()}>+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div className="send-button button" onClick={handleSend}>
                Send
              </div>
              <input
                type="file"
                name="imgs"
                id="imgs"
                style={{ display: "none" }}
                ref={imageRef}
                onChange={handleFileChange}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;
