'use client'

import axios from 'axios';

import useSWR from 'swr'


export  function swrDriver(id){

//  const url =`https://saba.cc/schedule/driver-details.php?id=${id}`
 const url =`https://express-rta.vercel.app/get-driver?id=${id}`

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
