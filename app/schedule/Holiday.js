'use client'

import { useEffect, useState } from "react"
import { fetchDrivers} from "../services/drivers"
import { useSelector } from "react-redux"

export default function Holiday({shiftOffId}){
  const [drivers,setDrivers]=useState([])
  const color=useSelector(state=> state.schedule.color)


  useEffect(() => {
    const fetchDr = async () => {
      const data= await fetchDrivers()

  
      setDrivers(data)

    }
    fetchDr()
    return () => {

    }

  }, [])
   let count =0
    return <div style={{color:color?color:'black'}} className="px-4">
<h1 className="text-center py-2 text-base  font-semibold">الأفراد تحت الجاهزية </h1>
  {drivers.sort((a, b) => a.name.localeCompare(b.name, 'ar')).map((e,i)=>{
    if(e.status=="true"&&e.shift_id==shiftOffId) {
   count+=1
 return <div key={i} className="py-px flex items-center gap-x-2">
    <span>{count}</span>
    <span>{e.name}</span>
  </div>
 }
})}
  
</div>
}