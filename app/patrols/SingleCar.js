import React from 'react'
import CarModal from './Modal'

function SingleCar({car}) {
  return (
    <div className=' w-full py-2 flex items-center gap-x-4'>
<CarModal car={car}/>
<div>
    {/* {car.is_match&&car.drivers.map(driver=>{
        return <div className='text-sm  ' key={driver.id=Math.random()}> {driver.name}</div>
    })} */}
{car.is_match?<div className='text-sm  '>{car.driver_name}</div>:null}
{car.extra_driver_name?<div className='text-sm  '>{car.extra_driver_name}</div>:null}
</div>
{car.is_match?<div className='text-sm  '>{new Date(car.date).toLocaleTimeString()}</div>:null
}
    </div>
  )
}

export default SingleCar
