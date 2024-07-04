import Schedule from "../../components/Schedule/Schedule";
import Navbar from "../../components/Navbar/Navbar";
import styles from '../Register/Register.module.css';

const { container, content } = styles;

function ScheduleView() {
    
    return (
        <div className = {container}>
            <Navbar />
            <div className= {content} >
                <h1
                style={{
                    marginTop: "2rem",
                  }}
                >Kadenza Escuela de Baile</h1>
            </div>
            <Schedule title="Register"/>
        </div>
        );
    }

export default ScheduleView;