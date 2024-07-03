'use client'

import axios from 'axios';




export const addNote = async (userId, note) => {
    const date =new Date().toLocaleString()
     const url =`https://saba.cc/schedule/add-note.php?user_id=${userId}&note=${note}&date=${date}`
   const response = await axios.get(url);
   return response.data;
 };





