import React, { useState } from 'react';
import background from '../assets/floral.png';
import ModalComponent from './ModalComponent';

function Servicio5() {
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
              <li>Si buscar encontrar un equilibrio emocional y conectar con la adaptación frente a los cambios.</li>
              <li>Si buscas un apoyo para ese duelo, angustia, crisis de pánico, miedos y depresión.</li>
              <li>Si quieres comenzar a trabajar en tu autoestima, seguridad y confianza, así como también para trabajar y sanar tus emociones, esta es la indicada.</li>
              <li>Si te sientes pesimista, con desánimo, sin sentir que estás disfrutando tu vida.</li>
              <li>Como un complemento para trabajar tu hiperactividad, insomnio y falta de descanso.</li>
              <li>Te sientes con un nerviosismo, ansiedad y tensión constante.</li>
              <li>Quieres un apoyo psico-emocional para tu embarazo y posterior a él.</li>
              <li>Para trabajar en el equilibrio de tu energía femenina y Masculina.</li>
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
 <div style={{ height: "100%" }} id="servicio5-id">
      <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
        <div className="p-3 p-md-5 text-center bg-image " style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: "100%",
          opacity: "0.8",
        }}>
          <div className="mask d-flex justify-content-center" style={{ backgroundColor: "rgba(144, 145, 160, 0.7)", height: "100%" }}>
            <div className="d-flex flex-column justify-content-center align-items-center col-md-8 mx-auto">
              <div className="mb-3 text-white">
                <h1 className="mb-2" style={{ fontSize: "3rem", textAlign: "center" }}>Terapia Floral</h1>
                <h4 style={{ fontSize: "2rem", textAlign: "center" }}></h4>
              </div>
              <div className="text-white mb-3" style={{ textAlign: "justify", margin: "0 20px" }}>
                <h4 style={{ fontSize: "1.0rem" }}>
                La Terapia Floral es una terapia vibracional que te
                proporciona herramientas confiables para conectarte con
                el origen de tus experiencias y emociones. A través de esta
                terapia, encontrarás alivio, contención y. sobre todo, amor.
                Actualmente, trabajo con cuatro sistemas florales de
                renombre: el Sistema Floral de Bach, Almascencia Cel,
                Esencias del Antiguo México y Esencias Chamánicas del
                Síntoma. Cada uno de estos sistemas se enfoca en
                aspectos específicos del ser, guiándote hacia el equilibrio y
                el bienestar.

                <h4 style={{ fontSize: "1.1rem" }}><br />Duración: 1 hora</h4>
                <h4 style={{ fontSize: "1.1rem" }}>Inversión: $ 25.000 CLP</h4>
                <h4 style={{ fontSize: "1.1rem" }}>(No incluye valor de envío de esencias florales para terapia online)</h4>


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

export default Servicio5;