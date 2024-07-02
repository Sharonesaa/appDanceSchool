import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import styles from './Register.module.css';

function Register({ title }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [nDni, setNDni] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/user/register', { 
          name, 
          email, 
          birthdate, 
          nDni, 
          username, 
          password, 
          profilePicture 
        });
         console.log('User data to be sent:', response);

        if (response.data.user) {
          console.log(response.data);
          alert(`Usuario registrado con exito:${response.data.user.id}`)
        } else {
          setError('Registration failed');
        }
      } catch (err) {
        setError('Error during registration');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className={styles['register-form']}>
        <div className={styles['register-title']}>{title}</div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="DNI Number"
            value={nDni}
            onChange={(e) => setNDni(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
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
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Profile Picture URL"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {error && <p>{error}</p>}
      </form>
    );
  }

export default Register ;
