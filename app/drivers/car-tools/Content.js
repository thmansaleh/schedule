
'use client'
import { date } from "@/app/services/date";
import { getDriverCars } from "@/app/services/getDriverCars";
import { Button, Datepicker, Spinner, Table } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import InformationModal from "./Modal";
import BackArrowBtn from "@/app/components/BackArrowBtn";
import { getDriverCarsHistory } from "@/app/services/getDriverCarsHistory";

export default function Content() {
  const userId=useSearchParams().get('user_id')
  const [cars,setCars]=useState(false)
  const [loading,setLoading]=useState(false)
  const [massage,setMassage]=useState(false)
  const [start,setStart]=useState(false)
  const [end,setEnd]=useState(false)

useEffect(() => {
  setStart(date())
  setEnd(date())
  return () => {
    
  }
}, [])

  const getCars= async()=>{
    setLoading(true)
    const startDateObj = new Date(start);
    startDateObj.setDate(startDateObj.getDate() + 1);
    const startDate=startDateObj.toISOString().split('T')[0] 
    const endDateObj = new Date(end);
    endDateObj.setDate(endDateObj.getDate() + 1);
    const endtDate=endDateObj.toISOString().split('T')[0] 


   const data= await getDriverCarsHistory(userId,startDate,endtDate)
   setLoading(false)

  if(data) {
    setCars(data)
    setMassage(false)

  }else{
    setCars(false)

setMassage(true)
  }
}
  return <>
  <BackArrowBtn/>
  <h2 className="text-center  text-gray-700 font-semibold text-md my-4">سجلات التسليم</h2>

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

    <Button onClick={getCars} >عرض</Button>
    {loading&&<div className="flex justify-center"><Spinner aria-label="Default status example" /></div>}
    {massage&&<div className="text-center font-semibold text-gray-700">لا توجد اي بيانات</div> }
    {cars&&<div>
      <Table className="text-center">
        <Table.Head >
          <Table.HeadCell>الدورية</Table.HeadCell>
          <Table.HeadCell>التمركز</Table.HeadCell>
          <Table.HeadCell>التاريخ</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {cars.map(e=>{
       return   <Table.Row className="bg-white dark:border-gray-700 ">
       <Table.Cell className=" font-md text-gray-900">
        {e.nida}
       </Table.Cell>
       <Table.Cell>{e.station}</Table.Cell>
       <Table.Cell>{new Date(e.date).toLocaleString()}</Table.Cell>
       </Table.Row>
      })}
 

            </Table.Body>
      </Table>


      {/* <table class="table-fixed">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
  {cars.map(e=>{
       return  <tr>
       <td>Shining Star</td>
       <td>Earth, Wind, and Fire</td>
       <td>1975</td>
     </tr>
      })}
  <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table> */}

     
      </div>   
    }

    

  </div>

  
    </>
}

