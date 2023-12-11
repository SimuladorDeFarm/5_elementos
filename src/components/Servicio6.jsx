import React, { useState } from 'react';
import background from '../assets/sanacion.png';
import ModalComponent from './ModalComponent';

function Servicio6() {
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
          <li>Sientes agotamiento y/o con cansancio permanente</li>
          <li>Quieres una limpieza de tus cuerpos energéticos, así como también, equilibrar la energía de tus Centros Enérgeticos (Chakras).</li>
          <li>Buscas una terapia que te entregue una armonización completa en los niveles fisico, vital, emocional y mental., sintiendo una agradable y profunda relajación y sensación de paz..</li>
          <li>Buscas una Terapia de Sanación Espiritual distinta, sin duda esta es tu alternativa</li>
          <li>Es una terapia que permite limpiar el programa de diversas enfermedades desde todos los planos energéticos, por lo que la hace un excelente complemento para diversos tratamientos.</li>
        </ol>
        <center>
          <h4>Duración: 1 hora</h4>
          <h4>Inversión: $ 25.000 CLP</h4>
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
 <div style={{ height: "100%" }} id="servicio6-id">
      <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
        <div className="p-3 p-md-5 text-center bg-image " style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: "100%",
          opacity: "0.8",
        }}>
          <div className="mask d-flex justify-content-center" style={{ backgroundColor: "rgba(46, 45, 57, 0.6)", height: "100%" }}>
            <div className="d-flex flex-column justify-content-center align-items-center col-md-8 mx-auto">
              <div className="mb-3 text-white">
                <h1 className="mb-2" style={{ fontSize: "3rem", textAlign: "center" }}>Terapia Sanación Cuántica</h1>
                <h4 style={{ fontSize: "2rem", textAlign: "center" }}></h4>
              </div>
              <div className="text-white mb-3" style={{ textAlign: "justify", margin: "0 20px" }}>
                <h4 style={{ fontSize: "1.0rem" }}>
                Es una técnica que canaliza Energía Cuántica, la cual
                se lleva a cabo con la asistencia continua de maestros
                espirituales que operan en la quinta dimensión
                (Templo Haldein), los que facilitan la energía y la
                sanación psico-espiritual de la persona, permitiendo
                elevar la frecuencia vibratoria de su campo
                energético.

                Como es una energía que viene directamente desde
                los mundos espirituales, es simple, rápida y altamente
                efectiva.

                <h4 style={{ fontSize: "1.1rem" }}><br />Duración: 1 hora</h4>
                <h4 style={{ fontSize: "1.1rem" }}>Inversión: $ 25.000 CLP</h4>



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

export default Servicio6;