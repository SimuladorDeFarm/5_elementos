import { React, useState } from 'react';
import img2 from '../assets/patrones1.png'
import magnet from '../assets/magnet.png'
import floral from '../assets/floral.png'
import sanacion from '../assets/sanacion.png'
import energizacion from '../assets/energizacion1.png';
import ModalComponent from './ModalComponent';

function TarjetasServicios1() {

  const [showModal, setShowModal] = useState(false);
  const [serviceDetails, setServiceDetails] = useState('');
  const [selectedOption, setSelectedOption] = useState(1);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const obtenerDetallesDelServicio = (option) => {
    switch (option) {
      case 1:
        return (
          <>
            <h4>Esta Terapia es util para ti si:</h4>
            <ol>
              <li>Necesitas aliviar dolores crónicos.</li>
              <li>Complementar tu tratamiento alopático para diversas enfermedades como diabetes, hipertensión, Insuficiencia renal, hígado graso, hipo e hipertiroidismo.</li>
              <li>Fortalecer tu sistema respiratorio, gastrointestinal y complementar tu tratamiento para diversas infecciones.</li>
              <li>Buscar apoyo en enfermedades autoinmunes y desrregulaciones hormonales.</li>
              <li>Presentas desequilibrio disfuncionales como Colón Irritable, Migrañas y Mareos.</li>
            </ol>
            <center>
              <h4>Duración: 1 hora 30 min a 2 horas</h4>
              <h4>Inversión: $ 30.000 cada sesión</h4>
            </center>
          </>
        );
      case 2:
        return (
          <>
            <h4>Esta Terapia es util para ti si:</h4>
            <ol>
              <li>Necesitas descubrir cuáles son tus creencias y patrones limitantes y trabajar en éstos.</li>
              <li>Quieres sanar a tu niň@ y adolescente interior, esta puede ser tu opción.</li>
              <li>Quieres liberarte de patrones que provengan de tu enseñanzas y relación con tu árbol, esta terapia es tu aliada</li>
              <li>Quieres sanar tu falta de confianza e inseguridad en tus capacidades, esta es tu terapia</li>
              <li>Quieres trabajar en "tu sombra"; esa parte que no queremos reconocer y ocultamos y que está limitando nuestro avanzar.</li>
            </ol>
            <center>
              <h4>Duración: 1 hora y 45 min</h4>
              <h4>Inversión: $ 36.000</h4>
              <h4>(Incluye esencias florales)</h4>
            </center>
          </>
        );
      case 3:
        return (
          <>
            <h4>Esta Terapia es util para ti si:</h4>
            <ol>
              <li>Si buscar encontrar un equilibrio emocional y conectar con la adaptación frente a los cambios.</li>
              <li>Si buscas un apoyo para ese duelo, angustia, crisis de pánico, miedos y depresión.</li>
              <li>Si quieres comenzar a trabajar en tu autoestima, seguridad y confianza, así como también para trabajar y sanar tus emociones, esta es la indicada.</li>
              <li>Si te sientes pesimista, con desánimo sin sentir que estás disfrutando tu vida.</li>
              <li>Como un complemento para trabajar tu hiperactividad, insomnio y falta de descanso.</li>
              <li>Te sientes con un nerviosismo, ansiedad y tensión constante.</li>
              <li>Quieres un apoyo psico-emocional para tu embarazo y posterior a él.</li>
              <li>Para trabajar en el equilibrio de tu energía femenina y Masculina.</li>
            </ol>
            <center>
              <h4>Duración: 1 hora</h4>
              <h4>Inversión: $ 25.000 CLP</h4>
              <h4>(No incluye valor de envío de esencias florales para terapia online)</h4>
            </center>
          </>
        );
      case 4:
        return (
          <>
            <h4>Esta Terapia es util para ti si:</h4>
            <ol>
              <li>Sientes agotamiento y/o con cansancio permanente</li>
              <li>Quieres una limpieza de tus cuerpos energéticos, así como también, equilibrar la energía de tus Centros Enérgeticos (Chakras).</li>
              <li>Buscas una terapia que te entregue una armonización completa en los niveles fisico, vital, emocional y mental., sintiendo una agradable y profunda relajación y sensación de paz..</li>
              <li>Buscas una Terapia de Sanación Espiritual distinta, sin duda esta es tu alternativa</li>
              <li>Es una terapia que permite limpiar el programa de diversas enfermedades desde todos los planos energéticos, por lo que la hace un excelente complemento para diversos tratamientos.</li>
            </ol>
            <center>
              <h4>Duración: 1 hora</h4>
              <h4>Inversión: $ 25.000 CLP</h4>
              <h4>Paypal: $30 dls</h4>
            </center>
          </>
        );
      default:
        return null;
    }
  };

  const handleButtonClick = (option) => {
    // Lógica para obtener los detalles del servicio (puedes pasarlos como prop)
    const details = obtenerDetallesDelServicio(option);
    setServiceDetails(details);
    setSelectedOption(option);
    handleShow();
  };

  const cardStyle = {
    margin: '10px',
    backgroundColor: 'rgba(114, 0, 76, 0.8)',
    borderRadius: '20px'
  }
  
  const cardImgStyle = {
    width: "100%",
    border: '3px solid white',
    borderRadius: '6px',
  }

  return (
    <div className="mi-componente" style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>

      <div className="card" style={cardStyle}>

        <div className="card-body" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>


          <h5 className="card-title">Terapia biomagnetismo</h5>
          <p className="card-text">Restablecer la salud de nuestro ser, situando agentes magnéticos en todo nuestro cuerpo</p>
          <a onClick={() => handleButtonClick(1)} className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img style={cardImgStyle} src={magnet} alt="Terapia de energización" />
          <ModalComponent show={showModal} handleClose={handleClose} serviceDetails={serviceDetails} />
        </div>
      </div>

      <div className="card" style={cardStyle}>

        <div className="card-body" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h5 className="card-title">Terapia de sanación de patrones</h5>
          <p className="card-text">Trabajaremos en colaboración con tu subconsciente para crear una conexión profunda con esas creencias y emociones limitantes, a través de esto le daremos un nuevo significado a esos patrones restrictivos.</p>
          <a onClick={() => handleButtonClick(2)} className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img src={img2} alt="Terapia de sanación de patrones" style={cardImgStyle} />
          <ModalComponent show={showModal} handleClose={handleClose} serviceDetails={serviceDetails} />
        </div>
      </div>

      <div className="card" style={cardStyle}>

        <div className="card-body" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h5 className="card-title">Terapia floral</h5>
          <p className="card-text">la Terapia Floral es una terapia vibracional para conectarte con el origen de tus experiencias y emociones usando Sistemas florales</p>
          <a onClick={() => handleButtonClick(1)} className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img src={floral} alt="Terapia floral" style={cardImgStyle} />
        </div>
      </div>

      <div className="card" style={{
        width: '45%',
        margin: '10px',
        backgroundColor: 'rgba(114, 0, 76, 0.8)',
        borderRadius: '20px'
      }}>

        <div className="card-body" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h5 className="card-title">Terapia cuantica</h5>
          <p className="card-text">Canalizar nuestra energía cuántica, mediante maestros espirituales que operan en la quinta dimensión para sanar psico-espiritualmente </p>
          <a href="#" className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img src={sanacion} alt="Terapia cuantica" style={cardImgStyle} />
        </div>
      </div>

      <div className="card" style={cardStyle}>

        <div className="card-body" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h5 className="card-title">Terapia energización</h5>
          <p className="card-text"> Terapia que utiliza técnicas de energías y vibraciones para limpiar, desbloquear y equilibrar tu campo</p>
          <a onClick={() => handleButtonClick(1)} className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
          <img src={energizacion} alt="Terapia cuantica" style={cardImgStyle} />
        </div>
      </div>

    </div>
  );
}

