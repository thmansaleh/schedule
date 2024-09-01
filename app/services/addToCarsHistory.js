
import axios from 'axios';
const apiUrl='https://express-rta.vercel.app'
const url =`${apiUrl}/add-driver-to-cars-history`

  export const addToCarsHistory= async (id,nida,jobId,position) => {

    const period =localStorage.getItem('period')
   const response = await axios.get(url,{
     params: {
      id:id?id:null,
       nida:nida,
       job_id:jobId,
       period:period,
       position:position
      } });
   return response.data;
 };