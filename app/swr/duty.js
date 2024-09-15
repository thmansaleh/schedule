'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function duty(){
 const url =`${apiUrl}/get-duties`
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