'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';


export  function swrDriver(id){

//  const url =`https://saba.cc/schedule/driver-details.php?id=${id}`
 const url =`${apiUrl}/get-driver?id=${id}`

const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}

const { data , error, isLoading,mutate } = useSWR(url,fetcher)
return {
  data,
  isLoading,
   error,
   mutate
}


}
