import Navbar from '../components/Navbar/Navbar';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1>Kadenza Escuela de Baile</h1>
        <p>Explora nuestras clases y eventos.</p>
      </div>
    </div>
  );
}

export default Home;