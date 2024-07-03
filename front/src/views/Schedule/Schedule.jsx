import Schedule from "../../components/Schedule/Schedule";
import Navbar from "../../components/Navbar/Navbar";
import styles from '../Register/Register.module.css';

const { container, content } = styles;

function ScheduleView() {
    
    return (
        <div className = {container}>
            <Navbar />
            <div className= {content} >
                <h1>Kadenza Escuela de Baile</h1>
                <p>Explora nuestras clases y eventos.</p>
            </div>
            <Schedule title="Register"/>
        </div>
        );
    }

export default ScheduleView;