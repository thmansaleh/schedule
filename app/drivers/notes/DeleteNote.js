
"use client";

import { deleteNoteById } from "@/app/services/deleteNote";
import { swrNotes } from "@/app/swr/notes";
import { Button, Label, Modal, Textarea } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mutate } from "swr";
export default function DeleteNote({noteId,userId}) {
  const [openModal, setOpenModal] = useState(false);
    const {data} = swrNotes(userId)

    const save = async() => {
      
       
      const url =`https://express-rta.vercel.app/get-notes-by-user-id?user_id=${userId}`
                mutate(url,data.filter(note=>  note.id!=noteId))
                
             await   deleteNoteById(noteId)

                mutate(url)


                toast.success('تم حذف الملاحظة بنجاح', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    rtl:true,
                    progress: undefined,
                    theme: "light"
              });
                
           
              
              setOpenModal(!openModal)
          };

  return (
    <>
<svg onClick={() => setOpenModal(true)} className="w-5 h-5 fill-red-600 absolute  left-1 bottom-1" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
      <ToastContainer/>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
         <div className="text-gray-600 my-6 font-semibold">هل انت متأكد من حذف  الملاحظة؟</div>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={save}>
                {"حذف"}
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
