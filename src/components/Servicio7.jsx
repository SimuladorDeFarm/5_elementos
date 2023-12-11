/*Terapia que utiliza diversas técnicas energéticas y
vibracionales (Reiki, Magnetoterapia, entre otras). Su objetivo
es realizar un profundo y completo trabajo energético,
abarcando tanto el nivel físico como los cuerpos energéticos,
limpiando, desbloqueando, energizando y equilibrado, tu
campo y centros energéticos, órganos y sistemas de tu
cuerpo.

Se agrega además, una profunda lectura de tu campo
energético para obtener una comprensión más completa de
tus necesidades individuales
 */

import React, { useState } from 'react';
import background from '../assets/energizacion1.png';
import ModalComponent from './ModalComponent';

function Servicio7() {
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
            <li>Sientes baja energía, agotamiento físico y mental o
                sientes algún desequilibrio energético.</li>
            <li>Te sientes estancado y/o paralizad@ y desconoces la
                causa</li>
            <li>Quieres revisar la alineación de tus centros
                energéticos, así como también, realizar una profunda
                lectura de estos y limpieza de tu campo áurico.</li>
            <li>Buscas una instancia de relajación profunda y
                conexión interior.</li>
            <li>Te gustaría iniciar un proceso terapéutico energético
                para restablecer tu energía vital.</li>
            <li>Buscas complementar tu tratamiento médico para
                trabajar diversas enfermedades como Colón Irritable,
                Cefaleas, Migrañas, Lupus, Fibromialgia, dolores, entre
                muchas otras.</li>
        </ol>
        <center>
          
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
 <div style={{ height: "100%" }} id="servicio7-id">
      <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
        <div className="p-3 p-md-5 text-center bg-image " style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: "100%",
          opacity: "0.8",
        }}>
          <div className="mask d-flex justify-content-center" style={{ backgroundColor: "rgba(115, 75, 58, 0.6)", height: "100%" }}>
            <div className="d-flex flex-column justify-content-center align-items-center col-md-8 mx-auto">
              <div className="mb-3 text-white">
                <h1 className="mb-2" style={{ fontSize: "3rem", textAlign: "center" }}>Terapia Energización</h1>
                <h4 style={{ fontSize: "2rem", textAlign: "center" }}></h4>
              </div>
              <div className="text-white mb-3" style={{ textAlign: "justify", margin: "0 20px" }}>
                <h4 style={{ fontSize: "1.0rem" }}>
                Terapia que utiliza diversas técnicas energéticas y
                vibracionales (Reiki, Magnetoterapia, entre otras). Su objetivo
                es realizar un profundo y completo trabajo energético,
                abarcando tanto el nivel físico como los cuerpos energéticos,
                limpiando, desbloqueando, energizando y equilibrado, tu
                campo y centros energéticos, órganos y sistemas de tu
                cuerpo.

                Se agrega además, una profunda lectura de tu campo
                energético para obtener una comprensión más completa de
                tus necesidades individuales

                Como es una energía que viene directamente desde
                los mundos espirituales, es simple, rápida y altamente
                efectiva.

                <h4 style={{ fontSize: "1.1rem" }}><br />Duración: 1 horay 45 min</h4>
                <h4 style={{ fontSize: "1.1rem" }}>Inversión: $ 35.000 CLP</h4>


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

export default Servicio7;