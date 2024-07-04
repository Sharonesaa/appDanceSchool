// Dashboard.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Turns from '../../components/Turns/Turns';
import styles from './Dashboard.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {updateTurnos} from '../../redux/appointmentReducer'

const { container, content, buttonContainer, scheduleButton, exploreClasses } = styles;

function Dashboard({ onLogout }) {
  const turns = useSelector((state) => state.appointment.turnos);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTurns = async () => {
      try {
        const URL = `http://localhost:3000/turns/${user.id}`;
        const response = await axios.get(URL);
        if (response.data) {
          dispatch(updateTurnos(response.data));
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("There was an error fetching the turns!", error);
      }
    };

    fetchTurns();
  }, [dispatch, user.id]);

  useEffect(() => {
    if (!user) {
      navigate('/'); // Si el usuario no está autenticado, redirige al login
    }
  }, [user, navigate]);


  return (
    <div className={container}>
      <Navbar onLogout={onLogout} />
      <div className={content}>
        <h1>Kadenza Escuela de Baile</h1>
        <p className={exploreClasses}>Explora nuestras clases y eventos.</p>
      </div>
      <div>
        <Turns turnos={turns} />
      </div>
      <div className={buttonContainer}>
        <button className={scheduleButton} onClick={() => navigate('/schedule')}>
          Pedir Turno
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
