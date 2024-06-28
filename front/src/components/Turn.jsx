import React from 'react';

const Turn = ({ turno }) => {
  return (
    <tr key={turno.id}>
      <td>{turno.date}</td>
      <td>{turno.time}</td>
      <td>{turno.class.style.name}</td>
      <td>{turno.class.price}</td>
      <td>
        <button
        className={turno.status === "active" ? "btn btn-success" : "btn btn-danger"}
        onClick={()=>alert(`Turno:${turno.id}`)}
        >
            {turno.status}
        </button>
       </td>
   
    </tr>
  );
};

export default Turn;