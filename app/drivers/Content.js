"use client"

import Table from "./Table"
import { swrDrivers} from "@/app/swr/drivers"

export default  function Content(){

const {data,error,isLoading} = swrDrivers()

if(isLoading) return <div className="fixed flex items-center justify-center gap-x-4 inset-0">
  <h1 className="text-md font-semibold text-gray-700 text-center my-5">جاري التحميل </h1>
  <Spinner color="success" aria-label="Success spinner example" />

  </div>

if(error) return <h1>error</h1>

if(data) return <>
<Table drivers={data} />
</>

}
