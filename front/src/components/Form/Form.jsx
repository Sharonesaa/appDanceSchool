import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import styles from './Form.module.css';

function Form({ title, handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', { username, password });
      if (response.data.login) {
        handleLogin(response.data.user);
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
    </form>
  );
}

export default Form;
