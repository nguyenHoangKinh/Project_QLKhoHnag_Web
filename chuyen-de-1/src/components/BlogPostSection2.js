// BlogPostsSection2.js
import { useState, useEffect, useContext } from "react";
import React from "react";
import Card from "./Card"; // Adjust the path based on your project structure
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import CategoryWarehouse from "./CategoryWarehouse";

const BlogPostsSection2 = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const { loadingData, DetailBlog, ListBlog, ListBlogs } =
    useContext(UserContext);
  const navigation = useNavigate();
  console.log(ListBlogs);
  //functions List blog
  useEffect(() => {
    //call api
    ListBlog();
  }, []);
  return (
    <section>
      <div className="container mt-4 py-5">
        <div className="section-header">
          <h2>Recent Blog Posts</h2>
          <p>
            Consequatur libero assumenda est voluptatem est quidem illum et
            officia imilique qui vel architecto accusamus fugit aut qui
            distinctio
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-9">
            <div className="row row-cols-2 row-cols-md-3 g-4">
              {ListBlogs &&
                ListBlogs.length > 0 &&
                ListBlogs.map((card, index) => (
                    
                  <div key={card._id} className="col">
                  {console.log(card)}
                    <Card data={card}/>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="text-capitalize border-bottom border-3 pb-2 fs-1 text-opacity-75 mb-4 border-primary border-opacity-75">
              read more
            </h2>
            <div className="row row-cols-md-1 container g-3">
            <CategoryWarehouse/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostsSection2;
