import React from "react";
import img from '../assets/biomagnetismo1.png'

function Testimonios() {
    return (
        <>
            <div className="testimonios" id="testimonio-id" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Testimonios</h1>

      <div className="row p-3 p-md-5" style={{ maxWidth: "100%" }}>
        <div className="card mb-3 mb-sm-0 col-12 col-sm-6" style={{ maxWidth: "540px" }}>
          <div className="card-body">
            <h5 className="card-title">“Me he realizados ya dos sesiones de Terapia Regresiva con Fabiola, y la verdad es que en ambas fueron experiencias maravillosas. Si bien ambas sesiones fueron bien intensas emocionalmente, me sentí absolutamente sostenida durante la sesión y Fabiola me fue guiando de una forma amorosa y muy delicada para que pudiera entender de dónde venía mi falta de confianza e inseguridades. Sin dudas, la recomiendo totalmente".</h5>
            <p className="card-text">Camila F. G. Santiago</p>
          </div>
        </div>

        <div className="card mb-3 mb-sm-0 col-12 col-sm-6" style={{ maxWidth: "540px" }}>
          <div className="card-body">
            <h5 className="card-title">"Llegué a Fabiola por recomendación de una amiga ya que desde hace mucho sufro de insomnio y cuadros de Ansiedad. Hicimos terapia de energización integral, y me sentí muy relajado durante la sesión e incluso días después de ésta. Con el paso de los días, si bien esa relajación rica que experimenté durante la terapia a ido disminuyendo, me he sentido con más energía y he notado que en las horas que estoy durmiendo, mi sueño ha sido mucho más profundo. Estoy pensando en volver luego de que se me acaben las gotitas de Bach".</h5>
            <p className="card-text">Fernando M.C. Santiago</p>
          </div>
        </div>

        <div className="card mb-3 mb-sm-0 col-12 col-sm-6" style={{ maxWidth: "540px" }}>
          <div className="card-body">
            <h5 className="card-title">"Llegué a Fabiola por recomendación de una amiga ya que desde hace mucho sufro de insomnio y cuadros de Ansiedad. Hicimos terapia de energización integral, y me sentí muy relajado durante la sesión e incluso días después de ésta. Con el paso de los días, si bien esa relajación rica que experimenté durante la terapia a ido disminuyendo, me he sentido con más energía y he notado que en las horas que estoy durmiendo, mi sueño ha sido mucho más profundo. Estoy pensando en volver luego de que se me acaben las gotitas de Bach".</h5>
            <p className="card-text">Fernando M.C. Santiago</p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Testimonios;