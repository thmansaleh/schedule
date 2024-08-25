'use client'

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Holiday({shiftOffId,driverData}){
  const color=useSelector(state=> state.schedule.color)

   let count =0
    return <div style={{color:color?color:'black'}} className="px-4">
<h1 className="text-center py-2 text-base  font-semibold">الأفراد تحت الجاهزية </h1>
  {driverData.map((e,i)=>{
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
