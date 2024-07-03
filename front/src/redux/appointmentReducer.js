import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turnos: []
};

export const appointmentReducer = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    updateTurnos: (state, action) => {
      state.turnos = action.payload;
    },
    scheduleTurno: (state, action) => {
      state.turnos.push(action.payload); // Add the new turn to the existing turns
    },
    cancelTurno: (state, action) => {
      const turnoIndex = state.turnos.findIndex(turno => turno.id === action.payload.id);
      if (turnoIndex !== -1) {
        state.turnos[turnoIndex].status = 'cancelled'; 
      }
    }
  }
});

export const { updateTurnos, scheduleTurno, cancelTurno } = appointmentReducer.actions;


export default appointmentReducer.reducer;