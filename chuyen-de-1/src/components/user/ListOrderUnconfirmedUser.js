import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Header from '../HomeHeader';
import Navbar from '../HomeNavbar';
import Footer from '../HomeFooter';
import ListOrderUser from "./ListOrderUser";

const ListOrderUnconfirmed = () => {
  const navigation = useNavigate();
  let Token = localStorage.getItem("jsonwebtoken");
  const { loadingData, orderListOwner, ListOrderOwner } = useContext(UserContext);

  //console.log(ListOrderOwner);

  return (
    <>
      <Header />
      <Navbar />
      <ListOrderUser/>
      <Footer />
    </>
  );
};

export default ListOrderUnconfirmed;
