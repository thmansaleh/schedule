'use client'
import { useSearchParams } from "next/navigation";
import { AddNoteModal } from "./AddNoteModal";
import Notes from "./Notes";

export default function page(){
  const userId=useSearchParams().get('user_id')
return <div className="p-3">
<AddNoteModal userId={userId}/>
<Notes userId={userId}/>
</div>

}