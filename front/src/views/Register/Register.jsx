import Register from "../../components/Register/Register";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Register.module.css';

const { container, content } = styles;

function RegisterView() {
    const navigate = useNavigate();
    
    return (
        <div className = {container}>
            <Navbar />
            <div className= {content} >
                <h1>Kadenza Escuela de Baile</h1>
                <p>Explora nuestras clases y eventos.</p>
            </div>
            <Register title="Register"/>
        </div>
        );
    }

export default RegisterView;