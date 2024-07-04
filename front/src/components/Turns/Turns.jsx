import React from 'react';
import Turn from '../Turn';
import 'bootstrap/dist/css/bootstrap.min.css';


function Turns({ turnos }) {
  // Si turnos no es un array, usa un array vacío en su lugar
  const turnosArray = Array.isArray(turnos) ? turnos : [];

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          Mis Turnos
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Clase</th>
                <th scope="col">Precio</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {turnosArray.map(turno => (
                <Turn key={turno.id} turno={turno} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Turns;