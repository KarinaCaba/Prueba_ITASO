import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";
import { team } from "../../Data";
import { useDocumentTitle } from "../../hooks/setdocumenttitle";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { carouselData } from "../../Data";

const About = () => {
  useDocumentTitle("Nosotros - ITASO");
  return (
    <div className="about">
      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1">
              <h2 class="font-weight-light">¿Quiénes somos?</h2>
              <p class="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-163 (1).jpg"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img
                src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-64.jpg"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div class="col-lg-6">
              <h2 class="font-weight-light">Nuestro alcance</h2>
              <p class="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light py-5">
        <div class="container py-5">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h2 class="display-4 font-weight-light">Nuestro equipo</h2>
            </div>
          </div>

          <Carousel className="mb-5 shadow-lg border-black border-5">
        {carouselData.map((slide, index) => (
          <Carousel.Item key={index}>
          <div class="row text-center">
            {team.map((member) => (
              <div class="col-xl-6 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={member.img}
                    alt=""
                    width="100"
                    
                  />
                  <h5 class="mb-0">{member.name}</h5>
                  <span class="small text-uppercase text-muted">
                    {member.role}
                  </span>
                  <br/>
                  <span class="small text-uppercase text-muted">
                    {member.carrera}
                  </span>
                  <br/>
                  <span class="small text-uppercase text-muted">
                    {member.frase}
                  </span>
                  <br/>
                  <span class="small text-uppercase text-muted">
                    {member.experiencia}
                  </span>
                  <br/>
                  <ul class="social mb-0 list-inline mt-3">

                  </ul>
                </div>
              </div>
            ))}
          </div>
          <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
        </div>
      </div>

      <footer class="bg-light pb-5">
        <div class="container text-center">
          <p class="font-italic text-muted mb-0">
            &copy; Copyrights All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
