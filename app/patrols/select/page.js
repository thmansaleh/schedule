'use client'
import BackArrowBtn from '@/app/components/BackArrowBtn';
import { Button, Label, Select } from 'flowbite-react'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function page() {
    const [period,setPeriod]=useState(false)
    const router=useRouter()
return <>
  <BackArrowBtn/>

<div className='items-center  justify-center flex   fixed inset-0'>
          <ToastContainer/>
          

    <div className=" w-64  flex justify-center flex-col gap-y-7">
        <div className='text-gray-700 text-sm text-center font-semibold'>تسليم الدوريات</div>
      <Select onChange={e=>setPeriod(e.target.value)} id="countries" required>
        <option  value={false}>الفترة</option>
        <option value='الصباحية'>الصباحية</option>
        <option value='المسائية'>المسائية</option>
        <option  value='الليلية'>الليلية</option>
      </Select>
<Button gradientMonochrome="success" onClick={()=>{
  if(period){
    localStorage.setItem('period',period)
    router.push(`.?period=${period}`)
    
  }else{
    toast.warning('اختر الفترة', {
      position: "bottom-center",
      hideProgressBar: false,
      closeOnClick: true,
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      rtl:true,
      progress: undefined,
      theme: "light"
    });
  }
}}>التالي</Button>
 </div> 
</div>
</>
}

export default page