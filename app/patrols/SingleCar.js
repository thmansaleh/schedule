import React from 'react'
import CarModal from './Modal'

function SingleCar({car}) {
  return (
    <div className=' w-full py-2 flex items-center gap-x-4'>
<CarModal car={car}/>
<div>
    {car.match_found&&car.drivers.map(driver=>{
        return <div className='text-sm font-semibold ' key={driver.id=Math.random()}> {driver.name}</div>
    })}
</div>
{car.match_found&&<div>{car.drivers[0].time}</div>
}
    </div>
  )
}

export default SingleCar