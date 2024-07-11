'use client'
import {useEffect} from "react"
function Header() {
  
useEffect(()=>{


function headerDate() {
            const dateSelect = document.getElementById('dateSelect');

            // Function to format the date as "Day, Month Date, Year"
            function formatDate(date) {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                return date.toLocaleDateString(undefined, options);
            }

            // Get today's date
            const today = new Date();

            // Create date options for today, tomorrow, and the day after tomorrow
            const dates = [
                
                { text: `جدول (${formatDate(new Date(today.getTime() + 24 * 60 * 60 * 1000))})`, value: new Date(today.getTime() + 24 * 60 * 60 * 1000).toLocaleDateString() },
                
                
                { text: `جدول (${formatDate(new Date(today.getTime() + 48 * 60 * 60 * 1000))})`, value: new Date(today.getTime() + 48 * 60 * 60 * 1000).toISOString().split('T')[0] },
                { text: `جدول (${formatDate(new Date(today.getTime() + 72 * 60 * 60 * 1000))})`, value: new Date(today.getTime() + 48 * 60 * 60 * 1000).toISOString().split('T')[0] }
            ];

            
            dates.forEach(date => {
                const option = document.createElement('option');
                option.value = date.value;
                option.textContent = date.text;
                dateSelect.appendChild(option);
            });
        }
        
        

headerDate()

return ()=>{

}

},[])


    


  return (

  <div className="relative flex items-center justify-center w-full py-4  ">
  
    <div className="absolute  w-full h-px bg-gray-700"></div>
  
  
    <div className="relative px-4  text-gray-700 font-semibold ">
      
      
    <select className=" outline-none border-none ring-0  appearance-none" id="dateSelect">
      
    </select>
    </div>
  </div> 
  
  
)
}

export default Header