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
                La misión de ITASO-MX es prevenir la obesidad infantil mediante intervenciones interdisciplinarias, integrales, basadas en evidencia, dirigidas al contexto escolar de la educación básica en México. Nos comprometemos a diseñar e implementar programas educativos que promuevan estilos de vida saludables, fomentar la colaboración interdisciplinaria, capacitar a educadores, promover la Investigación y la innovación, sensibilizar y educar a la comunidad sobre la importancia de prevenir la obesidad infantil.                  
                </p>
                <p className="text-justify">
                Nuestro propósito es crear un impacto positivo y duradero en la salud de los niños mexicanos, brindándoles las herramientas y el conocimiento necesario para llevar una vida saludable y plena. A través de una colaboración comprometida y una implementación estratégica, aspiramos a reducir la prevalencia de la obesidad infantil y mejorar la calidad de vida de las futuras generaciones.
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

            <div className="gall-info d-flex flex-column align-items-center pb-3">
              <p className="mb-3">
              El proyecto ITASO-MX busca ser un referente nacional e internacional en la prevención de la obesidad infantil mediante un enfoque interdisciplinario y basado en evidencia científica. Nuestro objetivo es crear un entorno escolar en la educación básica donde los niños, niñas y adolescentes adopten estilos de vida saludables que perduren a lo largo de su vida. 
              </p>
              <p className="mb-3">
              Queremos lograr una comunidad educativa informada y comprometida con la salud integral de sus estudiantes. A través de intervenciones innovadoras, colaborativas y adaptadas al contexto socio-cultural de cada región, aspiramos a reducir significativamente la prevalencia de la obesidad infantil en México. 
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
