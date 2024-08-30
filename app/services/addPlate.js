
import axios from 'axios';
const apiUrl='https://express-rta.vercel.app'
const url =`${apiUrl}/add-plate`

  export const addPlate= async ( report_no, plate_no, plate_source,removed ) => {

    const period =localStorage.getItem('period')
   const response = await axios.get(url,{
     params: { 
        report_no:report_no,
        plate_no:plate_no,
        plate_source:plate_source,
        removed:removed
    } });
   return response.data;
 };