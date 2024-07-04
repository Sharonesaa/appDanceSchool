// ScheduleApp.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Schedule.module.css';
import { scheduleTurno } from '../../redux/appointmentReducer';

const { container, formContainer, inputField, submitButton } = styles;

function ScheduleApp() {
  const user = useSelector(state => state.user.user); // Obtener el usuario desde Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [clase, setClase] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const URL = `http://localhost:3000/turns/schedule`;
      const response = await axios.post(URL, {
        user_id: user.id,
        date,
        time,
        classId: clase
      });
      dispatch(scheduleTurno(response.data)); // Dispatch the action to schedule the turn
      navigate('/dashboard'); // Navegar de regreso al dashboard después de enviar el turno
    } catch (error) {
      console.error('Error submitting turn request:', error);
    }
  };

  return (
    <div className={container}>
      <Navbar />
      <div className={formContainer}>
        <h1>Turno</h1>
        <form onSubmit={handleSubmit}>
          <div className={inputField}>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className={inputField}>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className={inputField}>
            <label htmlFor="clase">Clase:</label>
            <input
              type="number"
              id="clase"
              name="clase"
              value={clase}
              min ="1"
              max="3"
              onChange={(e) => setClase(e.target.value)}
              required
            />
          </div>
          <div className={submitButton}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScheduleApp;
