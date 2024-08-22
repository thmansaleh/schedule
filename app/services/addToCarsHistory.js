
import axios from 'axios';
//  const url ="https://express-rta.vercel.app/add-car-history"
const apiUrl='https://express-rta.vercel.app'
const url =`${apiUrl}/add-car-history`

  export const addToCarsHistory= async (nida,jobId,) => {

    const period =localStorage.getItem('period')
   const response = await axios.get(url,{
     params: {
       nida:nida,
       job_id:jobId,
       period:period
      } });
   return response.data;
 };