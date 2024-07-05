import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

function Register({ title }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [nDni, setNDni] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
      setProfilePicture(e.target.files[0]);
    };
  
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!name || !email || !birthdate || !nDni || !username || !password || !profilePicture) {
          setError('Todos los campos deben estar llenos.');
          return;
      }
      if (password.length < 8) {
          setError('La contraseña debe tener al menos 8 caracteres.');
          return;
      }
      // if (!profilePicture.endsWith('.jpg')) {
      //     setError('La foto de perfil debe ser un archivo .jpg.');
      //     return;
      // } // ahora es una file no un str
      if (nDni.length < 5) {
          setError('Ingrese un DNI válido de al menos 5 dígitos.');
          return;
      }

      // Clear error before making the request
      setError('');

      try {
        const response = await axios.post(
          'http://localhost:3000/user/register', 
          { 
            name, 
            email, 
            birthdate, 
            nDni, 
            username, 
            password, 
            profilePicture 
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
          
          if (response.data.user) {
              console.log(response.data);
              alert(`Usuario registrado con éxito: ${response.data.user.id}`);
              navigate('/'); // Redirect to login page
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
            className={`form-control ${styles.noSpinner}`}
            placeholder="DNI Number"
            value={nDni}
            min="0"
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
            type="file"
            className="form-control"
            placeholder="Profile Picture URL"
            accept="image/*"
            onChange={handleFileChange}
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
