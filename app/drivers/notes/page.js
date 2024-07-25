'use client'
import { useSearchParams } from "next/navigation";
import Notes from "./Notes";
import Modal from "./Modal";
import BackArrowBtn from "@/app/components/BackArrowBtn";

export default function page(){
  const userId=useSearchParams().get('user_id')
  return <>
  <BackArrowBtn/>
  <div className="p-3">

  <Modal userId={userId}/>
<Notes userId={userId}/>
</div>
  </>

}