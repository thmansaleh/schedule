'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';


export  function swrNotes(userId){

 const url =`${apiUrl}/get-notes-by-user-id?user_id=${userId}`
  
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
