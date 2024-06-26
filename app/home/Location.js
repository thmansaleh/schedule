'use client'

import { useEffect } from "react";

const Location = () => {
    
  const handleRedirectToMaps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const date =new Date()
        const time =date.toLocaleString()
        console.log(time)
        const url = `https://saba.cc/schedule/sendLocation.php?q=${latitude},${longitude}&time=${time}`;
        // window.open(url, '_blank');
        // console.log(url)
        // fetch(url)
      }, () => null);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    setInterval(() => {
        handleRedirectToMaps()
    }, 30000);
    return () => {
      clearInterval(handleRedirectToMaps())
    }
  }, [])
  
  return null
};

export default Location;
