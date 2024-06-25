

"use client"
import { useRouter } from 'next/navigation'
 
const LogoutButton = () => {
    const router = useRouter()

     return (
        <div onClick={()=>{

router.push("/login")
}} className="fixed  gap-x-2 top-3 start-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 12H3v2h9.67l-2.58 2.59z"/>
            </svg>
            تسجيل الخروج 
        </div>
    );
};

export default LogoutButton;
