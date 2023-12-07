import React, { useState } from 'react';
import background from '../assets/terapiaregresiva1.png';
import ModalComponent from './ModalComponent';

function Servicio1() {
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
          <li>Necesitas encontrar el origen de ese conflicto o problema y solucionarlo desde su origen.</li>
          <li>Necesitas sanar heridas emocionales profundas, duelos, experiencias traumáticas y pérdidas.</li>
          <li>Quieres trabajar tus fobias, crisis de pánico, depresión, desde su origen.</li>
          <li>Necesitas identificar patrones de comportamiento, relaciones o situaciones que se repiten en tu vida.</li>
          <li>Comprender las dinámicas de las relaciones interpersonales difíciles o conflictivas. Sanar relaciones de pareja, familiares, amigos.</li>
          <li>Quieres encontrar tu propósito de vida, no te sientes merecedor de ella, o sientes un constante sentimiento de culpa.</li>
          <li>Necesitas descubrir talentos, habilidades y dones latentes que pueden ser aprovechados en tu vida presente</li>
        </ol>
        <center>
          <h4>Duración: 2 horas a 2 horas 30 min.</h4>
          <h4>Inversión: $ 35.000CLP</h4>
          <h4>Inversión: $ 45.000 CLP</h4>
          <h4>Paypal: 60 dolares</h4>
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
 <div style={{ height: "100%" }} id="servicio-id">
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="p-3 p-md-5 text-center bg-image rounded-3" style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: "100%",
          opacity: "0.8",
        }}>
          <div className="mask" style={{ backgroundColor: "rgba(114, 0, 76, 0.3)", height: "100%" }}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="mb-3 text-white">
                <h1 className="mb-2" style={{ fontSize: "4rem", textAlign: "center" }}>Terapia regresiva</h1>
                <h4 style={{ fontSize: "2rem", textAlign: "center" }}>(terapia a vidas pasadas)</h4>
              </div>
              <div className="text-white mb-3" style={{ textAlign: "justify", margin: "0 20px" }}>
                <h4 style={{ fontSize: "1.0rem" }}>
                  La Terapia a Vidas Pasadas es una técnica de sanación
                  altamente efectiva y poderosa. Con ella, puedes
                  encontrar la raíz de cualquier síntoma, problema, trauma
                  o conflicto por el cual estés consultando y sanarlo desde
                  su origen. Mediante un estado ampliado de consciencia.
                  exploramos diversos recuerdos que pueden brindar
                  explicaciones sobre el momento, la forma y el lugar en
                  que surgió dicho síntoma. Este origen puede estar en un
                  recuerdo de tu vida actual, en la infancia, en el vientre
                  materno o en una vida pasada.
                </h4>
              </div>
              <a className="btn btn-outline-light btn-lg" onClick={handleButtonClick} role="button" style={{ fontSize: "1.2rem" }}>
                Ver Detalles
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

export default Servicio1;
