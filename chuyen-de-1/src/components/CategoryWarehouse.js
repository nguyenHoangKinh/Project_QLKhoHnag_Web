import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { CategoryWarehouseList } from "../services/CategoryWarehouseService";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const CategoryWarehouse = () => {
  // const navigate = useNavigate();
  const [ListCategory, setListCategory] = useState([]);
  useEffect(() => {
    //call api
    let name = localStorage.getItem("jsonwebtoken");
    // console.log("CategoryWarehouse:", CategoryWarehouseList(name).then(rea => {
    //   console.log("CategoryWarehouse",rea.data.categories);
    // }));
   CategoryWarehouseList(name).then((res) => {
     if (res && res.data && res.data.categories) {
        console.log("category: ", res.data.categories);
        setListCategory(res.data.categories);
      }
    });
  }, []);
  const getCategory = async (name) => {

    
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
    </div>
  );
};

export default CategoryWarehouse;
