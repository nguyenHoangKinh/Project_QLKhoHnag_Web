import { useState, useEffect, useContext } from "react";
import { Image } from "antd";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { EnvironmentOutlined } from "@ant-design/icons";

const ListBlog = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const { loadingData, ListBlog, ListBlogs } = useContext(UserContext);
  const navigation = useNavigate();

  useEffect(() => {
    // Gọi API hoặc thực hiện các công việc khởi tạo khác
    ListBlog(Token);
  }, []);

  return (
    <div className="category-containers">
      <h1 className="text-center">List Blog</h1>
      <div className="">
        {/* <Container>
          <Row>
            {ListBlogs &&
              ListBlogs.length > 0 &&
              ListBlogs.map((item, index) => (
                <Col key={index} md={6} lg={4} className="mb-4">
                  <div className="card border-0 shadow  p-2 my-2 w-100">
                    <a href="#">
                      <Image className="cobject-fit-fill border rounded scale-on-hover w-100 "  height={150} alt={item.title} src={item.images[0]} />
                    </a>
                    <div className="card-body">
                      <h6><a href="#">{item.title}</a></h6>
                      <div className="">
                        Diện tích: {item.warehouse.capacity}
                        </div>
                        <div className="">
                        Giá:~{item.warehouse.monney}
                        </div>
                        <div className="">
                        <EnvironmentOutlined />
                        {item.warehouse.address}
                        </div>
                      <p className="text-muted card-text">{item.description}</p>
                    </div>
                      <button className="btn-primary mx-1 p-2 rounded  " onClick={() => navigation("/blog-details/" + item.id)}>View More</button>
                  </div>
                </Col>
              ))}
          </Row>
        </Container> */}
          {ListBlogs &&
              ListBlogs.length > 0 &&
              ListBlogs.map((item, index) => (
         <div className="m-10">
                <div
                  // onClick={() => {
                  //   navigation("/InformationWarehouse", {
                  //     state: { item },
                  //   });
                  // }}
                  className="row"
                >
                  <div className="col-md-6 border border-primary ps-0 pe-0">
                      <Image
                        width="100%"
                        height="100%"
                        src={item.images[0]}
                      />
                  </div>
                  <aside className="col-sm-6 border border-primary">
                    <div className="info-aside text-break">
                      <div className="price-wrap text-start">
                        <view className="price"> {item.description} </view>
                        <div className="">
                        Giá:~{item.warehouse.monney}
                        </div>
                        <div className="">
                        Diện tích: {item.warehouse.capacity}
                        </div>
                        <div className="">
                        <EnvironmentOutlined />
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
              </div>    ))}
      </div>
    </div>
  );
};

export default ListBlog;
