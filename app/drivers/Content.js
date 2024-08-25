"use client"

import Table from "./Table"
import { swrDrivers} from "@/app/swr/drivers"
import { Spinner } from "flowbite-react";


export default  function Content(){

const {data,error,isLoading} = swrDrivers()

if(isLoading) return <div className="fixed flex items-center justify-center inset-0">
  <Spinner color="success" aria-label="" />

  </div>

if(error) return <h1>error</h1>

if(data) return <>
<Table drivers={data} />
</>

}
