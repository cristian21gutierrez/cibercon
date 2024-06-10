import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/CarouselComponent.css';
import img1 from '../assets/carrusel/img1.png';
import img2 from '../assets/carrusel/img2.jpg';
import img3 from '../assets/carrusel/img3.jpg';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={img1} alt="Image 1" />
         
        </div>
        <div>
          <img src= {img2} alt="Image 2" />
        
        </div>
        <div>
          <img src= {img3} alt="Image 3" />
       
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
