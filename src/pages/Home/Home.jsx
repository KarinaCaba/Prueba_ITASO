import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { useDocumentTitle } from "../../hooks/setdocumenttitle";

const Home = () => {
  useDocumentTitle("ITASO");
  return (
    <div className="home">
      <div className="banner container d-flex justify-content-center shadow-lg">
        <div className="wrapper d-flex flex-column justify-content-center">
          <div className="container pb-3  pe-2">
            <h1 className="title pe-2 ">Bienvenido al proyecto ITASO</h1>
          </div>

          <div className="container d-flex justify-content-center ps-3 pb-1">
            <p className="hero-description mt-2 p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
              voluptatum nemo pariatur animi provident, corrupti, ipsam cum
              dignissimos omnis expedita quam odit? Sint doloremque distinctio
              exercitationem obcaecati quisquam, voluptatibus autem.
            </p>
          </div>
          <div className="mt-2 container">
            <div className="row">
              <div className="col btn-container">
                <Link className="btn btn-info rounded-5 btn-download p-3 fs-5">
                  <i className="bx bx-download"></i> Descargar manual
                </Link>
              </div>
            </div>
          </div>
        </div>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h2>
              </div>

              <div className="about-info ">
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam porro iusto reprehenderit deserunt eligendi tenetur
                  corrupti nisi nemo beatae cumque perferendis minima,
                  temporibus pariatur? Cupiditate corporis commodi quasi eveniet
                  nesciunt?
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
              Lorem ipsum dolor sit amet consectetur
            </h2>

            <div className="gall-info d-flex justify-content-center pb-3 ">
              <p className="text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sequi accusantium officiis doloremque neque officia temporibus
                at explicabo iure laboriosam fugit recusandae molestias cum quae
                maxime nulla, quia accusamus ab.
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
