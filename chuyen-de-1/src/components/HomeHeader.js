import React, { useState } from "react";
import { addWare } from "../WareReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import {jwtDecode}  from "jwt-decode"

import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HomeHeader() {
 let Token = localStorage.getItem("jsonwebtoken");
 let idUser = jwtDecode(Token);

 const [inputData, setInputData] = useState({
    wareHouseName: '',
    address: '',
    category: '',
    capacity: '',
    monney: '',
    status: '',
    description: '',
    owner: idUser.id
 });
 const navigate = useNavigate();

 function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        BASE_URL + `/warehouse/create`,
        inputData,
        {
          headers: {
            Authorization: `Token ${Token}`,
          },
          params: {
            id_owner: idUser.id,
          },
        }
      )
      .then((res) => {
        //setInputData(Object, res.data)
        console.log(res);
        alert("Thêm thành công");
        navigate("/HomeScreen");
      })
      .catch((err) => console.log(err));
 }

 function handleChange(event) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
 }

 return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h2>Tạo kho mới</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="wareHouseName">
              <Form.Label>Tên kho</Form.Label>
              <Form.Control
                type="text"
                name="wareHouseName"
                value={inputData.wareHouseName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={inputData.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Loại hàng</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={inputData.category}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="capacity">
              <Form.Label>Sức chứa</Form.Label>
              <Form.Control
                type="text"
                name="capacity"
                value={inputData.capacity}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="monney">
              <Form.Label>Giá thuê</Form.Label>
              <Form.Control
                type="text"
                name="monney"
                value={inputData.monney}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Tình trạng</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={inputData.status}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={inputData.description}
              onChange={handleChange}
            />
            </Form.Group>

            <Button variant="primary" type="submit">
              Tạo kho
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
 );
}

export default HomeHeader;