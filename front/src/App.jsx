import './App.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './views/Home/Home';
import Dashboard from './views/Dahsboard/Dashboard';
import RegisterView from './views/Register/Register';
import ScheduleView from './views/Schedule/Schedule';
import QuienesSomos from './views/QuienesSomos/QuienesSomos';
import Packs from './views/Packs/Packs';
import Eventos from './views/Eventos/Eventos';

function App(){
  const login = useSelector((state)=>state.user.login);
  const navigate = useNavigate();

  useEffect(()=>{
    if(login)navigate('/dashboard');
    else navigate('/')
  }, [login]);

  return (
    <>
    <Routes>

      {/* {LOGIN} */}
      <Route path='/' exact element = {
        <Home/>
      }/>

      {/* {REGISTER} */}
      <Route path='/register' element = {
        <RegisterView/>
      }/>

      {/* {DASHBOARD} */}
      <Route path='/dashboard' element = {
        <Dashboard/>
      }/>

      {/* {SCHEDULE APP} */}

      <Route path='/schedule' element={
        <ScheduleView/>
      } />

       {/* { QUIENES SOMOS} */}

       <Route path='/quienessomos' element={
        <QuienesSomos/>
      } />

       {/* {PACKS} */}

       <Route path='/packs' element={
        <Packs/>
      } />

      {/* {EVENTOS} */}

        <Route path='/eventos' element={
        <Eventos/>
      } />


    




    </Routes>
    </>
  )
}

export default App
