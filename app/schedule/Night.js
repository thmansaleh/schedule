'use client'
import { useState, useEffect } from "react"
import { fetchDrivers } from "@/app/services/drivers"
import { fetchCars } from "../services/cars"

export default function Night({shiftOffId}) {
  const [drivers, setDrivers] = useState([])
  const [cars, setCars] = useState([])



  useEffect(() => {
    const fetchD = async () => {
      const drivers = await fetchDrivers()
      const cars =await fetchCars()
      const updateDrivers=drivers.map(driver=>({
        ...driver,
        isAvilable:true
      }))

      const updateCars=cars.map(car=>({
        ...car,
        drivers:[]
      }))

      setDrivers(updateDrivers)
      setCars(updateCars)
    }
    fetchD()
    return () => {

    }

  }, [])

  const  add =(e,carIndex)=>{

    drivers[e].isAvilable=false
    cars[carIndex].drivers.push(drivers[e])

  setCars([...cars])
  setDrivers([...drivers])
  }
    const empty =(carIndex)=>{

cars[carIndex].drivers.map(e=>{
e.isAvilable=true
drivers.push(e)
})
setDrivers([...drivers])
  cars[carIndex].drivers=[]
setCars([...cars])
  }


  return <div className="relative  overflow-x-auto">



<div className="w-full py-3 text-lg text-white bg-gray-900 font-semibold text-center">
  <div className="text">الفترة المسائية</div>
  <div className="text">1PM الى 9PM</div>
</div>



    <table className="text-center  w-full text-sm text-gray-500 ">
      <thead className="text-center  text-base text-white uppercase bg-gray-900 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            الاسم
          </th>
          <th scope="col" className="text px-6 py-3">
            رقم الدورية
          </th>
          <th scope="col" className="px-6 py-3">
            التمركز
          </th>
          <th scope="col" className="text px-6 py-3">
            رقم الهاتف
          </th>
          <th scope="col" className="text px-6 py-3">

          </th>
        </tr>
      </thead>
      <tbody className="text-md">
        {cars.map((e,carIndex)=>{
         if(e.name!='5') return <tr key={carIndex} className="text-center  ">
          <th scope="row" className=" relative
          px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          {e.drivers.map((e,i)=>{
              return <div className="text" key={i}>{e.name}</div>
            })}
            <select onChange={(e)=>add(e.target.value,carIndex)} className=" opacity-0 absolute top-0 left-0 bottom-0 right-0">
              <option></option>
           {drivers.map((e,i)=>{

            if(e.status=='true' && e.isAvilable&&e.duty_id=="3"&&e.shift_id!=shiftOffId) return <option key={i} value={i}>{e.name}</option>

          })}
          </select>
          </th>
          <th scope="row" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap  flex items-center justify-center text">
          {e.name}
          </th>
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text">
            {e.station}
          </th>
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
            {e.drivers.map((e,i)=>{
              return <div  key={i}>{e.phone}</div>
            })}


          </th>
          <th scope="row" onClick={()=>empty(carIndex)} className="text-red-500 delete-btn px-4 py-4 font-medium select-none whitespace-nowrap text">
  افراغ
          </th>
        </tr>
        })}
      </tbody>
    </table>
  </div>
}
