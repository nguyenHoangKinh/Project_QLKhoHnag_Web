import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {CategoryWarehouseList} from '../services/CategoryWarehouseService';
import axios from 'axios';

const CategoryWarehouse = () => {
    const [ListCategory, setListCategory] = useState([]);
    useEffect(()=>{
        //call api
        axios.get('https://warehouse-management-api.vercel.app/v1/warehouse/category/list').then(categories =>{
            console.log("check",categories);
        } );
    },[]);
    // const getCategory = async () => {
    //     let res = await CategoryWarehouseList(); 
    //     if(res && res.categories){
    //         setListCategory(res.categories);
    //     }
    //     // console.log(">>>check ",res);
    // };
  return (
    <ListGroup>
    {/* {ListCategory && ListCategory.length > 0 && ListCategory.map((item,index) => {
        return ( */}
            {/* <ListGroup.Item>{item.name}</ListGroup.Item> */}
        {/* )
    })} */}
    </ListGroup>
  );
}

export default CategoryWarehouse;