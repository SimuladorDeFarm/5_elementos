import React from "react";
import logo from "../assets/logo.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import whatsapp from "../assets/whatsapp.png"


function Contacto() {
    return (
        <div className="contacto" id="contacto-id">
        {/* Primera fila */}
        <div className="row-1" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "rgba(255,255,140,1)" }}>
          {/* Izquierda */}
          <div className="izquierda" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", width: "100%", flexBasis: "content" }}>
            <img src={logo} width="100px" alt="Logo"></img>
            <h4>+56946465775</h4>
            <h4>email: 5elementos@gmail.cl</h4>
          </div>
          {/* Derecha */}
          <div className="derecha" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "30px", width: "100%", flexBasis: "content" }}>
            <h4>Ubicación</h4>
            <h4>Av. Cumming #322</h4>
            <h4>Providencia, RM</h4>
          </div>
        </div>
  
        {/* Segunda fila */}
        <div className="row-2" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", backgroundColor: "rgba(106,90,206,1)" }}>
          {/* Icons */}
          <div className="icons" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", inlineSize: "150px" }}>
            <img src={facebook} width="30px" alt="Facebook"></img>
            <img src={instagram} width="30px" alt="Instagram"></img>
            <img src={whatsapp} width="30px" alt="WhatsApp"></img>
          </div>
          {/* Nombre de usuario */}
          <h1>@5elementos.terapia</h1>
        </div>
      </div>
    )
}

export default Contacto;