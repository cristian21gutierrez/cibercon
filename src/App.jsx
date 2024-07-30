import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import EditUser from './components/EditUser';
import Home from './components/Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Inicialmente null para manejar el estado de carga

  useEffect(() => {
    // Verificar autenticación cuando el componente se monta
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      // Aquí podrías hacer una llamada a tu backend para verificar el token, si es necesario
      setIsAuthenticated(!!token); // true si hay un token, false de lo contrario
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // Mientras verificamos el estado de autenticación, no renderizamos nada
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/users"
          element={isAuthenticated ? <UserList /> : <Navigate to="/login" />}
        />
        <Route
          path="/users/:id"
          element={isAuthenticated ? <UserDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/users/:id/edit"
          element={isAuthenticated ? <EditUser /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
