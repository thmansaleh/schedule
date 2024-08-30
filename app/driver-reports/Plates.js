import React from 'react'
import { swrReportPlates } from '../swr/plates'

function Plates({reportNo}) {
    const { data , error, isLoading } = swrReportPlates(reportNo)
if(isLoading) return 'loading......'
if(data){
    if(data.length==0) return 'لاتوجد مركبات'
    return <div>
        <div className='text-sm font-semibold text-green-500 my-2'>المركبات</div>
        {data.map(plate=>{
        return <div className='flex items-center gap-x-3 shadow-lg border p-3 w-fit rounded-lg'>
        <div>{plate.plate_no}</div>
        <div>{plate.plate_source}</div>

    </div>
    })}
    </div>
}
return null
}

export default Plates