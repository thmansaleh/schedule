import React from 'react'
import CarModal from './Modal'

function SingleCar({car}) {
  return (
    <div className={car.is_match?' w-full py-2 flex items-center gap-x-4 border-b':' w-full py-2 flex items-center gap-x-4'}>
<CarModal car={car}/>
<div className='flex-1'>

{car.is_match?<div className='text-sm  '>{car.driver_name}</div>:null}
{car.extra_driver_name?<div className='text-sm  '>{car.extra_driver_name}</div>:null}
</div>
{car.is_match?<div className='text-sm p-1 text-black   '>{new Date(car.date).toLocaleTimeString()}</div>:null
}
    </div>
  )
}

export default SingleCar
