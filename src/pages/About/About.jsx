import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./About.scss";
import { team } from "../../Data";
import { useDocumentTitle } from "../../hooks/setdocumenttitle";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { carouselData } from "../../Data";



const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  useDocumentTitle("Nosotros - ITASO");
  const handleClick = (index) => {
  setSelectedMember(index === selectedMember ? null : index);
  };

  const groupedTeams = [];
  for (let i = 0; i < team.length; i += 4) {
      groupedTeams.push(team.slice(i, i + 4));
  }
  
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

             {/* Carrusel */}
             <Carousel className="mb-5 shadow-lg border-black border-5">
                        {groupedTeams.map((group, groupIndex) => (
                            <Carousel.Item key={groupIndex}>
                                <div className="row text-center">
                                    {group.map((member, memberIndex) => (
                                        <div className="col-xl-6 col-sm-6 mb-5" key={memberIndex}>
                                            <div className="bg-white rounded shadow-sm py-5 px-4">
                                                <img
                                                    src={member.img}
                                                    alt=""
                                                    width="100"
                                                    onClick={() => handleClick(memberIndex)}
                                                    style={{ cursor: "pointer" }}
                                                />
                                                <h5 className="mb-0">{member.name}</h5>
                                                <span className="small text-uppercase text-muted">
                                                    {member.role}
                                                </span>
                                                <br />
                                                {selectedMember === memberIndex && (
                                                    <>
                                                        <span className="small text-uppercase text-muted">
                                                            {member.carrera}
                                                        </span>
                                                        <br />
                                                        <span className="small text-uppercase text-muted">
                                                            {member.frase}
                                                        </span>
                                                        <br />
                                                        <span className="small text-uppercase text-muted">
                                                            {member.experiencia}
                                                        </span>
                                                        <br />
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                               {/* Comprobación de la existencia de datos para la diapositiva actual */}
            {carouselData[groupIndex] && (
                <Carousel.Caption>
                   
                  {/*  /* <h3>{carouselData[groupIndex].title}</h3>
                    <p>{carouselData[groupIndex].description}</p>* */}
                </Carousel.Caption>
            )}
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
