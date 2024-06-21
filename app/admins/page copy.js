
"use client"

import Table from "./Table"
import Loading from "./Loading"
import { operations } from "../swr/operations"
export default function(){

   const {data,error,isLoading} =operations()
if(isLoading) return <Loading/>
if(error) return "error "
 if(data) return <Table drivers={data}/>

}