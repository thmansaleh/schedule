
"use client"
import Cars from "./Cars"
import {swrCars} from "../swr/cars"
// import {email} from "@/app/services/email"
export default function page(){

const {data,error,isLoading} =swrCars()
// const sendEmail=async ()=> await email("cars")
// sendEmail()
if(isLoading) return <h1 className="text-center mt-8">جاري التحميل...</h1>
if(error) return <h1>error</h1>

if(data) return <Cars cars={data} />

}
