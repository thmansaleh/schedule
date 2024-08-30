
import axios from 'axios';
const apiUrl='https://express-rta.vercel.app'
const url =`${apiUrl}/update-report`

  export const updateReport= async ( id,carStopLine,closeLinesCount,description,note ) => {

    const period =localStorage.getItem('period')
   const response = await axios.get(url,{
     params: { 
      id:id,
      // street_id:street_id,
      cars_stop:carStopLine,
      close_lines_count:closeLinesCount,
      // helper,
      description:description,
      note:note
    } });
   return response.data;
 };