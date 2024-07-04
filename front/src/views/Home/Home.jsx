import Login from "../../components/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import styles from './Home.module.css'
const {container, content, navbarContainer} = styles;

function Home() {
  return (
    <div className={container}>
      <div className={navbarContainer}>
        <Navbar />
      </div>
    <div className= {content} >
      <h1>Kadenza Escuela de Baile</h1>
    </div>
    <div>
      <Login title= "Login" />
    </div>
  </div>
  );
}

export default Home;