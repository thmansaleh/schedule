'use client'

import axios from 'axios';




export const addNote = async (userId, note) => {
  console.log(userId,note)
    const date =new Date().toLocaleString()
     const url =`https://express-rta.vercel.app/add-note?user_id=${userId}&note=${note}&date=${date}`
    //  const url =`https://saba.cc/schedule/add-note.php?user_id=${userId}&note=${note}&date=${date}`
   const response = await axios.get(url);
   return response.data;
 };





