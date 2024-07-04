
import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import EventCard from '../../components/Eventos/EventCard';
import styles from './Eventos.module.css';

function Eventos() {
  const events = [
    {
      image: '/KADENZA.jpg',
      title: 'CenaShow',
      date: '15/07/2023',
      description: 'A pedido del público llega la segunda edición de: CON SABOR LATINO!'
    },
    {
      image: '/images.jpeg',
      title: 'ARTISTA ESTELAR Desde NY/Italia',
      date: '10/09/2023',
      description: 'Es un placer contar con la Maestra y Bailarina numero 1, dictando talleres , Bootcamp y show !!',
    },
    // Agrega más eventos según sea necesario
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1> Eventos</h1>
        <div className={styles.eventGrid}>
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eventos;