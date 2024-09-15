
import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export  function swrPatrols(period){



//  const url =`https://express-rta.vercel.app/operations-cars?period=${period}`
 const url =`${apiUrl}/today-cars?period=${period}`

const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}
 
const { data , error, isLoading , mutate} = useSWR(url,fetcher)
return {
  data,
  isLoading,
   error,
   mutate
}


}
