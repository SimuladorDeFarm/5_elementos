import React from 'react';
import img1 from '../assets/energizacion1.png';
import img2 from '../assets/patrones1.png'
import img3 from '../assets/biomagnetismo1.png'

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


          <h5 className="card-title">Terapia de energización</h5>
          <p className="card-text">Reiki, magnetización, entre otras.</p>
          <a href="#" className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img style={{width: '100%'}} src={img1} alt="Terapia de energización" />
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
          <p className="card-text">Trabajaremos en colaboración con tu subconsciente.</p>
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
          <p className="card-text">la Terapia Floral es una terapia vibracional</p>
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
          <h5 className="card-title">Terapia cuantica</h5>
          <p className="card-text">Esta terapia combina la sanación cuántica junto con la terapia Floral</p>
          <a href="#" className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img src={sanacion} alt="Terapia cuantica" style={{width: '100%'}}/>
        </div>
      </div>
    </div>
    );
}

export default TarjetasServicios1;
