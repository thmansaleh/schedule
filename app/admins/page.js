
"use client"

import Table from "./Table"
import Loading from "./Loading"
import { admins } from "../swr/admins"
export default function(){

   const {data,error,isLoading} =admins()
if(isLoading) return <Loading/>
if(error) return "error "
 if(data) return <Table admins={data}/>

}