"use client"

import Table from "./Table"
import { swrDrivers} from "@/app/swr/drivers"
import Test from "./Test"

export default async function Content(){

const {data,error,isLoading} = swrDrivers()

if(isLoading) return <h1 className="text-center mt-8">جاري التحميل...</h1>
if(error) return <h1>error</h1>

if(data) return <Table drivers={data} />
// if(data) return <Test drivers={data} />

}