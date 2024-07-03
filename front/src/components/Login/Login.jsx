import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';
import { login } from '../../redux/userReducer';

function Login({ title }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', { username, password });
      if (response.data.login) {
        dispatch(login(response.data));
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Error during login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <div className={styles['login-title']}>{title}</div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {error && <p>{error}</p>}
      <p className='texte-center'>Not a member?<Link to ='Register'>Register </Link></p>
    </form>
  );
}

export default Login;
