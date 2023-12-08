import React from "react";
import logo from "../assets/logo.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import whatsapp from "../assets/whatsapp.png"


function Contacto() {
  const emailAddress = '5elementos@gmail.cl';
  const phoneNumber = '+56946465775';
  const instagramUsername = '5elementos.terapias';
  const facebookUsername = '5elementos.terapias'; 


    return (
      <div className="contacto" id="contacto-id" style={{ backgroundColor: "rgba(255,255,140,1)", padding: "30px", minHeight: "70px", display: "flex", flexDirection: "column" }}>
      {/* Primera fila */}
      <div className="row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flex: 1 }}>
        {/* Izquierda */}
        <div className="izquierda" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", width: "50%", flexBasis: "content" }}>
          <img src={logo} width="100px" alt="Logo"></img>
          <div>
      {/* Otros elementos en tu componente */}
      <p>Para llamarnos! : <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
    </div>
          <div>
      {/* Otros elementos en tu componente */}
      <p>Contactarnos  <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
    </div>
        </div>
        {/* Derecha */}
        <div className="derecha" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "30px", width: "50%", flexBasis: "content" }}>
          <div style={{ padding: '20px' }}>
            <p>Dirección: Av. Cumming #322</p>
            {/* Otros detalles de contacto */}
            <div style={{ width: '100%', height: '300px', position: 'relative' }}>
              {/* Añade el mapa de Google aquí */}
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: '0', position: 'absolute', top: '0', left: '0' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dLATITUDE!2dLONGITUDE!2d0.00000000000001!3d0.00000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sAv.%20Cumming%20%23322!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda fila (Pie de página) */}
      <div className="row" style={{ backgroundColor: "rgba(106,90,206,1)", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", flexShrink: 0, width: "100%" }}>
        {/* Icons */}
        <div className="icons" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
          
        <a href={`https://www.facebook.com/${facebookUsername}`} target="_blank" rel="noopener noreferrer">
          <img src={facebook} width="30px" alt="Facebook" />
        </a>

          <a href={`https://www.instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer">
            <img src={instagram} width="30px" alt="Instagram" />
          </a>
          <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} width="30px" alt="WhatsApp" />
        </a>
        </div>
        {/* Nombre de usuario */}
      </div>
    </div>

    )
}

export default Contacto;