import React from 'react';
import "../styles/Statistics.css"
import stac1 from '../assets/statistics/stac1.jpg';

const Statistics = () => {
  return (
    <div className="statistics-container">
      <h2>¿Qué hacen en Internet?</h2>
      <div className="statistics-cards">
        <div className="statistics-card">
          <img src= {stac1} alt="Uso del Internet" />
          <p>Redes Sociales</p>
          <p>80%</p>
        </div>
        <div className="statistics-card">
          <p>7% Trabajos del colegio</p>
        </div>
        <div className="statistics-card">
          <p>13% Escuchar o descargar música</p>
        </div>
        {/* Añade más tarjetas según sea necesario */}
      </div>
    </div>
  );
};

export default Statistics;
