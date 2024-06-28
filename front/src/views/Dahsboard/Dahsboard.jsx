import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Turns from '../../components/Turns/Turns';
import styles from './Dahsboard.module.css';

const { container, content } = styles;

function Dahsboard({ onLogout, user }) {
  const [turns, setTurns] = useState([]);

  useEffect(() => {
    const URL = `http://localhost:3000/turns/${user.id}`;
    axios.get(URL).then(resp => {
        // Si la respuesta es un objeto, lo convierte en un array
        const data = Array.isArray(resp.data) ? resp.data : [resp.data];
        setTurns(data);
    }).catch(error => {
        console.error("There was an error fetching the turns!", error);
    });
  }, [user]);

  return (
    <div className={container}>
      <Navbar onLogout={onLogout} />
      <div className={content}>
        <h1>Kadenza Escuela de Baile</h1>
        <p>Explora nuestras clases y eventos.</p>
      </div>
      <div>
        <Turns turnos={turns} />
      </div>
    </div>
  );
}

export default Dahsboard;