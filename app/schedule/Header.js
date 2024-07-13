'use client'
import {useEffect} from "react"
import { useSelector } from "react-redux"
function Header() {
  const date =useSelector(state=>state.drivers.scheduleDate)

  return (

  <div className="relative flex items-center justify-center w-full py-4  ">
  
    <div className="absolute  w-full h-px bg-gray-700"></div>
  
  
    <div className="relative px-4  text-gray-700 font-semibold  bg-white rounded-lg">
     <div className="px-3">  جدول يوم {date} </div>

    </div>
  </div> 
  
  
)
}

export default Header