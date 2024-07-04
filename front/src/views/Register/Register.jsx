import Register from "../../components/Register/Register";
import Navbar from "../../components/Navbar/Navbar";

import styles from './Register.module.css';

const { container, content } = styles;

function RegisterView() {
    
    return (
        <div className = {container}>
            <Navbar />
            <Register title="Register"/>
        </div>
        );
    }

export default RegisterView;