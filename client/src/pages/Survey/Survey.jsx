import React from "react";
import { Link } from "react-router-dom";
import "./Survey.scss";
import { useDocumentTitle } from "../../hooks/setdocumenttitle";


const Survey = () => {
  useDocumentTitle("Encuestas - ITASO");
  return (
    <div className="survey">
      <div className="sect-name">
        <h1 className="primary-title">Encuestas</h1>
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
    </div>
  );
};

export default Survey;
