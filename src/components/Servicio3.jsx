import React, { useState } from 'react';
import background from '../assets/magnet.png';
import ModalComponent from './ModalComponent';

function Servicio3() {
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
          <li>Necesitas aliviar dolores crónicos.</li>
          <li>Complementar tu tratamiento alopático para diversas enfermedades como diabetes, hipertensión, Insuficiencia renal, hígado graso, hipo e hipertiroidismo.</li>
          <li>Fortalecer tu sistema respiratorio, gastrointestinal y complementar tu tratamiento para diversas infecciones.</li>
          <li>Buscar apoyo en enfermedades autoinmunes y desrregulaciones hormonales.</li>
          <li>Presentas desequilibrio disfuncionales como Colón Irritable, Migrañas y Mareos.</li>
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
 <div style={{ height: "100%" }} id="servicio3-id">
      <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
        <div className="p-3 p-md-5 text-center bg-image " style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: "100%",
          opacity: "0.8",
        }}>
          <div className="mask d-flex justify-content-center" style={{ backgroundColor: "rgba(43, 20, 25, 0.7)", height: "100%" }}>
            <div className="d-flex flex-column justify-content-center align-items-center col-md-8 mx-auto">
              <div className="mb-3 text-white">
                <h1 className="mb-2" style={{ fontSize: "3rem", textAlign: "center" }}>Terapia Biomagnetismo</h1>
                <h4 style={{ fontSize: "2rem", textAlign: "center" }}></h4>
              </div>
              <div className="text-white mb-3" style={{ textAlign: "justify", margin: "0 20px" }}>
                <h4 style={{ fontSize: "1.0rem" }}>
                El Biomagnetismo, altamente efectiva, que tiene como objetivo principal restablecer las 
                condiciones de salir del cuerpo humano a través de la colocación de pares de imanes de 
                neodimio en puntos específicos del cuerpo. Estos imanes, dependiendo de su carga (positiva 
                o negativa), generan una serie de efectos beneficiosos tanto a nivel celular como corporal.
                Su eficacia ha sido ampliamente respaldad y es una opción confiable para restablecer la salud
                y bienestar del cuerpo de forma natural.
                
                <h4 style={{ fontSize: "1.1rem" }}><br /> Duración: 1 hora 30 min a 2 horas</h4>
                <h4 style={{ fontSize: "1.1rem" }}> Inversión: $ 30.000 cada sesión</h4>

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

export default Servicio3;
