import React from "react";
import { Link } from "react-router-dom";
import "./Profiles.scss";

const Profiles = () => {
  return (
    <div className="profiles">
      <div className="sect-name">
        <h1 className="primary-title">Perfiles</h1>
      </div>

      <div className="row container">
        <img
          src="/assets/profiles/ninos.jpg"
          alt=""
          className="grid-image grid-item"
        />
        <Link className="btn-profile grid-item">Niños</Link>
        <img
          src="/assets/profiles/jovenes.jpg"
          alt=""
          className="grid-image grid-item"
        />
        <Link className="btn-profile grid-item">Jóvenes</Link>
        <img
          src="/assets/profiles/adultos.jpg"
          alt=""
          className="grid-image grid-item"
        />
        <Link className="btn-profile grid-item">Adultos</Link>
      </div>
    </div>
  );
};

export default Profiles;
