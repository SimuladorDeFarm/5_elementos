import React from 'react';
import img1 from '../assets/energizacion1.png';
import img2 from '../assets/patrones1.png'
import img3 from '../assets/biomagnetismo1.png'

// falta agregar un carrusel que permita deslizarse por los demás servicios que ofrece la empresa

function TarjetasServicios1() {
    return (
        <div style={{ height: "100%", backgroundColor: "rgba(114, 0, 76, 0.3)" }}>
            <div class="row p-5" style={{ height: "100%" }}>
                <div class="col-lg-6 mb-3 mb-lg-0 p-5" >
                    <div class="card" style={{ backgroundColor: "rgba(114, 0, 76, 0.8)", borderRadius: "20px" }}>
                        <div class="card-body" style={{ display: "flex", flexDirection: "column" }}>
                            <h5 class="card-title">Terapia de energización</h5>
                            <p class="card-text">Reiki, magnetización, entre otras.</p>
                            <a href="#" class="btn btn-outline-light btn-sm" role="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Ver detalles</a>
                            <img src={img1} />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-3 mb-lg-0 p-5" >
                    <div class="card" style={{ backgroundColor: "rgba(114, 0, 76, 0.8)", borderRadius: "20px" }}>
                        <div class="card-body" style={{ display: "flex", flexDirection: "column" }}>
                            <h5 class="card-title">Terapia de sanación de patrones</h5>
                            <p class="card-text">Trabajaremos en colaboración con tu subconsciente.</p>
                            <a href="#" class="btn btn-outline-light btn-sm" role="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Ver detalles</a>
                            <img src={img2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetasServicios1;
