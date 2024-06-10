import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarHorizontal from '../src/components/NavbarHorizontal';

import Home from '../src/components/Home';
import Detail from '../src/components/Detail';
import './App.css';
import Footer from '../src/components/Footer';
import About from '../src/components/About';


const App = () => {
  return (
    <Router>
      <div className="app">
        <NavbarHorizontal />
        <div className="content">
        
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
