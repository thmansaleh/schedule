'use client'

import axios from 'axios';

import useSWR from 'swr'


export  function swrNotes(userId){

 const url =`https://express-rta.vercel.app/get-notes-by-user-id?user_id=${userId}`
  
const fetcher =async ()=>{
  const response = await axios.get(url)
  return response.data
}
 
const { data , error, isLoading } = useSWR(url,fetcher)
return {
  data,
  isLoading,
   error
}


}
