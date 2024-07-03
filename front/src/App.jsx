import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './views/Home/Home';
import Dashboard from './views/Dahsboard/Dashboard';
import RegisterView from './views/Register/Register';
import { useSelector } from 'react-redux'
import ScheduleView from './views/Schedule/Schedule';

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


    </Routes>
    </>
  )
}

export default App
