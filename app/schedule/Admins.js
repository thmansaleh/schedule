'use client'

import { useEffect, useState } from "react"
import { fetchAdmins } from "../services/admins"

export default function Admins(){
  const [admins,setAdmins]=useState([])
const [duty,setDuty]=useState([
  {
    duty:'الصباحية',
    admins:[]
  },
  {
    duty:'المسائية',
    admins:[]
  },
  {
    duty:'الليلية',
    admins:[]
  },
]) 
  useEffect(() => {
    const fetchAd = async () => {
      const adminss= await fetchAdmins()

      const updateAdmins=adminss.map(admin=>({
        ...admin,
        isAvilable:true
      }))

      setAdmins(updateAdmins)

    }
    fetchAd()
    return () => {

    }

  }, [])
  const  addAdmin =(e,dutyIndex)=>{

    admins[e].isAvilable=false
    duty[dutyIndex].admins.push(admins[e])

  setDuty([...duty])
  setAdmins([...admins])
  }



  const empty =(dutyIndex)=>{

duty[dutyIndex].admins.map(e=>{
e.isAvilable=true

})
setAdmins([...admins])
  duty[dutyIndex].admins=[]
setDuty([...duty])
  }
    return <div className="relative bg-yellow-600  text-white overflow-x-auto">
    <div className="w-full py-3 text-lg text  font-semibold text-center">المشرفين </div>
    <table className="text-center  w-full text-sm  ">
      <thead className="text-center  text-base  uppercase ">
        <tr>
          <th scope="col" className="px-6 py-3">
            الاسم 
          </th>
          <th scope="col" className="px-6 text py-3">
            فترة العمل 
          </th>
<th scope="col" className="px-6 text py-3">
            رقم الهاتف  
          </th>
        </tr>
      </thead>
      <tbody className="text-md ">
       {duty.map((e,dutyIndex)=>{
        return  <tr key={dutyIndex} className="text-center  ">
        <th scope="row" className="relative px-3  font-medium  whitespace-nowrap ">
        <select onChange={(e)=>addAdmin(e.target.value,dutyIndex)} className=" text-black opacity-0 absolute top-0 left-0 bottom-0 right-0">
              <option></option>
           {admins.map((e,i)=>{


            if(e.isAvilable&&e.status=="true") return <option key={i} value={i}>{e.name}</option>

          })}
          </select>


        {e.admins.map((admin,index)=>{
            return <div key={index}>{admin.name}</div>
          })}
        </th>
        <th scope="row" className="px-6 py-3  text-center font-medium whitespace-nowrap  ">
          {e.duty}
        </th>
        <th scope="row" className="px-6 py-3 font-medium  whitespace-nowrap ">
          {e.admins.map((admin,index)=>{
            return <div className="text" key={index}>{admin.phone}</div>
          })}
        </th>

<th scope="row" onClick={()=>empty(dutyIndex)} className=" delete-btn px-4 py-3 font-medium select-none whitespace-nowrap text">
  افراغ
          </th>
      </tr>
       })}
      </tbody>
    </table>
  </div>
}