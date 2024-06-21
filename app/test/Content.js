'use client'
import React from 'react';
import io from 'socket.io-client';

const socket = io('https://express-rta.vercel.app:443');

const Content= () => {
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('sendLocation', { latitude, longitude });
        alert(`Location sent: ${latitude}, ${longitude}`);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send Location</button>
    </div>
  );
};

export default Content;
