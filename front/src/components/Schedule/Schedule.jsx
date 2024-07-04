// ScheduleApp.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  const [classOptions, setClassOptions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const URL = `http://localhost:3000/turns/schedule`;
      const response = await axios.post(URL, {
        userId: user.id,
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

  useEffect(() => {
    const fetchClassOptions = async () => {
      try {
        const URL = `http://localhost:3000/classes`;
        const response = await axios.get(URL);
        setClassOptions(response.data);
      } catch (error) {
        console.error('Error getting class options:', error);
      }
    };

    fetchClassOptions();
  }, []);

  return (
    <div className={container}>
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
            <select
              id="clase"
              name="clase"
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              onChange={(e) => setClase(e.target.value)}
              required
            >
              <option value="" disabled>
                Seleccione una clase
              </option>
              {classOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.style.name}
                </option>
              ))}
            </select>
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
