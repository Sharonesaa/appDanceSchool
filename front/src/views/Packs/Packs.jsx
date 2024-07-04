import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import PackCard from "../../components/Packs/PackCard";
import styles from './Packs.module.css';

const packs = [
  {
    title: 'Pack Mensual',
    description: 'Acceso a todas las clases durante un mes.',
    image: '/salsa.jpg',
    price: '$120.000',
  },

  {
    title: 'Pack 4 Clases Mensual',
    description: 'Acceso a 4 clases durante un mes.',
    image: '/danzasalon.jpg',
    price: '$20.0000',
  },
  // Añade más packs según sea necesario
];

function Packs() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1>PACKS</h1>
        <div className={styles.packContainer}>
          {packs.map((pack, index) => (
            <PackCard 
              key={index}
              title={pack.title}
              description={pack.description}
              image={pack.image}
              price={pack.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packs;
