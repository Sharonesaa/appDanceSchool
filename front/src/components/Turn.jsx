import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { cancelTurno } from '../redux/appointmentReducer';

const Turn = ({ turno }) => {

  const dispatch = useDispatch();

  const handleCancel = async (id) => {
    if (window.confirm("¿Desea cancelar el turno?")) {
      try {
        const URL = `http://localhost:3000/turns/cancel/${id}`;
        const response = await axios.put(URL);
        if (response.data) {
          dispatch(cancelTurno(response.data)); // Update the Redux state
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("There was an error cancelling the turn!", error);
      }
    }
  };

  return (
    <tr key={turno.id}>
      <td>{turno.date}</td>
      <td>{turno.time}</td>
      <td>{turno.class.style.name}</td>
      <td>{turno.class.price}</td>
      <td>
        <button
            className={turno.status === "active" ? "btn btn-success" : "btn btn-danger"}
            onClick={() => handleCancel(turno.id)}
          >
            {turno.status}
        </button>
       </td>
   
    </tr>
  );
};

export default Turn;