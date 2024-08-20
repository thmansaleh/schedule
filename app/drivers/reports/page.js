"use client";
import Content from "./Content"

function page() {
    // console.log('time is',new Date().toLocaleString())
    const utcTimestamp = '2024-08-21T02:02:37.000Z';
const date = new Date(utcTimestamp);

// Format the date to a local date string without changing the time
const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    // hour12: false,
    timeZone: 'Asia/Kolkata',  // IST (Indian Standard Time) time zone
    timeZoneName: 'short'
};
const localDateString = date.toLocaleString('en-US', options);

console.log(localDateString);

  return <Content/>  
}

export default page