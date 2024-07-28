
"use client";

import { addNote } from "@/app/services/addNote";
import { swrNotes } from "@/app/swr/notes";
import { Button, Label, Modal, Textarea } from "flowbite-react";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mutate } from "swr";
export default function ModalC({userId}) {
  const [openModal, setOpenModal] = useState(false);
    const [note, setNote] = useState('');
    const {data} = swrNotes(userId)

    const save = async() => {
      const url =`https://express-rta.vercel.app/get-notes-by-user-id?user_id=${userId}`

              if (note.length>4) {
              //   mutate(url,[...data,{
              //     id: "1555",
              //     user_id: "",
              //     note:note,
              //     date: ""
              // }])
               
                
               await addNote(userId,note)
                mutate(url)

                toast.success('تم اضافة الملاحظة بنجاح', {
                    position: "top-center",
                    autoClose: 3000,
                    rtl:true,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
              });
                
              }else{
                toast.error('يجب ان لايقل عدد الاحرف عن 5 احرف', {
                    position: "top-center",
                    autoClose: 3000,
                    rtl:true,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
              });
              }
              setOpenModal(!openModal)
          };

  return (
    <>
<div className="w-ful flex text-center justify-center">
<Button color="warning" onClick={() => setOpenModal(true)}
  
  >
    <svg className="w-6 h-6 mx-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"></path></svg>
    اضافة ملاحظة</Button>

</div>
      <ToastContainer/>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
         <div className="flex justify-center items-center">
         <svg className="w-10 h-10 fill-yellow-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></svg>
         </div>
            <div className="max-w-md my-4">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="الملاحظة" />
      </div>
      <Textarea  value={note} onChange={(e)=>setNote(e.target.value)} id="comment" placeholder="ادخل الملاحظة هنا..." required rows={4} />
    </div>
            <div className="flex justify-center gap-4">
              <Button color="success" onClick={save}>
                {"حفظ"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                الغاء
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
