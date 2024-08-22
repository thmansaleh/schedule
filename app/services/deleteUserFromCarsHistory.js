
import axios from 'axios';
//  const url ="https://express-rta.vercel.app/delete-user-from-cars-histpry"
const apiUrl='https://express-rta.vercel.app'

const url =`${apiUrl}/delete-user-from-cars-histpry`

  export const deleteUserFromCarsHistory= async (jobId) => {
    const period =localStorage.getItem('period')

   const response = await axios.get(url,{
     params: {
        job_id:jobId,
        period:period,
      } });
// console.log(response.data)
   return response.data;
 };