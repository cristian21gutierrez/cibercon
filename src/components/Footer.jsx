import React from 'react';
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contáctanos</h5>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@tuempresa.com</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Acerca de nosotros</a></li>
              <li><a href="#">Contáctanos</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Encuéntranos en el mapa</h5>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224933.61125283826!2d-74.00019880067067!3d40.712776754325086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf7fb5d6e5%3A0x8e0b0d2b91c31fc9!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1637084080514!5m2!1sen!2suk"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-center">
                © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
