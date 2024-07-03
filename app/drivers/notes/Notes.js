import { swrNotes } from '@/app/swr/notes'
import React from 'react'

function Notes({userId}) {
    const {data,error,isLoading} = swrNotes(userId)
    if(isLoading) return <h1 className='text-md text-gray-600 mt-8 text-center ' >جاري التحميل</h1>
    if(error) return 'error.....'
    if(data.length===0) return <h1 className='text-md text-gray-600 mt-8 text-center ' >لاتوجد اي ملاحظات</h1>

  return (
    <div className="p-3 bg-white space-y-4">

    {data.reverse().map((e,i)=>{
        return <div key={i} className="rounded-lg p-2 py-5  shadow-md relative overflow-hidden">
        <p className="text-sm text-gray-500">{e.note} </p>
    
        <span className="absolute px-1.5  rounded-tl-lg bottom-0 right-0 bg-yellow-600 text-white  text-xs">{e.date}</span>
      </div >
    })}
  
  
  </div>  )
}

export default Notes