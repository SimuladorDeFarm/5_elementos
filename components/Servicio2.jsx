import React from 'react'
import background from '../assets/constelacionesfamiliares1.png'

function Servicio2() {
  return (
    <>
      <div style={{ height: "100%" }}>
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div class="p-5 text-center bg-image rounded-3" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: "100%",
            opacity: "0.8",
          }}>
            <div class="mask" style={{ backgroundColor: "rgba(114, 0, 76, 0.3)", height: "100%"}}>
              <div class="d-flex justify-content-center align-items-center h-100" style={{margin: "40px" }}>
                <div class="text-white d-flex" style={{ flex: 1 }}>
                  <div className="left-column mr-5" style={{ flex: 1 }}>
                    <h1 class="mb-3" style={{ fontSize: "6.5rem", textAlign: "left" }}>Constelaciones familiares individuales</h1>
                  </div>
                  <div className="right-column" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h4 className="mb-3" style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus leo, eleifend mattis commodo a, euismod at massa. Curabitur interdum malesuada libero vitae venenatis.
                    </h4>
                    <a className="btn btn-outline-light btn-lg" href="#!" role="button" style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                      Ver Detalles
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicio2