// 'use client'

import axios from 'axios';
 const url ="https://saba.cc/schedule/login.php"
  export const login= async (username,password) => {
   const response = await axios.get(url,{
     params: {
       username:username,
       password:password
      } });

   return response.data;
 };