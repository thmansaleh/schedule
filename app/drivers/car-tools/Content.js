
'use client'
import { getDriverCars } from "@/app/services/getDriverCars";
import { Button, Datepicker } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Content() {
  const userId=useSearchParams().get('user_id')
  const [cars,setCars]=useState(false)
  const [start,setStart]=useState(false)
  const [end,setEnd]=useState(false)


  const getCars= async()=>{
   const data= await getDriverCars(userId,start,end)
   console.log(data)
  if(data) setCars(data)
  }
  return <div className="p-3 flex flex-col gap-y-4  ">
    <div className="flex items-center gap-x-4 justify-center">
      <div>من</div>
      <Datepicker                 onSelectedDateChanged={date=>setStart(date)}
 language="en" labelTodayButton="اليوم" labelClearButton="حذف" />

    </div>
    <div className="flex items-center gap-x-4 justify-center ">
      <div>الئ</div>
      <Datepicker onSelectedDateChanged={date=>setEnd(date)} language="en" labelTodayButton="اليوم" labelClearButton="حذف" />

    </div>

    <Button onClick={getCars} >عرض</Button>
    {cars?<div>
      {cars.map((e,i)=>{
        return <div key={i}>
        {e.nidaa}
        </div>
      })}
      </div>:    <div className="text-center font-semibold text-gray-700">لا توجد اي بيانات</div>
    }


  </div>
  }
