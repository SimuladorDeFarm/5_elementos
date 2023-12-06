import React, { useState } from 'react';
import background from '../assets/constelacionesfamiliares1.png'
import ModalComponent from './ModalComponent';

function Servicio2() {

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
          <li>Quieres descubrir si estás repitiendo patrones de comportamiento y dinámicas "heredadas" de tu familia.</li>
          <li>Tienes una relación poco sana con el dinero: Sientes que no ganas lo suficiente, se te va rápidamente de las manos y/o no puedes evitar endeudarte.</li>
          <li>Necesitas liberarte de lealtades que están relacionadas a tu sistema familiar y que tengan que ver con tu autoestima. seguridad, confianza, etc, TRANSPERSONAL.</li>
          <li>Sientes una necesidad profunda de cuidar a tus padres que estás en "deuda con ellos"y/o una profunda tristeza de lo que vivieron</li>
          <li>Sientes que tus padres, te abandonaron, maltrataron o no fueron buenos padres contigo.</li>
          <li>Comprender la causa de enfermedades "heredadas" como Depresión, Diabetes, Insomnio, entre otros.</li>
        </ol>
        <center>
          <h4>Duración: 1 hora a 1 hora y 30 min</h4>
          <h4>Inversión: $ 35.000CLP</h4>
          <h4>Paypal: 45 dls</h4>
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
                En lugar de enfocarse únicamente en el individuo, este
                      método trabaja con la energía y el campo de tu sistema
                      familiar. El objetivo principal es entender y comprender las
                      dinámicas familiares que están influyendo en el conflicto o
                      situación por la cual consultas, con el fin de entregarle una
                      solución a ello. Durante las sesiones, se utilizan figuras o
                      plantillas que representan de manera simbólica a los
                      diferentes integrantes de tu sistema familiar.De esta
                      manera, se crea un espacio para visualizar y explorar de
                      manera concreta las relaciones y las interacciones dentro
                      de tu familia
                      
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
  )
}

export default Servicio2

/* <div style={{ height: "100%" }}>
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div class="p-5 text-center bg-image rounded-3" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: "100%",
            opacity: "0.8",
          }}>
            <div class="mask" style={{ backgroundColor: "rgba(114, 0, 76, 0.3)", height: "100%" }}>
              <div class="d-flex justify-content-center align-items-center h-100" style={{ margin: "40px" }}>
                <div class="text-white d-flex" style={{ flex: 1 }}>
                  <div className="left-column mr-5" style={{ flex: 1 }}>
                    <h1 class="mb-3" style={{ fontSize: "6rem", textAlign: "left" }}>Constelaciones familiares individuales</h1>
                  </div>
                  <div className="right-column" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h4 style={{ margin: "20px",  fontSize: "1.0rem" }}>
                      En lugar de enfocarse únicamente en el individuo, este
                      método trabaja con la energía y el campo de tu sistema
                      familiar. El objetivo principal es entender y comprender las
                      dinámicas familiares que están influyendo en el conflicto o
                      situación por la cual consultas, con el fin de entregarle una
                      solución a ello. Durante las sesiones, se utilizan figuras o
                      plantillas que representan de manera simbólica a los
                      diferentes integrantes de tu sistema familiar.De esta
                      manera, se crea un espacio para visualizar y explorar de
                      manera concreta las relaciones y las interacciones dentro
                      de tu familia
                    </h4>
                    <a className="btn btn-outline-light btn-lg" onClick={handleButtonClick} role="button" style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                      Ver Detalles
                    </a>
                    <ModalComponent show={showModal} handleClose={handleClose} serviceDetails={serviceDetails} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/