"use client"
import Link  from "next/link"
import {shifts} from "../swr/shifts"

export default function(){

const {data,error,isLoading} =shifts()

if(isLoading) return <h1 className="text-center mt-8">جاري التحميل...</h1>
if(error) return <h1>error</h1>

if(data) return <div className="w-full h-screen  bg-gray-100 flex items-center  justify-center gap-4 p-4">



{data.map(e=>{
const url =`shifts/${e.id}`
return <Link key={e.id} href={url} className="inline-block p-2 
shadow-md p-4 hover:bg-gray-50 rounded-full bg-white text-black font-semibold select-none  flex items-center justify-center h-20 w-20 text-center">
{e.name}
</Link>
})}


</div>

}