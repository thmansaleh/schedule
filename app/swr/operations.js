'use client'

import axios from 'axios';

import useSWR from 'swr'

export function operations(){
 const url ="https://express-rta.vercel.app/get-operations"
  const fetchProduct = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetchProduct)
return {
  data,
  isLoading,
   error
}


}