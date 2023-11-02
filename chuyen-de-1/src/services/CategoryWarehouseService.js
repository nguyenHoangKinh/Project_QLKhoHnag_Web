import axios from 'axios';
import { BASE_URL } from '../config';

const CategoryWarehouseList = (token) => {
   return axios.get(BASE_URL+'/category/list', {
      headers: {
         token: token
      }
   });
  
}
export {CategoryWarehouseList};