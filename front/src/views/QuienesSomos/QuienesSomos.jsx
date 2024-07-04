import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import styles from '../QuienesSomos/QuienesSomos.module.css';

const { container, content,navbarContainer } = styles;

function QuienesSomos() {
  return (
    <div className={container}>
        <div className={navbarContainer}>
            <Navbar />
        </div>
    <div className= {content} >
        <h1>¿QUIENES SOMOS?</h1>

        <p>
          ¡Hola! Somos Kadenza Escuela de Baile, un lugar donde la pasión por los ritmos caribeños se convierte en arte y movimiento. Con años de trayectoria, hemos enseñado y compartido nuestra pasión por el baile, ofreciendo clases tanto para principiantes como para expertos.
        </p>
        <p>
          En nuestras instalaciones, no solo impartimos clases; también alquilamos nuestros salones a talentosos profesores que comparten nuestro amor por la danza. Además, organizamos eventos emocionantes donde traemos a bailarines reconocidos, tanto nacionales como internacionales, para inspirar y enriquecer nuestra comunidad.
        </p>
        <p>
          Nuestra compañía, Compañía Kadenza, es el corazón de nuestras presentaciones. Compuesta por bailarines que también son reconocidos instructores, ofrecemos un espectáculo único de cena y baile que celebra nuestra dedicación y pasión por el arte del baile.
        </p>
        <p>
          Únete a nosotros en Kadenza Escuela de Baile y descubre el mundo vibrante y emocionante de los ritmos caribeños. ¡Te esperamos!
        </p>
      </div>
    </div>
  );
}

export default QuienesSomos;