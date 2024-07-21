'use client'
import { useState, useEffect } from "react"
import { fetchCars } from "../services/cars"
import { useSelector } from "react-redux"

export default function ShiftTable({shiftOffId,driverData,dutyId,name,time}) {
  const [drivers, setDrivers] = useState([])
  const [cars, setCars] = useState([])
  const phones=useSelector(state=> state.schedule.phones)
  const borders=useSelector(state=> state.schedule.borders)
  const color=useSelector(state=> state.schedule.color)

  useEffect(() => {
    const fetchD = async () => {
      const cars =await fetchCars()
      const updateDrivers=driverData.map(driver=>({
        ...driver,
        isAvilable:true
      }))
      const filterDrivers=updateDrivers.filter(driver=>driver.status=='true' & driver.duty_id==dutyId & driver.shift_id!=shiftOffId  )
      const updateCars=cars.map(car=>({
        ...car,
        drivers:[]
      }))
    
      setDrivers(filterDrivers)
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
})
setDrivers([...drivers])
  cars[carIndex].drivers=[]
setCars([...cars])
  }





const rondomArrange=()=>{
   cars.map(car=>{
    car.drivers=[]
   })
  
   function shuffeArray(array){

return array.sort(()=>Math.random() - 0.5)
   }

    const mynew =   shuffeArray(drivers).forEach((driver, index) => {
      
      if(driver.status=='true' &&driver.duty_id==dutyId&&driver.shift_id!=shiftOffId){
        drivers[index].isAvilable=false
        setDrivers([...drivers])
                  cars[index % cars.length].drivers.push(driver);
      }
        });
        setCars([...cars])
      
  
  

  
}










  return <div className="relative  overflow-x-auto">
    


<div className="w-full py-3 text-lg text-white bg-gray-900 font-semibold text-center">
  <div className="text">{name}</div>
  <div className="text">{time}</div>
  {/* <div className="text" onClick={()=>rondomArrange()}>ترتيب عشوائي</div> */}
<button  onClick={()=>rondomArrange()} className="random p-2 rounded-lg text-sm bg-green-400">ترتيب عشوائي</button>
</div>



    <table className="  text-center  w-full text-sm changeColor ">
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
          {phones&& <th scope="col"  className="driverPhone text px-6 py-3">
            رقم الهاتف
          </th>}
          <th scope="col" className="text px-6 py-3">
            
          </th>
        </tr>
      </thead>
      <tbody style={{color:color?color:'black'}} className="text-md">
        {cars.map((e,carIndex)=>{
         if(e.name!='5') return <tr key={carIndex} className={borders?' border border-black text-center py-7':'text-center py-7'} >
          <th scope="row" className=" relative
          px-6   font-medium  whitespace-nowrap  py-2">
          {e.drivers.map((e,i)=>{
              return <div className="text" key={i}>{e.name}</div>
            })}
            <select onChange={(e)=>add(e.target.value,carIndex)} className=" opacity-0 absolute top-0 left-0 bottom-0 right-0">
              <option></option>
           {drivers.map((e,i)=>{
           
            if(e.isAvilable) return <option key={i} value={i}>{e.name}</option>
           
          })}
          </select>
          </th>
          <th scope="row" className="px-6  py-2 text-center font-sm  whitespace-nowrap   justify-center text">
          {e.name}
          </th>
          <th scope="row" className="px-6  py-2 text-sm  whitespace-nowrap text">
            {e.station}
          </th>
        {phones&&  <th scope="row"  className="px-6 driverPhone py-2  text-sm  whitespace-nowrap ">
            {e.drivers.map((e,i)=>{
              return <div className='block' key={i}>{e.phone}</div>
            })}

           
          </th>}
          <th scope="row" onClick={()=>empty(carIndex)} className="text-red-500 delete-btn px-4   font-medium select-none whitespace-nowrap ">
  افراغ
          </th>
        </tr>
        })}
      </tbody>
    </table>
  </div>
}