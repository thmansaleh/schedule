'use client'

import { useEffect, useState } from "react"
import { fetchOperations } from "../services/operations"

export default function Rta(){
  const [operations,setOperations]=useState([])
const [duty,setDuty]=useState([
  {
    duty:'الصباحية',
    operations:[]
  },
  {
    duty:'المسائية',
    operations:[]
  },
  {
    duty:'الليلية',
    operations:[]
  },
]) 
  useEffect(() => {
    const fetchOp = async () => {
      const operations = await fetchOperations()

      const updateOperations=operations.map(operation=>({
        ...operation,
        isAvilable:true
      }))

      setOperations(updateOperations)

    }
    fetchOp()
    return () => {

    }

  }, [])
  const  addOperation =(e,dutyIndex)=>{

    operations[e].isAvilable=false
    duty[dutyIndex].operations.push(operations[e])

  setDuty([...duty])
  setOperations([...operations])
  }


  const empty =(dutyIndex)=>{

duty[dutyIndex].operations.map(e=>{
e.isAvilable=true
//operations.push(e)
})
setOperations([...operations])
  duty[dutyIndex].operations=[]
setDuty([...duty])
  }
    return <div className="relative bg-red-100  overflow-x-auto ">
    <div className="w-full py-3 text-lg text-black text font-semibold text  text-center ">أفراد عمليات  RTA </div>
    <table className="text-center  w-full text-sm text-black ">
      <thead className="text-center  text-base  uppercase ">
        <tr>
          <th scope="col" className="px-6 py-3">
            الاسم 
          </th>
          <th scope="col" className="text px-6 py-3">
            فترة العمل 
          </th>
<th scope="col" className="px-6 py-3 text">
            رقم الهاتف  
          </th>
        </tr>
      </thead>
      <tbody className="text-md ">
       {duty.map((e,operationIndex)=>{
        return  <tr key={operationIndex} className="text-center border-b ">
        <th scope="row" className="relative px-6 font-medium  whitespace-nowrap ">
        <select onChange={(e)=>addOperation(e.target.value,operationIndex)} className=" opacity-0 absolute top-0 left-0 bottom-0 right-0">
              <option></option>
           {operations.map((e,i)=>{


            if(e.isAvilable&&e.status=='true') return  <option  className="text" clakey={i} value={i}>{e.name}</option>

          })}
          </select>


        {e.operations.map((operation,index)=>{
            return <div className="text" key={index}>{operation.name}</div>
          })}
        </th>
        <th scope="row" className="px-6 py-6  text-center font-medium  whitespace-nowrap  ">
          {e.duty}
        </th>
        <th scope="row" className="px-6 py-6 font-medium  whitespace-nowrap ">
          {e.operations.map((operation,index)=>{
            return <div key={index}>{operation.phone}</div>
          })}
        </th>
<th scope="row" onClick={()=>empty(operationIndex)} className="text-red-500 delete-btn px-4 py-4 font-medium select-none whitespace-nowrap text">
  افراغ
          </th>
      </tr>
       })}

      </tbody>
    </table>
  </div>
}