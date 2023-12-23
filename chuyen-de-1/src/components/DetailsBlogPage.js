import React from "react";
import { Button, Card, Flex, Typography, Carousel } from "antd";
import SilderComponent from "./SilderComponent/SilderComponent";
import { UserContext } from "../context/UserContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const DetailsBlogPage = () => {
  const { loadingData, detailBlog, DetailBlog } = useContext(UserContext);
  const [comment, setComment] = useState();
  const [message, setMessage] = useState();
  const navigation = useNavigate();
  const location = useLocation();
  let id = location.state.item._id;
  let token = localStorage.getItem("jsonwebtoken");
  let idUser = null;
  
  if (token) {
    idUser = jwtDecode(token);
}

  useEffect(() => {
    //call api
    DetailBlog(id);

    axios.get(BASE_URL + `/blog/comment/list-by-blog?idBlog=${id}`).then((res) => {
      setComment(res.data.data);
    }).catch((error) => {
      console.log(error.message);
    });
  }, [comment]);
  
  const addComment = (event) => {
    
    let token = localStorage.getItem("jsonwebtoken");
      if (token!=null) {
      idUser = jwtDecode(token);

      event.preventDefault();
      axios.post(`https://warehouse-management-api.vercel.app/v1/blog/comment/create`, { content: message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            idBlog: id,
          },
        }).then((res) => {
          setMessage("")
        }).catch((e) => {
          console.log(`add comment error ${e}`);
        });
    }else{
      alert("bạn chưa đăng nhập!");
      navigation("/Login")
    }
  }

  const deleteComment = (idComment) => {
    let token = localStorage.getItem("jsonwebtoken");
    if (token!=null) {
      idUser = jwtDecode(token);

      axios.delete(`https://warehouse-management-api.vercel.app/v1/blog/comment/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            idComment: idComment,
          },
        }).then((res) => {
          // getComment(idBlog)
        }).catch((e) => {
          console.log(`add comment error ${e}`);
        });
    }else{
      alert("bạn chưa đăng nhập!")
      navigation("/Login")
    }
  };

  return (
    <div
      className="d-flex"
      style={{ width: "100%", height: "100vh", background: "#f5f5fa" }}
    >
      <div className="category-containers">
        <h4>Chi tiết bài đăng</h4>
        {detailBlog != "" ? (
          <>
            <Card
              hoverable
              style={{ width: "100%" }}
              bodyStyle={{ padding: 0, overflow: "hidden" }}
            >
              <Flex justify="space-between">
                <div
                  className=""
                  style={{ width: "450px", height: "450px", padding: "10px" }}
                >
                  <SilderComponent arrImages={detailBlog.images} />
                </div>
                <div style={{ width: "100%" }}>
                  <Typography.Title level={3}>
                    {detailBlog.description}
                  </Typography.Title>
                  <div className="">
                    <i
                      class="fa-solid fa-warehouse"
                      style={{ color: "#16247d" }}
                    ></i>
                    <text style={{ color: "#16247d", marginLeft: "2px" }}>
                      Mã kho:
                    </text>
                    <text style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {detailBlog.warehouse._id}
                    </text>
                  </div>
                  <hr />
                  <div className="">
                    <i
                      class="fa-solid fa-map-location-dot"
                      style={{ color: "#16247d" }}
                    ></i>
                    <text style={{ color: "#16247d", marginLeft: "2px" }}>
                      Địa chỉ kho:
                    </text>
                    <text style={{ marginLeft: "10px" }}>
                      {detailBlog.warehouse.address}
                    </text>
                  </div>
                  <hr />
                  <div className="">
                    <i
                      class="fa-solid fa-dollar-sign"
                      style={{ color: "#16247d" }}
                    ></i>
                    <text style={{ color: "#16247d", marginLeft: "2px" }}>
                      giá thuê kho:
                    </text>
                    <text style={{ marginLeft: "10px" }}>
                      {detailBlog.warehouse.monney}
                    </text>
                  </div>
                  <hr />
                  <div className="">
                    <i
                      class="fas fa-vector-square"
                      style={{ color: "#16247d" }}
                    ></i>
                    <text style={{ color: "#16247d", marginLeft: "2px" }}>
                      diện tích hiện tại của kho:
                    </text>
                    <text style={{ marginLeft: "10px" }}>
                      {detailBlog.warehouse.capacity}
                    </text>
                  </div>
                  <hr />
                  <div className="">
                    <i
                      class="fa-solid fa-glass-water-droplet"
                      style={{ color: "#16247d" }}
                    ></i>
                    <text style={{ color: "#16247d", marginLeft: "2px" }}>
                      diện tích còn lại của kho:
                    </text>
                    <text style={{ marginLeft: "10px" }}>
                      {detailBlog.warehouse.currentCapacity}
                    </text>
                  </div>

                  {/* <Button
                    type="primary"
                    href="#"
                    target="_blank"
                    style={{ top: "20px" }}
                  >
                    Get Started
                  </Button> */}
                </div>
              </Flex>
            </Card>
            <div class="container mt-2">
              <div class="row  d-flex justify-content-center" style={{ marginBottom: 20 }}>
                <div class="col-md-8">
                  <div class="headings d-flex justify-content-between align-items-center mb-3">
                    <h5>Bình luận</h5>
                  </div>
                 <form class="input-group mb-3" onSubmit={addComment}>
                    <input type="text" class="form-control" placeholder="comment" aria-label="Username" value={message} aria-describedby="basic-addon1" onChange={e => setMessage(e.target.value)} />
                    <div class="input-group-prepend">
                      <button class="input-group-text" id="basic-addon1">Nhập bình luận</button>
                    </div>
                  </form>
                 
                  {comment ? (comment.length > 0 &&
                    comment.map((item, index) => {
                      return (
                        <div class="card p-3">
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="user d-flex flex-row align-items-center">
                              <img src={item.account.avatar} width="30" height="28" class="user-img rounded-circle mr-2" />
                              <span>
                                <small class="font-weight-bold text-primary">{item.account.username}</small>
                              </span>
                            </div>
                          </div>
                          <div class="action d-flex justify-content-between mt-2 align-items-center">
                            <div class="reply px-4">
                              <small class="font-weight-bold" style={{ marginLeft: 14 }}>{item.content}</small>
                            </div>
                            <div class="icons align-items-center">
                              {idUser ? (idUser.id.includes(item.account._id) && <button type="button" class="btn btn-primary" 
                              onClick={() => {
                                if (window.confirm("Bạn có muốn bình luận này không ?")) {
                                  deleteComment(item._id)
                              }}}
                              >
                                Xóa</button>):""}
                              <i class="fa fa-check-circle-o check-icon"></i>
                            </div>
                          </div>
                        </div>
                      )
                    })) : (<></>)}
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

    </div>
  );
};

export default DetailsBlogPage;
