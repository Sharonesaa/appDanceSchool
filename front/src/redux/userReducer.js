import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading : false,
    login : false,
    user :{}
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.login = action.payload.login;
            state.user = action.payload.user;
        },
        logout:(state,action)=>{
            state.login = false;
            state.user = {};
        },
    }
});

export const { login, logout } = userSlice.actions;