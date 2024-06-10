import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Statistics from '../components/Statistics';
import CarouselComponent from '../components/CarouselComponent';
import '../styles/Home.css';


const Home = () => {
  const cards = [
    { id: 1, title: 'Netiquetas', description: 'Las netiquetas son ...' },
    { id: 2, title: 'Grooming', description: 'El grooming es ...' },
    { id: 3, title: 'Sexting', description: 'El sexting se refiere ...' },
    { id: 4, title: 'Ciberseguridad', description: 'La ciberseguridad ...' },
    { id: 5, title: 'Navegar en positivo', description: 'Navegar en positivo ...' },
    { id: 6, title: 'Más información', description: 'Aquí puedes encontrar ...' },
    { id: 7, title: 'Más información', description: 'Aquí puedes encontrar ...' },
    { id: 8, title: 'Más información', description: 'Aquí puedes encontrar ...' },
  ];

  return (
    <div className="home-container">
      <h1>Bienvenidos a Ciberconscientes</h1>
      <p>Somos estudiantes de la ESPES Agraria y nuestro objetivo es informar y educar sobre la navegación segura en redes.</p>
      
      <CarouselComponent />

      <div className="card-grid">
        {cards.map((card) => (
          <Link key={card.id} to={`/detail/${card.id}`} className="card-link">
            <Card title={card.title} description={card.description} />
          </Link>
        ))}
      </div>
      <Statistics />
      
    </div>
  );
};

export default Home;
