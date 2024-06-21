"use client"

import Admins from "./Admins";
// import Header from "./Header";
import Operations from "./Operations";
import  Save from  "./Save"

import Holiday from "./Holiday"

import { useSearchParams } from 'next/navigation'
// import { useEffect, useState } from "react";
import { swrDrivers } from "../swr/drivers";
import ShiftTable from "./ShiftTable";
import Header from "./Header";
import Tools from "./Tools";
export default  function Schedule(){
  const {data,error,isLoading} =    swrDrivers()


  // const [drivers,setDrivers]=useState([])
  const searchParams = useSearchParams()
  const shiftOffId = searchParams.get('shift-off-id')


     

if(isLoading) return 'loading............'
if(error) return 'eroor............'
      return <>


    <div id="schedule">


    <Tools/>

<Header/>



<ShiftTable
 driverData={data}
  dutyId='1'
  time='من 5 الى 1'
   shiftOffId={shiftOffId}
   name='الفترة الصباحية'
   />
<ShiftTable
 driverData={data}
  dutyId='2'
  time='من 1 الى 21'
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



{/* 

<Holiday shiftOffId={shiftOffId}/> */}

    </div>
<Save  />
  </>
}