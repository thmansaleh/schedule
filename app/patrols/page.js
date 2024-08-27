'use client'
import { useSearchParams } from "next/navigation"
import { swrPatrols } from "../swr/patrols"
import SingleCar from "./SingleCar"
import BackArrowBtn from "../components/BackArrowBtn"

function page() {
  const period =useSearchParams().get('period')
  const { data , error, isLoading ,mutate} = swrPatrols(period)
  if(data) return <>
    <BackArrowBtn>

        <h1 className="text-center bg-gray-600 text-white py-2 font-semibold text-sm">الفترة {period}</h1>
    </BackArrowBtn>


    <div className="p-3">
{data.sort((a,b)=>a.nida - b.nida).map(car=>{
 if(car.type=='patrol') return <SingleCar key={car.car_id+Math.random()}   car={car}/>
})}
    </div>
</>
  
}

export default page