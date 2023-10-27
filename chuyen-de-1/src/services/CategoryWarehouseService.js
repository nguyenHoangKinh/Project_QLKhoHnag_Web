import axios from 'axios';


const CategoryWarehouseList = () => {
   return axios.get('https://warehouse-management-api.vercel.app/v1/warehouse/category/list');
}
export {CategoryWarehouseList};