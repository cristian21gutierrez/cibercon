import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        setUsers(response.data);
      } catch (err) {
        setError('No se pudieron cargar los usuarios');
      }
    };
    
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Listado de Usuarios</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.nombre} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
