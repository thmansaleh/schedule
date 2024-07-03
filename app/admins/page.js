
"use client"

import Table from "./Table"
import Loading from "./Loading"
import { admins } from "../swr/admins"
import AdminsList from "./AdminsList"
export default function(){

   const {data,error,isLoading} =admins()
if(isLoading) return <Loading/>
if(error) return "error "
//  if(data) return <Table admins={data}/>
 if(data) return <AdminsList admins={data}/>

}