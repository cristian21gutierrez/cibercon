import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Define la URL base de la API directamente
  const apiUrl = 'http://localhost:3000/api';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Limpia los mensajes de error y éxito previos
    setError('');
    setSuccess('');

    try {
      // Realiza la solicitud POST a la API
      const response = await axios.post(`${apiUrl}/users`, {
        nombre,
        email,
        edad,
        password,
      });

      // Muestra el mensaje de éxito
      setSuccess(response.data.message);
    } catch (error) {
      // Maneja los errores
      if (error.response && error.response.data) {
        setError(error.response.data.error || 'Error en el registro');
      } else {
        setError('Error en el registro');
      }
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Register;
