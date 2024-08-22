'use client'
import { useSearchParams } from "next/navigation"
import { swrPatrols } from "../swr/patrols"
import SingleCar from "./SingleCar"

function page() {
  const period =useSearchParams().get('period')
  const { data , error, isLoading ,mutate} = swrPatrols(period)
if(data) console.log(data)
  if(data) return (
    <div className="p-3">
{data.sort((a,b)=>a.nida - b.nida).map(car=>{
  return <SingleCar key={car.id+Math.random()}   car={car}/>
})}
    </div>
  )
}

export default page