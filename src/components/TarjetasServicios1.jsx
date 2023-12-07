import React from 'react';
import img1 from '../assets/energizacion1.png';
import img2 from '../assets/patrones1.png'
import biomagnetismo from '../assets/biomagnetismo.png'
import floral from  '../assets/floral.png'
import sanacion from '../assets/sanacion.png'

// falta agregar un carrusel que permita deslizarse por los demás servicios que ofrece la empresa

function TarjetasServicios1() {
    return (
        <div className="mi-componente" style={{ display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap'}}>

      <div className="card" style={{width: '45%',
        margin: '10px',
        backgroundColor: 'rgba(114, 0, 76, 0.8)',
        borderRadius: '20px'}}>

        <div className="card-body" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>


          <h5 className="card-title">Terapia biomagnetismo</h5>
          <p className="card-text">Restablecer la salud de nuestro ser, situando agentes magnéticos en todo nuestro cuerpo</p>
          <a href="#" className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img style={{width: '100%'}} src={magnet} alt="Terapia de energización" />
        </div>
      </div>

      <div className="card" style={{width: '45%',
        margin: '10px',
        backgroundColor: 'rgba(114, 0, 76, 0.8)',
        borderRadius: '20px'}}>

        <div className="card-body" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
          <h5 className="card-title">Terapia de sanación de patrones</h5>
          <p className="card-text">Trabajaremos en colaboración con tu subconsciente para crear una conexion profunda con esas creencias y emociones limitantes, a traves de esto le daremos un nuevo significado a esos patrones restrictivos.</p>
          <a href="#" className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img src={img2} alt="Terapia de sanación de patrones" style={{width: '100%'}}/>
        </div>
      </div>

      <div className="card" style={{width: '45%',
        margin: '10px',
        backgroundColor: 'rgba(114, 0, 76, 0.8)',
        borderRadius: '20px'}}>

        <div className="card-body" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
          <h5 className="card-title">Terapia floral</h5>
          <p className="card-text">la Terapia Floral es una terapia vibracional para conectarte con el origen de tus experiencias y emociones usando Sistemas florales</p>
          <a href="#" className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img src={floral} alt="Terapia floral" style={{width: '100%'}}/>
        </div>
      </div>

      <div className="card" style={{width: '45%',
        margin: '10px',
        backgroundColor: 'rgba(114, 0, 76, 0.8)',
        borderRadius: '20px'}}>

        <div className="card-body" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
          <h5 className="card-title">Terapia energia y sanacion cuantica</h5>
          <p className="card-text">Canaliza nuestra energía cuántica, mediante maestros espirituales que operan en la quinta dimensión para sanar psico-espiritualmente</p>
          <a href="#" className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img src={sanacion} alt="Terapia cuantica" style={{width: '100%'}}/>
        </div>
      </div>
    </div>
    );
}

export default TarjetasServicios1;
