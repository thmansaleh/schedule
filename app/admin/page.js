'use client'



import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('https://express-rta.vercel.app:443'); // Adjust the URL if necessary

const page = () => {
  const [users, setUsers] = useState([
    { id: 'user1', name: 'User 1' },
    { id: 'user2', name: 'User 2' },
    // Add more users as needed
  ]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    socket.on('receiveLocation', (location) => {
      setLocations((prevLocations) => [...prevLocations, location]);
    });
  }, []);

  const handleUserClick = (userId) => {
    socket.emit('requestLocation', userId);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
      <h2>Received Locations</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            User ID: {location.userId}, Latitude: {location.latitude}, Longitude: {location.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
