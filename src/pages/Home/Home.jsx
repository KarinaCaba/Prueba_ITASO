import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { useDocumentTitle } from "../../hooks/setdocumenttitle";
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  useDocumentTitle("ITASO");

  return (
    <div className="home">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
  <img src="/assets/backgrounds/background.png" className="d-block w-100 img-fluid" alt="background" />
</div>
<div className="carousel-item">
  <img src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-1.jpg" className="d-block w-100 img-fluid" alt="rally-itaso" />
</div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="about mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg d-flex flex-column justify-content-center mx-0 ">
              <div className="ms-3">
                <img
                  src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-1.jpg"
                  className="shadow-lg rounded-3"
                  alt="rally-itaso"
                  width={"87%"}
                />
              </div>
            </div>

            <div className="text-group col justify-content-center ms-4">
              <div className="about-info mx-auto">
                <h2 className="secondary-title fw-bolder">
                  Misión
                </h2>
              </div>

              <div className="about-info ">
                <p className="text-justify">
                  La misión de ITASO es educar y empoderar a los niños en edad escolar sobre la importancia de una nutrición equilibrada y un sueño adecuado. A través de programas educativos interactivos y recursos innovadores, trabajamos en colaboración con escuelas y comunidades para proporcionar conocimientos prácticos y estrategias que fomenten el bienestar físico y mental de los niños. Nuestro objetivo es inspirar hábitos saludables que perduren toda la vida, creando así generaciones futuras más saludables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <svg
          className="wave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path"
            d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="gallery container d-flex flex-column justify-content-center ">
        <div className="justify-content-center ">
          <div className="text-group text-center mx-3">
            <h2 className="secondary-title fw-bolder">
              Visión
            </h2>

            <div className="gall-info d-flex justify-content-center pb-3 ">
              <p className="text-justify ">
                En ITASO, visualizamos un futuro en el que cada niño tenga acceso a la información y las herramientas necesarias para adoptar hábitos de alimentación y sueño saludables. Creemos en un mundo donde los niños crezcan fuertes, saludables y felices, capacitados para alcanzar todo su potencial.
              </p>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <video
            id="vid"
            className="grid-image"
            src="/assets/videos/ITASO_VIDEO_FINAL.mp4"
            controls
            width={"75%"}
            poster="/assets/backgrounds/vid-poster.png"
          ></video>
        </div>
      </div>

      <div className="download">
        <h2>¡Comparte tu experiencia con nosotros o haznos una pregunta!</h2>
        <Link className="btn-forum">Ir al foro</Link>
      </div>
    </div>
  );
};

export default Home;
