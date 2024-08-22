import React from 'react'
import CarModal from './Modal'

function SingleCar({car}) {
  return (
    <div className=' w-full py-2 flex items-center gap-x-4'>
<CarModal car={car}/>
<div>
    {car.match_found&&car.drivers.map(driver=>{
        return <div key={driver.id=Math.random()}> {driver.name}</div>
    })}
</div>
    </div>
  )
}

export default SingleCar