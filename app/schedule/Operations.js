'use client'

import { useEffect, useState } from "react"
import { fetchOperations } from "../services/operations"

export default function opperation({workPlace,className,title}){
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
    return <div className={className}>
    <div className="w-full py-3 text-lg  font-semibold text text-center ">{title} </div>
    <table className="text-center  w-full text-sm ">
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
        return  <tr key={operationIndex} className="text-center  ">
        <th scope="row" className="relative py-2 px-6 font-medium  whitespace-nowrap ">
        <select onChange={(e)=>addOperation(e.target.value,operationIndex)} className=" text-black opacity-0 absolute top-0 left-0 bottom-0 right-0">
              <option></option>
           {operations.map((e,i)=>{


            if(e.isAvilable&&e.status=='true'&&e.work_place==`${workPlace}`) return <option className="text" key={i} value={i}>{e.name}</option>

          })}
          </select>


        {e.operations.map((operation,index)=>{
            return <div className="text" key={index}>{operation.name}</div>
          })}
        </th>
        <th scope="row" className="px-6 py-2  text text-center font-medium  whitespace-nowrap  ">
          {e.duty}
        </th>
        <th scope="row" className="px-6  py-2 font-medium  whitespace-nowrap ">
          {e.operations.map((operation,index)=>{
            return <div key={index}>{operation.phone}</div>
          })}
        </th>
<th scope="row" onClick={()=>empty(operationIndex)} className=" py-2 delete-btn px-4  font-medium select-none whitespace-nowrap text">
  افراغ
          </th>
      </tr>
       })}

      </tbody>
    </table>
  </div>
}