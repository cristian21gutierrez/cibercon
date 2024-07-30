import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import EditUser from './components/EditUser';
import Home from './components/Home'; // Asegúrate de tener este componente

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users/:id/edit" element={<EditUser />} />
        <Route path="/home" element={<Home />} /> {/* Ruta de inicio */}
      </Routes>
    </Router>
  );
};

export default App;
