import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.scss";
const Calculator = () => {
  const [edad, setEdad] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [pesovalido, setPesovalido] = useState(true);
  const [alturavalida, setAlturavalida] = useState(true);
  const [edadvalida, setEdadvalida] = useState(true);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/calculator/contador", {
      state: {
        edad: edad,
        peso: peso,
        altura: altura,
      },
    });
  };

  function isBotonDeshabilitado() {
    return (
      edad === 0 ||
      peso === 0 ||
      altura === 0 ||
      !pesovalido ||
      !alturavalida ||
      !edadvalida
    );
  }

  function handleEdadChange(event) {
    const edadnueva = Number(event.target.value);
    setEdad(edadnueva);
    setEdadvalida(edadnueva <= 120 && edadnueva >= 5);
  }

  function handlePesoChange(event) {
    const pesonuevo = Number(event.target.value);
    setPeso(pesonuevo);
    setPesovalido(pesonuevo >= 10 && pesonuevo <= 150);
  }

  function handleAlturaChange(event) {
    const alturanueva = Number(event.target.value);
    setAltura(alturanueva);
    setAlturavalida(alturanueva <= 240 && alturanueva >= 80);
  }

  return (
    <div className="Calculator container-fluid py-5 d-flex justify-content-center">
      <div className="justify-content-center shadow-lg py-5 mb-5 form-data rounded-3">
        <div>
          <h1 className="text-center">Calculadora de azúcar</h1>
        </div>
        <div className="mt-4">
          <h2 className="text-center">Ingresa tu información</h2>
        </div>
        <form className=" my-4" onSubmit={handleSubmit}>
          <div className="py-2">
            <div className="mb-3 form-floating mx-5">
              <input
                type="number"
                className="form-control"
                name="Edad"
                placeholder="Edad"
                id="edad"
                required
                pattern="[0-9]{1,3}"
                onChange={handleEdadChange}
              />

              <label htmlFor="Edad">Edad</label>

              {!edadvalida ? (
                <div className="alert alert-danger mt-1" role="alert">
                  La edad debe estar entre 5 y 120 años
                </div>
              ) : null}
            </div>

            <div className="mb-3 form-floating mx-5">
              <input
                type="number"
                className="form-control"
                name="Peso"
                placeholder="Peso"
                id="peso"
                required
                min="10"
                max="150"
                onChange={handlePesoChange}
              />
              <label htmlFor="Altura" className="form-label">
                Peso <i className="text-muted">(Kg)</i>
              </label>
              {!pesovalido ? (
                <div className="alert alert-danger mt-1" role="alert">
                  El peso debe estar entre 10 y 150 Kg
                </div>
              ) : null}
            </div>
            <div className="mb-3 form-floating mx-5">
              <input
                type="number"
                className="form-control"
                name="Altura"
                placeholder="Altura"
                id="Altura"
                required
                min="80"
                max="240"
                onChange={handleAlturaChange}
              />
              <label htmlFor="Altura" className="form-label">
                Altura <i className="text-muted">(cm)</i>
              </label>
              {!alturavalida ? (
                <div className="alert alert-danger mt-1" role="alert">
                  La altura debe estar entre 80 y 240 cm
                </div>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-lg btn-info px-5"
              disabled={isBotonDeshabilitado()}
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
