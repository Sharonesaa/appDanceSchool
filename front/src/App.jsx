import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './views/Home/Home';
import Dahsboard from './views/Dahsboard/Dahsboard';
import RegisterView from './views/Register/Register';


function App() {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate()

  useEffect(()=>{
    if (userData)navigate('/dashboard');
  },[userData])

  const handleLogin = (user) => {
    setUserData(user);
  };

  const onLogout = () => {
    setUserData(null);
  };

  return (
    <>
    <Routes>

      {/* {LOGIN} */}
      <Route path='/' exact element = {<Home handleLogin={handleLogin} />}/>

      {/* {REGISTER} */}
      <Route path='/register' element = {
        <RegisterView/>
      }/>

      {/* {DASHBOARD} */}
      <Route path='/dashboard' element = {
        <Dahsboard onLogout={onLogout} user={userData} />}/>

      {/* {SCHEDULE APP} */}

      {/* {LOGIN} */}

    </Routes>
    </>
  )
}

export default App
