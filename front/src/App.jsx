import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home';
import Dahsboard from './views/Dahsboard/Dahsboard';

function App() {
  const[isLogin, setIsLogin] = useState (false);
  const [user, setUser] = useState(null);

  
  const handleLogin = (user) => {
    setIsLogin(true);
    setUser(user);
  };

  const onLogout = () => {
    setIsLogin(false);
    setUser(null);
  };

  return (
    <>
      {!isLogin ? (
        <Home title="Login" handleLogin={handleLogin} />
      ) : (
        <Dahsboard onLogout={onLogout} user={user} />
      )}
    </>
  );
}

export default App
