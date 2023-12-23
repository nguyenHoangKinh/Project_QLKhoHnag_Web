import { useState, useEffect, useContext } from "react";
import { Image } from "antd";
import { UserContext } from "../context/UserContext";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { EnvironmentOutlined, EnvironmentTwoTone } from "@ant-design/icons";
import CategoryWarehouse from "./CategoryWarehouse";
import DetailsBlogPage from "./DetailsBlogPage";

const ListBlog = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const { loadingData,DetailBlog, ListBlog, ListBlogs } = useContext(UserContext);
  const navigation = useNavigate();
  useEffect(() => {
    //call api
    ListBlog(Token);
  }, []);
const DetaiBolg = (item) => {
  DetailBlog(item._id)
  setTimeout(() => {
    navigation("/DetailsBlogPage", {
      state: { item },
    })
  }, 700)
  
}
  return (
    <div
      className="category-containers"
      style={{ width: "60%", height: "20px" }}
    >
      <h1 className="text-center">List Blog</h1>
      <div className="row">
        <div className="col-3 border-end">
          
        </div>
        <div className="col" style={{}}>
          {ListBlogs &&
            ListBlogs.length > 0 &&
            ListBlogs.map((item, index) => {
              return (
                <div
                  className=""
                  style={{ marginLeft: "13px", marginTop: "8px" }}
                >
                  <div className="row">
                    <div
                      className="col-md-6 border border-primary ps-0 pe-0"
                      style={{ width: "200px", height: "200px" }}
                    >
                      <Image width="100%" height="100%" src={item.images[0]} />
                    </div>
                    <aside
                      onClick={() => {
                        DetaiBolg(item)
                      }}
                      className="col-sm-6 border border-primary"
                    >
                      <div className="info-aside text-break">
                        <div className="price-wrap text-start">
                          <view className="price"> {item.description} </view>
                          <div className="">Giá:~{item.warehouse.monney}</div>
                          <div className="">
                            Diện tích: {item.warehouse.capacity}
                          </div>
                          <div className="">
                            <EnvironmentTwoTone />
                            {item.warehouse.address}
                          </div>
                        </div>
                        <br />
                        {/* <h4 className="text-center">{item.money}$ </h4> */}
                        {/* <p>
                        <button
                          className="btn btn-primary btn-block"
                          onClick={() => {
                            navigation("/InformationWarehouse", {
                              state: { item },
                            });
                          }}
                        >
                          Xem Chi Tiet
                        </button>
                      </p> */}
                      </div>
                    </aside>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
