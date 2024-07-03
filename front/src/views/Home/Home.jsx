import Login from "../../components/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import styles from './Home.module.css'
const {container, content} = styles;

function Home() {
  return (
    <div className = {container}>
      <Navbar />
      <div className= {content} >
        <h1>Kadenza Escuela de Baile</h1>
        <p>Explora nuestras clases y eventos.</p>
      </div>
      <div>
        <Login title= "Login" />
      </div>
    </div>
  );
}

export default Home;