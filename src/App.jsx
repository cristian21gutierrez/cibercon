import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Detail from '../src/components/Detail';
import './App.css';
import About from '../src/components/About';


const App = () => {
  return (
    <Router>
      <div className="app">
       
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
    
    </Router>
  );
};

export default App;
