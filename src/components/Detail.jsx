import React from 'react';
import { useParams } from 'react-router-dom';

const details = {
  1: {
    title: 'Netiquetas',
    content: 'Las netiquetas son las reglas de comportamiento que deben seguirse en el uso de Internet y redes sociales...'
  },
  2: {
    title: 'Grooming',
    content: 'El grooming es el acoso y abuso sexual de menores a través de Internet por parte de adultos...'
  },
  3: {
    title: 'Sexting',
    content: 'El sexting se refiere al envío de mensajes, fotos o videos de contenido sexual a través de dispositivos electrónicos...'
  },
  4: {
    title: 'Ciberseguridad',
    content: 'La ciberseguridad implica proteger sistemas, redes y programas de ataques digitales...'
  },
  5: {
    title: 'Navegar en positivo',
    content: 'Navegar en positivo es utilizar Internet de manera segura y constructiva...'
  },
  6: {
    title: 'Más información',
    content: 'Aquí puedes encontrar más información sobre cómo protegerte en Internet...'
  },
};

const Detail = () => {
  const { id } = useParams();
  const detail = details[id];

  if (!detail) {
    return <p>Detalle no encontrado</p>;
  }

  return (
    <div className="detail">
      <h2>{detail.title}</h2>
      <p>{detail.content}</p>
    </div>
  );
};

export default Detail;
