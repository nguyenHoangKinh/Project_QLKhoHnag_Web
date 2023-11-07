import axios from 'axios';
import ListGroup from "react-bootstrap/ListGroup";
import React,{ useEffect, useState,useContext } from "react";
import {UserContext} from '../context/UserContext';
import { BASE_URL } from "../config";
import { Logout } from "../context/UserContext";
import { Alert } from "bootstrap";

const CategoryWarehouse = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const {Logout} = useContext(UserContext);
  const [ListCategory, setListCategory] = useState([]);
  useEffect(() => {
    //call api
    axios.get(BASE_URL+'/warehouse/category/list', {
      headers: { 
        Authorization: `Token ${Token}` 
      }
   }).then((res) => {
    if (res && res.data && res.data.categories) {
       setListCategory(res.data.categories);
     }
   }).catch((error)=>{
    Alert.Alert(error.message);
   });
  }, []);
  const LogoutToken = () => {
    Logout(Token);
  };
  return (
    <div className="category-containers">
    <ListGroup className="category-row">
      {ListCategory &&
        ListCategory.length > 0 &&
        ListCategory.map((item, index) => {
          return <ListGroup.Item className="category-item">{item.name}</ListGroup.Item>;
        })}
    </ListGroup>
    <button onClick={LogoutToken}>Logout</button>
    </div>
  );
};

export default CategoryWarehouse;
