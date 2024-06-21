
"use client"

import Table from "./Table"
import Loading from "./Loading"
import {shiftId} from "@/app/swr/shiftId"
export default function({params}){
  const id = params.id
   const {data,error,isLoading} =shiftId(id)
if(isLoading) return <Loading/>
if(error) return "error "
 if(data) return <Table drivers={data}/>

}