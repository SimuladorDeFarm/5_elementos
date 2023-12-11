import React from "react";
import './../App.css';
import img from '../assets/biomagnetismo1.png'

function Testimonios() {
    return (
      <>
        <div className="testimonios" id="testimonio-id" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ marginBottom: "20px" }}>Testimonios</h1>

          <div className="row p-3 p-md-5" style={{ maxWidth: "100%" }}>
            <div className="card mb-3 mb-sm-0 col-12 col-sm-6" style={{ maxWidth: "540px" }}>
              <div className="card-body">
                <h5 id="text1" className="card-title titleTestimonio text-dark">“Me he realizados ya dos sesiones de Terapia Regresiva con Fabiola, y la verdad es que en ambas fueron experiencias maravillosas. Si bien ambas sesiones fueron bien intensas emocionalmente, me sentí absolutamente sostenida durante la sesión y Fabiola me fue guiando de una forma amorosa y muy delicada para que pudiera entender de dónde venía mi falta de confianza e inseguridades. Sin dudas, la recomiendo totalmente".</h5>
                <p className="card-text text-dark">Camila F. G. Santiago</p>
              </div>
            </div>

            <div className="card mb-3 mb-sm-0 col-12 col-sm-6" style={{ maxWidth: "540px" }}>
              <div className="card-body">
                <h5 className="card-title titleTestimonio text-dark">"Llegué a Fabiola por recomendación de una amiga ya que desde hace mucho sufro de insomnio y cuadros de Ansiedad. Hicimos terapia de energización integral, y me sentí muy relajado durante la sesión e incluso días después de ésta. Con el paso de los días, si bien esa relajación rica que experimenté durante la terapia a ido disminuyendo, me he sentido con más energía y he notado que en las horas que estoy durmiendo, mi sueño ha sido mucho más profundo. Estoy pensando en volver luego de que se me acaben las gotitas de Bach".</h5>
                <p className="card-text text-dark">Fernando M.C. Santiago</p>
              </div>
            </div>

            <div className="card mb-3 mb-sm-0 col-12 col-sm-6" style={{ maxWidth: "540px" }}>
              <div className="card-body">
                <h5 className="card-title titleTestimonio text-dark">"Fabiola llegó en un momento de mi vida en donde sentía que estaba perdiendo el rumbo. Me la recomendó una amiga de mi hermano y fui sin muchas expectativas. La primera vez trabajamos con Energización y fue una experiencia que nunca había sentido antes. Luego de eso, hemos trabajado con terapia floral y con una Constelación, la que me ayudó a entender cosas que sentía y no encontraba su causa. Lo que trabajé  en esa época con Fabiola me dio el impulso  para poder hacerme cargo de lo que tenía  que sanar y actualmente me encuentro también con terapia psicológica la que  me ha ayudado a sacar cosas que estaban guardadas dentro mí y que sino las hubiera trabajado antes, no me hubiese atrevido hacerlo".</h5>
                <p className="card-text text-dark">Andrea M. R.  Santiago</p>
              </div>
            </div>

            <div className="card mb-3 mb-sm-0 col-12 col-sm-6" style={{ maxWidth: "540px" }}>
              <div className="card-body">
                <h5 className="card-title titleTestimonio text-dark">"Cuando mi hijo tenía 4 años, hacía sonar mucho los dientes cuando dormía...buscando ayuda para él llegué con Fabiola y la terapia de gotitas....lo cual le sirvió muchísimo...luego partí yo...de eso ya han pasado 9 años...y definitivamente más que una terapia, ha sido un acompañamiento en este proceso llamado vida.. si la recomendaría??? La respuesta es clara: una y mil veces!!! En ella he confiado a mi hijo, a mis hermanas, a mi mamá y a mi misma...no es solo relajación o meditación, es una guía para poder conocerse, gestionar emociones e incluso entrega herramientas para la vida. Con ella he podido cerrar etapas, tomar decisiones y ver que la vida es mucho más llevadera, bella y simple de lo que uno muchas veces piensa y se encierra. Para mi no es una terapia..  es un regalo que me doy". </h5>
                <p className="card-text text-dark ">Cristina C.C. Santiago</p>
              </div>
            </div>

          </div>
        </div>

      </>
    )
}

export default Testimonios;