"use client"


import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://express-rta.vercel.app:443'); // Adjust the URL if necessary

const page = () => {
  useEffect(() => {
    socket.on('getLocation', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            userId: socket.id,
          };
          socket.emit('sendLocation', location);
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    });
  }, []);

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};

export default page;
