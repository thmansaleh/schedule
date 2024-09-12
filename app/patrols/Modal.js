
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { swrDrivers } from "../swr/drivers";
import { swrPatrols } from "../swr/patrols";
import { addToCarsHistory } from "../services/addToCarsHistory";
import { deleteUserFromCarsHistory } from "../services/deleteUserFromCarsHistory";


export default function CarModal({car}) {
  const period=localStorage.getItem('period')
  const [openModal, setOpenModal] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const { data , error, isLoading, } = swrDrivers()
  const { mutate } = swrPatrols(period)

  if(error) return 'errore'

const serach=(value)=>{
 if(value.length>1){
  const newSearch = data.filter(driver => 
    driver.name.toLowerCase().includes(value.toLowerCase()) || 
    driver.phone.toString().includes(value) || 
    driver.job_id.toString().includes(value)
  )
  setDrivers(newSearch)
 }

}

const addDriver=async (jobId,position)=>{
  await addToCarsHistory(car.car_history_id,car.nida,jobId,position)
  setOpenModal(false)
    mutate()
  setDrivers([])

}


const deleteDriver=async(position)=>{
 await deleteUserFromCarsHistory(car.car_history_id,position)
 mutate()
 setOpenModal(false)

}
  return (
    <>
    <div  onClick={() => setOpenModal(true)} className="flex items-center gap-x-3">
    <svg className={car.is_match?'fill-green-600 w-6 h-6':' fill-gray-500 w-6 h-6'} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M96,24a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,24Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16v-8H80v8a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V120H16a8,8,0,0,1,0-16H27.36L54.75,56.06A16,16,0,0,1,68.64,48H187.36a16,16,0,0,1,13.89,8.06L228.64,104H240A8,8,0,0,1,248,112ZM88,144a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H80A8,8,0,0,0,88,144Zm120,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h24A8,8,0,0,0,208,144Zm2.21-40L187.36,64H68.64L45.79,104Z"></path></svg>
<div className=" text-sm font-semibold text-gray-900">{car.nida}</div>
</div>
   
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header ></Modal.Header>
        <Modal.Body>
<div className="flex items-center flex-col gap-y-3 justify-center">
  <input onChange={e=>serach(e.target.value)} type="text" className="bg-gray-50 border focus:border-gray-800 border-gray-300 focus:ring-gray-800 text-gray-900 text-sm rounded-lg  w-26 p-2.5  text-center" placeholder="اسم خبير السير" />

 
{drivers.length>0?<div className=" rounded-lg p-2 space-y-5">
  {drivers.map(e=>{
    return <div  key={e.job_id+Math.random()} className="flex items-center gap-x-3">
    <div className="flex-1 ">{e.name}</div>

    <Button  onClick={()=>addDriver(e.job_id,car.is_match?'extraDriver':'mainDriver')} size="xs" color="success" >
        {car.is_match?'اضافة مرافق':'اضافة سائق'}
      </Button>

  </div>
  })}
</div>:null}


{car.is_match?<div className="space-y-3">
  <div  className="flex items-center gap-x-3">
    <div className="flex-1 bg-green-600 text-white rounded-lg p-1 text-sm">
    السائق : 

      {car.driver_name}</div>
    <Button  onClick={()=>deleteDriver('mainDriver')} size="xs" color="failure" >
        حذف
      </Button>
  </div>

  {car.extra_driver_name&&  <div  className="flex items-center gap-x-3">

  <div className="flex-1 bg-green-600 text-white rounded-lg p-1 text-sm">
    المرافق:
    {car.extra_driver_name}
 
  </div>
  <Button onClick={()=>deleteDriver('extraDriver')} size="xs" color="failure" >
        حذف
      </Button>
  </div>}
  </div>:null
  }




</div>
          </Modal.Body>
        {/* <Modal.Footer>
          <Button gradientMonochrome="success" onClick={() => setOpenModal(false)}>حفظ</Button>
   
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
