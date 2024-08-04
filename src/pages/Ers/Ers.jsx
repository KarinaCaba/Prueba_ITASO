import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import "./Ers.scss";
import { useDocumentTitle } from "../../hooks/setdocumenttitle";

const Ers = () => {
  
  useDocumentTitle("Eventos - ITASO");
  


  return (
  
  <div className="page-container">
  <div className="ers">
    <div className="sect-name">
      <h1 className="primary-title">Eventos, reuniones y sesiones</h1>
    </div>
    <div className="row container">
      <div className="col grid-item">
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-163 (1).jpg"
          alt=""
          className="grid-image"
        />
        <Link className="btn-profile">Ver evento</Link>
      </div>
      <div className="col grid-item">
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-64.jpg"
          alt=""
          className="grid-image"
        />
        <Link className="btn-profile">Ver evento</Link>
      </div>
      <div className="col grid-item">
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-93.jpg"
          alt=""
          className="grid-image"
        />
        <Link className="btn-profile">Ver evento</Link>
      </div>
    </div>
  </div>
  <footer className="footer">
   
  </footer>
</div>


  );
};

export default Ers;


 /*<div className="ers">
      <div className="sect-name">
        <h1 className="primary-title">Eventos, reuniones y sesiones</h1>
      </div>


      <div className="row container">
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-163 (1).jpg"
          alt=""
          className="grid-image grid-item"
        />
        <Link className="btn-profile grid-item">Ver evento</Link>
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-64.jpg"
          alt=""
          className="grid-image grid-item"
        />
        <Link className="btn-profile grid-item">Ver evento</Link>
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-93.jpg"
          alt=""
          className="grid-image grid-item"
        />
        <Link className="btn-profile grid-item">Ver evento</Link>
      </div>
    </div>*/

/* segunda versión
    <div className="ers">
    <div className="sect-name">
      <h1 className="primary-title">Eventos, reuniones y sesiones</h1>
    </div>
  
    <div className="row container">
      <div className="col grid-item">
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-163 (1).jpg"
          alt=""
          className="grid-image"
        />
        <Link className="btn-profile">Ver evento</Link>
      </div>
      <div className="col grid-item">
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-64.jpg"
          alt=""
          className="grid-image"
        />
        <Link className="btn-profile">Ver evento</Link>
      </div>
      <div className="col grid-item">
        <img
          src="/assets/rallys/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-93.jpg"
          alt=""
          className="grid-image"
        />
        <Link className="btn-profile">Ver evento</Link>
      </div>
    </div>
  </div>
  */