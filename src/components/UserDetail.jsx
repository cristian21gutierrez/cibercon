import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteUser = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      navigate('/users');
    } catch (err) {
      console.error('Error al eliminar el usuario', err);
    }
  };

  return (
    <button onClick={handleDelete}>Eliminar Usuario</button>
  );
};

export default DeleteUser;
