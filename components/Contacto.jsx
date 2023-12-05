import React from "react";
import logo from "../assets/logo.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import whatsapp from "../assets/whatsapp.png"


function Contacto() {
    return (
        <div class="contacto" id = "contacto-id">
            <div class="row-1" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "rgba(255,255,140,1)" }}>
                <div class="izquierda" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", width: "100%", flexBasis: "content" }}>
                    <img src={logo} width="100px"></img>
                    <h4>+56946465775</h4>
                    <h4>email: 5elementos@gmail.cl</h4>
                </div>
                <div class="derecha" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", width: "100%", flexBasis: "content" }}>
                    <h4>Ubicación</h4>
                    <h4>Av. Cumming #322</h4>
                    <h4>Providencia, RM</h4>
                </div>
            </div>
            <div class="row-2" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", backgroundColor: "rgba(106,90,206,1)" }}>
                <div class="icons" style={{ display: "flex", flexDirection: "row" }}>
                    <img src={facebook} width="30px"></img>
                    <img src={instagram} width="30px"></img>
                    <img src={whatsapp} width="30px"></img>
                </div >
                <h1>@5elementos.terapia</h1>
            </div >
        </div >
    )
}

export default Contacto;