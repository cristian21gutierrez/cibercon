import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Detail.css";

const details = {
  1: {
    title: 'Netiquetas',
    sections: [
      { subtitle: 'Introducción', content: 'Las netiquetas son las reglas de comportamiento que deben seguirse en el uso de Internet y redes sociales...' },
      { subtitle: 'Ejemplos', content: '1. presentarse de forma adecuada. utilizar', content1: "2. utilizar lenguaje neutro", content2: "3. revisa tu ortografia", content3: "4. revisa la privacidad del otro", content4: "5. no etiquetes a alguien sin su permiso. " }
    ]
  },
  2: {
    title: 'Grooming',
    sections: [
      { subtitle: '¿Qué es el grooming?', content: 'Se denomina grooming al acoso sexual que un adulto realiza en Internet contra un menor de edad. Con un perfil falso que oculta su identidad, el acosador se hace pasar por un niño o adolescente para vincularse con menores en redes sociales, aplicaciones o videojuegos compartidos.' },
      {  content: 'Una vez que entra en confianza, logra que el menor le envíe fotos o videos con contenido sexual para luego chantajearlo o amenazarlo con publicar su material', subtitle:"¿Qué hacer cuando alguien es victima de grooming?", content1:"Denunciá el acoso virtual en la comisaría o fiscalía más cercana.", content2:"No hagas denuncias en la red social o web ni te comuniques con al acosador porque desaparecerá.", content3: "Guardá todas las conversaciones, fotos, videos y cualquier otro material de la computadora, tableta o teléfono celular porque servirá como prueba de la interacción entre el acosador y su víctima.", content4: "Cambiá sus claves de acceso a las redes sociales."
       }
    ]
  },
  3: {
    title: 'Sexting',
    sections: [
      { subtitle: '¿Qué es el SEXTING?', content: 'Sexting es la acción de filmarse o sacarse fotos con contenido sexual o erótico y enviar esas imágenes o videos a una persona de confianza por medio del celular u otro dispositivo electrónico.' },
      { subtitle: 'Riesgos', content: 'En la actualidad, es habitual que los jóvenes y adolescentes usen la tecnología para expresar sus deseos. No siempre evalúan los riesgos que puede generar el envío de imágenes o videos sexuales por internet' }
    ]
  },
  // Resto de los detalles...
};

const Detail = () => {
  const { id } = useParams();
  const detail = details[id];

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página hacia arriba cuando se monta el componente
  }, []);

  if (!detail) {
    return <p>Detalle no encontrado</p>;
  }

  return (
    <div className="detail">
      <h2>{detail.title}</h2>
      {detail.sections.map((section, index) => (
        <div key={index}>
          <h3>{section.subtitle}</h3>
          <p>{section.content}</p>
          <p>{section.content1}</p>
          <p>{section.content2}</p>
          <p>{section.content3}</p>
          <p>{section.content34}</p>
        </div>
      ))}
    </div>
  );
};

export default Detail;
