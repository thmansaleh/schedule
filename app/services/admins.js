'use client'

import axios from 'axios';
import { apiUrl } from '../constants';




 const url =`${apiUrl}/get-admins`
 
 export const fetchAdmins = async () => {
   const response = await axios.get(url);

   return response.data;
 };

