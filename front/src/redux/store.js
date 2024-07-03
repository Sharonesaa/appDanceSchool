import { configureStore } from '@reduxjs/toolkit';
import{ userSlice } from './userReducer'
import{ appointmentReducer } from './appointmentReducer'

const store = configureStore ({
    reducer:{
        user: userSlice.reducer,
        appointment: appointmentReducer.reducer,
    }
});

export default store; 