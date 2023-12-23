import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Header from './HomeHeader';
import Navbar from './HomeNavbar';
import Footer from './HomeFooter';
import ListOrder from "./ListOrder";
import '../theme/ListOrder.css';
const ListOrderPendingPaymentUser = () => {
  const navigation = useNavigate();
  let Token = localStorage.getItem("jsonwebtoken");
  const { loadingData, orderListOwner, ListOrderOwner } = useContext(UserContext);

  //console.log(ListOrderOwner);

  return (
    <>
      <Header />
      <Navbar />
      <ListOrder/>
      <Footer />
    </>
  );
};

export default ListOrderPendingPaymentUser;
