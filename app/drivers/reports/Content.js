
'use client'
import { date } from "@/app/services/date";
import { Button, Datepicker, Spinner } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import InformationModal from "./Modal";
import BackArrowBtn from "@/app/components/BackArrowBtn";
import Table from "./Table";
import { getDriverReports } from "@/app/services/getDeriverReports";

export default function Content() {
  const userId=useSearchParams().get('user_id')
  const [driverReports,setDriverReports]=useState(false)
  const [loading,setLoading]=useState(false)
  const [massage,setMassage]=useState('')
  const [start,setStart]=useState(false)
  const [end,setEnd]=useState(false)


  const getReprts= async()=>{
    if( !start || !end) {
      setMassage('يرجئ اختيار التاريخ')
      return null
    }

    setLoading(true)
   const data= await getDriverReports(start,end,userId)
   setLoading(false)

  if(data.length>0) {
    console.log('from sknkf',data)
    setDriverReports(data)
    // console.log(JSON.parse(data.reports))
    setMassage('')

  }else{
    setDriverReports(false)
    setMassage('لاتوجد احداث')

// setMassage(true)
  }
}
  return <>
  <BackArrowBtn/>
<h2 className="text-center  text-gray-700 font-semibold text-md my-4">الأحداث</h2>
  <div className="p-3 flex flex-col gap-y-4  ">
    <div className="flex items-center gap-x-4 justify-center">
      <div>من</div>
      <Datepicker                 onSelectedDateChanged={date=>setStart(date)}
 language="en" labelTodayButton="اليوم" labelClearButton="حذف" />

    </div>
    <div className="flex items-center gap-x-4 justify-center ">
      <div>الئ</div>
      <Datepicker onSelectedDateChanged={date=>setEnd(date)} language="en" labelTodayButton="اليوم" labelClearButton="حذف" />

    </div>

    <Button onClick={getReprts} >عرض</Button>
    {loading&&<div className="flex justify-center"><Spinner aria-label="Default status example" /></div>}
    <div className="text-center font-semibold text-gray-700">{massage} </div> 
  
   {driverReports&&<Table data={driverReports}/>}
   {/* <Othman data={driverReports}/> */}
   {/* <Table data={driverReports}/> */}
    

  </div>

  
    </>
}

