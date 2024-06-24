"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {driverDetails} from "@/app/services/driverDetails"
import {duty} from "@/app/services/duty"
import { login } from "@/app/services/login"
import { shifts }  from "@/app/services/shifts"
import {updateDriver} from  "@/app/services/updateDriver"
import {useState,useRef, useEffect} from "react"
export default  function Content({id}){
    
const [driver,setDriver]=useState([])
const [oldDriver,setOldDriver]=useState()
const [dutys,setDutys]=useState([])
const [shiftsState,setShifts]=useState([])
const updateBtn =useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      const detailsId = await driverDetails(id)
const fetchDuty = await duty()
const fetchShifts= await shifts()
const logggin= await login('othman','1234')
console.log(logggin)
setShifts(fetchShifts)    
      setDriver(detailsId[0])
      setOldDriver(detailsId[0])
setDutys(fetchDuty)   
    }
    fetchData()
    return () => {

    }

  },[])
 useEffect(()=>{


if(driver!=oldDriver){

updateBtn.current.style.display="block"
}else{
updateBtn.current.style.display="none"

}

},[driver])



const update= async ()=>{

const updateD = await updateDriver(driver)
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



const deleteDriver=()=>{
toast.error('ليس لديك الصلاحية لحذف المستخدم', {
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




<div className="py-4">
  <div className="flex flex-col gap-2 items-center justify-center ">
    <svg className="w-16 h-16 fill-gray-400" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-.164c0-2.206,1.794-4,4-4s4,1.794,4,4v.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm9.925-1.113c-.456-2.859-2.939-5.051-5.925-5.051s-5.468,2.192-5.925,5.051c-2.47-1.823-4.075-4.753-4.075-8.051C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.298-1.605,6.228-4.075,8.051Zm-5.925-15.051c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z" /></svg>
    <div>{driver.name}</div>



<div class="py-2 text-sm text-center text-gray-700">الرقم المالي : <span class="text-green-600 font-semibold">{driver.jobId}</span></div>




  </div>
  <div className="p-4 space-y-4">







 <div>
      <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم </label>
      <input
       onChange={(e)=>{
         setDriver((driver)=>({...driver,name:e.target.value}))
         // driver.name=e.target.value
         
      }} value={driver.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" />
    </div>





    <div>
      <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">حالة المستخدم</label>
      <select

    onChange={(e)=>{
        driver.status=e.target.value
        setDriver((driver)=>({...driver,status:e.target.value}))      }}
       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
       {[{name:"فعال":,value:"true"},name:"غير فعال":,value:"false"}].map((e,i)=>{
        if(driver.status==e.value){
          return  <option selected value={e.value}>{e.name}</option>
        }else{ return <option  value={e.value}>{e.name}</option>
}

       })}
      </select>
    </div>
    <div>
      <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الشفت</label>




      <select onChange={(e)=>{
        driver.shift_id=e.target.value
        setDriver((driver)=>({...driver,shift_id:e.target.value}))
      }}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
       {
shiftsState.map((e,i)=>{

if(e.id===driver.shift_id) return <option  selected key={i} value={e.id}>{e.name}</option>

return <option  key={i} value={e.id}>{e.name}</option>
})}

      </select>


    </div>
    <div>
      <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">فترة العمل</label>

      <select 
       onChange={(e)=>{
        // driver.duty_id=e.target.value
        setDriver((driver)=>({...driver,duty_id:e.target.value}))
      }}

      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
       {
dutys.map((e,i)=>{

if(e.id===driver.duty_id) return <option  selected key={i} value={e.id}>{e.name}</option>

return <option  key={i} value={e.id}>{e.name}</option>
})}

      </select>




    </div>
    <div>
      <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الهاتف</label>
      <input
       onChange={(e)=>{
         setDriver((driver)=>({...driver,phone:e.target.value}))
         // driver.phone=e.target.value
         console.log(driver)
      }} value={driver.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" />
    </div>


   <button className=" hidden bg-green-400  text-white   text-sm rounded-lg w-full p-2.5 " 
ref={updateBtn}
 onClick={update}
   >تحديث</button>
  
  


    <button onClick={deleteDriver} className="rounded-lg my-4 p-2 px-4 bg-red-400 text-white">حذف </button>
    
  </div>
</div>
</>
}