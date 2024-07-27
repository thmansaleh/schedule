import { updateDriver } from '@/app/services/updateDriver'
import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateBtn({driver}) {
    const data =useSelector(state=>state.driver.updateDriver)
    console.log('orignal',driver)
    console.log('upart',data)

const update= async ()=>{

const update = await updateDriver(driver.id,data)
toast.success('تم التحديث بنجاح', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
});
}


    if(
        data.name===driver.name&
        data.phone===driver.phone&
        data.duty===driver.duty_id&
        data.status===driver.status&
        data.shift===driver.shift_id
    ) return null

  return <>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={true}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
    <button onClick={update} className="  bg-green-400  text-white   text-sm rounded-lg w-full p-2.5 " 
 
 >تحديث</button>  
 </>
}

export default UpdateBtn