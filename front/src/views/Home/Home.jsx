import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import styles from './Home.module.css'
const {container, content} = styles;

function Home({title, handleLogin}) {
  return (
    <div className = {container}>
      <Navbar />
      <div className= {content} >
        <h1>Kadenza Escuela de Baile</h1>
        <p>Explora nuestras clases y eventos.</p>
      </div>
      <div>
        <Form title={title} handleLogin= {handleLogin}/>
      </div>
    </div>
  );
}

export default Home;