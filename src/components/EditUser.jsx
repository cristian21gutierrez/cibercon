import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const [user, setUser] = useState({ nombre: '', email: '', edad: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('No se pudo cargar el usuario');
      }
    };
    
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.patch(`http://localhost:3000/api/users/${id}`, user);
      navigate(`/users/${id}`);
    } catch (err) {
      setError('No se pudo actualizar el usuario');
    }
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={user.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            name="edad"
            value={user.edad}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default EditUser;
