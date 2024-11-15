

"use client"
import { useRouter } from 'next/navigation'
 
const LogoutButton = () => {
    const router = useRouter()

     return (
        <div onClick={ async ()=>{
await fetch("/api/logout")
router.push("/login")
}} className="fixed scale-75  gap-x-2 top-3 start-3 bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
            تسجيل الخروج 
        </div>
    );
};

export default LogoutButton;
