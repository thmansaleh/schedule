
"use client";

import { addNote } from "@/app/services/addNote";
import { swrNotes } from "@/app/swr/notes";
import { Button, Label, Modal, Textarea } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mutate } from "swr";
export default function ModalC({userId}) {
  const [openModal, setOpenModal] = useState(false);
    const [note, setNote] = useState('');
    const {data} = swrNotes(userId)

    const save = async() => {
      
              if (note.length>4) {
                mutate(`https://saba.cc/schedule/notes.php?user_id=${userId}`,[...data,{
                  id: "1555",
                  user_id: "",
                  note:note,
                  date: ""
              }])
               
                
               await addNote(userId,note)
                mutate(`https://saba.cc/schedule/notes.php?user_id=${userId}`)

                toast.success('تم اضافة الملاحظة بنجاح', {
                    position: "top-center",
                    autoClose: 3000,
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
<Button color="warning" onClick={() => setOpenModal(true)}>اضافة ملاحظة</Button>

</div>
      <ToastContainer/>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
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
