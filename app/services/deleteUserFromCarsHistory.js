
import axios from 'axios';
import { apiUrl } from '../constants';
//  const url ="https://express-rta.vercel.app/delete-user-from-cars-histpry"

const url =`${apiUrl}/delete-user-from-cars-histpry`

  export const deleteUserFromCarsHistory= async (id,position) => {
    // const period =localStorage.getItem('period')

   const response = await axios.get(url,{
     params: {
        id:id,
        position:position,
      } });
// console.log(response.data)
   return response.data;
 };