export default TarjetasServicios1;


/*
import React from 'react';
import img1 from '../assets/energizacion1.png';
import img2 from '../assets/patrones1.png'
import magnet from '../assets/magnet.png'
import floral from  '../assets/floral.png'
import sanacion from '../assets/sanacion.png'
import energizacion from '../assets/energizacion.png';
import ModalComponent from './ModalComponent';




const cards = [
  {
    title: 'Terapia biomagnetismo',
    description: 'Restablecer la salud de nuestro ser, situando agentes magnéticos en todo nuestro cuerpo',
    img: magnet,
    alt: 'Terapia de energización'
  },
  {
    title: 'Terapia de sanación de patrones',
    description: 'Trabajaremos en colaboración con tu subconsciente para crear una conexión profunda con esas creencias y emociones limitantes, a través de esto le daremos un nuevo significado a esos patrones restrictivos.',
    img: img2,
    alt: 'Terapia de sanación de patrone'
  },
  {
    title: 'Terapia floral',
    description: 'la Terapia Floral es una terapia vibracional para conectarte con el origen de tus experiencias y emociones usando Sistemas florales',
    img: floral,
    alt: 'Terapia floral'
  },
  {
    title: 'Terapia cuantica',
    description: 'Canalizar nuestra energía cuántica, mediante maestros espirituales que operan en la quinta dimensión para sanar psico-espiritualmente ',
    img: sanacion,
    alt: 'Terapia cuantica'
  },
  {
    title: 'Terapia energización',
    description: 'Terapia que utiliza técnicas de energías y vibraciones para limpiar, desbloquear y equilibrar tu campo',
    img: energizacion,
    alt: 'Terapia de energización'
  }
]

const cardStyle = {
  margin: '10px',
  backgroundColor: 'rgba(114, 0, 76, 0.8)',
  borderRadius: '20px'
}

const cardImgStyle = {
  width: "100%",
  border: '3px solid white',
  borderRadius: '6px',
}

function TarjetasServicios1() {
    return (
    <div className="mi-componente" style={{ display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'}}>

        {cards.map((card, index) => (
          <div key={index} className="card" style={cardStyle}>
              <div className="card-body bodyCard" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  color: 'white',
              }}>
                  <h5 className="card-title" style={{textAlign:'left'}}>{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href="#" className="btn btn-outline-light btn-sm" role="button">Ver detalles</a>
                  <div style={{padding: '5px', marginTop: '5px'}}>
                    <img style={cardImgStyle} src={card.img} alt={card.alt} />
                  </div>
                  
              </div>
          </div>
        ))}

    </div>
    );
}

export default TarjetasServicios1;
*/