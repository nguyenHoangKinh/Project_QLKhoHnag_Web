import axios from 'axios';

const CategoryWarehouseList = (token) => {
   return axios.get('https://warehouse-management-api.vercel.app/v1/warehouse/category/list', {
      headers: {
         token: token
      }
   });
  
}
export {CategoryWarehouseList};