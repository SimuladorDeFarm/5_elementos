import React, { useState } from 'react';
import background from '../assets/sanacionPatrones.png';
import ModalComponent from './ModalComponent';

function Servicio4() {
  const [showModal, setShowModal] = useState(false);
  const [serviceDetails, setServiceDetails] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const obtenerDetallesDelServicio = () => {
    // Aquí deberías implementar la lógica para obtener los detalles del servicio
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
          <h4>*Tener en cuenta que al utilizar PayPal, los pagos se procesarán en dólares estadounidenses (USD)*</h4>
        </center>
      </>
    );
  };

  const handleButtonClick = () => {
    // Lógica para obtener los detalles del servicio (puedes pasarlos como prop)
    const details = obtenerDetallesDelServicio();
    setServiceDetails(details);
    handleShow();
  };

  return (
    <>
 <div style={{ height: "100%" }} id="servicio4-id">
      <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
        <div className="p-3 p-md-5 text-center bg-image " style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: "100%",
          opacity: "0.8",
        }}>
          <div className="mask d-flex justify-content-center" style={{ backgroundColor: "rgba(59, 56, 100, 0.6)", height: "100%" }}>
            <div className="d-flex flex-column justify-content-center align-items-center col-md-8 mx-auto">
              <div className="mb-3 text-white">
                <h1 className="mb-2" style={{ fontSize: "3rem", textAlign: "center" }}>Terapia Sanación de Patrones</h1>
                <h4 style={{ fontSize: "2rem", textAlign: "center" }}></h4>
              </div>
              <div className="text-white mb-3" style={{ textAlign: "justify", margin: "0 20px" }}>
                <h4 style={{ fontSize: "1.0rem" }}>
                En esta sesión, trabajaremos en colaboración con tú
                inconsciente utilizando técnicas de consejería,
                energización y reprogramación. El objetivo es
                establecer una conexión profunda con esas creencias y
                emociones limitantes que estás experimentando. A
                través de este proceso, daremos un nuevo significado a
                esos patrones restrictivos, transformándolos en
                herramientas positivas y potenciadoras para tu vida.

                <h4 style={{ fontSize: "1.1rem" }}><br /> Duración: 1 hora y 45 min</h4>
                <h4 style={{ fontSize: "1.1rem" }}>Inversión: $ 36.000</h4>
                <h4 style={{ fontSize: "1.1rem" }}>(Incluye esencias florales)</h4>


                </h4>
              </div>
              <a className="btn btn-outline-light btn-lg" onClick={handleButtonClick} role="button" style={{ fontSize: "1.2rem" }}>
                Ideal para ti si...
              </a>
              <ModalComponent show={showModal} handleClose={handleClose} serviceDetails={serviceDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Servicio4;
