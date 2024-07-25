"use client"

import Admins from "./Admins";
import Operations from "./Operations";
import  Save from  "./Save"

import Holiday from "./Holiday"

import { useSearchParams } from 'next/navigation'
import { swrDrivers } from "../swr/drivers";
import ShiftTable from "./ShiftTable";
import Header from "./Header";
import Notes from "./Notes";
import { Spinner } from "flowbite-react";
import BackArrowBtn from "../components/BackArrowBtn";
export default  function Schedule(){
  const {data,error,isLoading} =    swrDrivers()
  const searchParams = useSearchParams()
  const shiftOffId = searchParams.get('shift-off-id')


     

if(isLoading) return <div className="fixed flex items-center justify-center gap-x-4 inset-0">
  <h1 className="text-md font-semibold text-gray-700 text-center my-5">جاري التحميل </h1>
  <Spinner color="success" aria-label="Success spinner example" />

  </div>
if(error) return 'error............'
      return <>

<BackArrowBtn/>

    <div id="schedule">



<Header/>



<ShiftTable
 driverData={data}
  dutyId='1'
  time='من 5 الى 13'
   shiftOffId={shiftOffId}
   name='الفترة الصباحية'
   />
<ShiftTable
 driverData={data}
  dutyId='2'
  time='من 13 الى 21'
   shiftOffId={shiftOffId}
   name='الفترة المسائية'
   />
<ShiftTable
 driverData={data}
  dutyId='3'
  time='من 21 الى 5'
   shiftOffId={shiftOffId}
   name='الفترة الليلية'
   />
   <Operations workPlace='police' title='أفراد عمليات الشرطة' className='relative bg-green-500 text-white  overflow-x-auto'/>
<Operations workPlace='rta' title='أفراد عمليات RTA' className='relative bg-red-500 text-white  overflow-x-auto'/>
   <Admins/>

   <Holiday shiftOffId={shiftOffId}/>
   <Notes/> 




    </div>
<Save  />
  </>
}