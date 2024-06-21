'use client'
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 
const URL =  'https://express-rta.vercel.app:443';


// export const socket = io(URL);
function Content() {
    const element = useRef(null)
   const socket = io(URL);
   useEffect(() => {
socket.on('connect', () => {
      console.log('Connected to server');
    });









     socket.on('getLocation',(data)=>{
console.log(data)
element.current.innerText=data
     }
     
    
    )
   
     return () => {
    //    socket.disconnect()
     }
   }, [])
    function showLocation(){
socket.emit('sendRtToSeeLocation')
    }

  return <div className='my-5 p-4 text-center space-y-5'>
    <button className='w-1/2 bg-black text-white py-3 rounded-md' onClick={()=>showLocation()}> عرض الموقع</button>
    <h1 ref={element}></h1>
  </div>
}

export default Content