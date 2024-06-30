"use client"
import Link from  "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCurrentDrivers } from "../store/features/drivers";

export default function Table({drivers}){
  const dispatch=useDispatch()
  const [data,setData]=useState([])
  const [serachdrivers,setSeaarch]=useState([])
  useEffect(()=>{
    dispatch(setCurrentDrivers(drivers))
    setData(drivers)
    setSeaarch(drivers)

    return ()=>{

    }
  },[drivers])
  const notify = () =>{
    toast.warn('  يرجئ التواصل مع مطور النظام لتفعيل هذة الخاصية!', {
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

  const serach=(value)=>{
//   const newSearch= //serachdrivers.filter(e=> //e.name.startsWith(value))
  // setData(newSearch)


const newSearch = serachdrivers.filter(name => name.name.toLowerCase().includes(value.toLowerCase()) || name.phone.includes(value) || name.job_id.includes(value)


);


setData(newSearch)


  }
return <>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

 />

<div className="flex items-center justify-around h-24 sticky top-0 z-30 bg-white">
    <div className="relative flex">
      <input onChange={(e)=>serach(e.target.value)} type="search" className="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none " placeholder="بحث ,الاسم ,رقم الهاتف, الرقم المالي" />
    
    </div>
    <button onClick={notify} className="p-2 rounded-lg bg-green-400 text-white">إضافة خبير سير </button>
  </div>
<div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
  <table className="text-center  w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-center  text-base text-gray-700 uppercase bg-gray-50 ">
<tr className="sticky top-0 w-full">
        <th scope="col" className="p-3 font-semibold">
       #
        </th>

        <th scope="col" className="px-6 py-3">
          الاسم
        </th>
        <th scope="col" className="px-6 py-3">
          فترة العمل
        </th>
        <th scope="col" className="px-6 py-3">
          الشفت
        </th>
        <th scope="col" className="px-6 py-3">
          
        </th>
      </tr>
    </thead>
    <tbody className="text-md text-center text-black">



{data.map((e,i)=>{
  
const url =`drivers/${e.id}`
return <tr key={i} className="border-b ">
        <th scope="row" className="p-2 font-semibold">
       {i+1}
        </th>
        <th scope="row" className="py-4 font-medium  whitespace-nowra">
          {e.name}
        </th>
        <td className="px-6 py-4 relative">
          {e.duty}
{e.status=="false"&&<span class="rounded-full w-3 h-3 bg-yellow-600 absolute top-3 left-0"></span>
}
        </td>
        <td className="px-6 py-4">
          {e.shift}
        </td>
        <td className=" ">

        
<Link key={e.id} href={url} className="font-medium text-white bg-blue-600 rounded-lg py-2 px-4">عرض</Link>
        </td>
        
      </tr>
})}

    </tbody>
  </table>
</div>
</>

}