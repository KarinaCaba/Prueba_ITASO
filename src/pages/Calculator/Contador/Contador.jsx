import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Card from "react-bootstrap/Card";
import "./Contador.scss";
import beveragesObj from "./data";
import classnames from "classnames";

const Contador = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const [edad, setEdad] = useState(0);
  const [imc, setImc] = useState(0);
  const [beverages, setBeverages] = useState(beveragesObj);
  const [result, setResult] = useState(0);
  const [next, setNext] = useState(false);
  const [texto, setTexto] = useState(
    "Selecciona las bebidas que comúnmente consumes a diario"
  );

  useEffect(() => {
    if (!location.state) {
      Navigate("/calculator");
    } else {
      setEdad(location.state.edad);
      setImc(
        (
          (location.state.peso /
            ((location.state.altura * location.state.altura) / 100)) *
          100
        ).toFixed(2)
      );
    }
  }, [location.state, Navigate]);

  const handleSum = (event, index) => {
    event.stopPropagation();
    setBeverages((prevBeverages) => {
      const updatedBeverages = [...prevBeverages];
      updatedBeverages[index] = {
        ...prevBeverages[index],
        cont: prevBeverages[index].cont + 1,
      };
      return updatedBeverages;
    });
  };
  const handleSubstrac = (event, index) => {
    event.stopPropagation();
    setBeverages((prevBeverages) => {
      const updatedBeverages = [...prevBeverages];
      updatedBeverages[index] = {
        ...prevBeverages[index],
        cont: prevBeverages[index].cont - 1,
      };
      return updatedBeverages;
    });
  };

  const handleRedo = (event, index) => {
    event.stopPropagation();
    setBeverages((prevBeverages) => {
      const updatedBeverages = [...prevBeverages];
      updatedBeverages[index] = {
        ...prevBeverages[index],
        cont: 0,
      };
      return updatedBeverages;
    });
  };
  const handdleReset = (event) => {
    event.stopPropagation();
    if (next) {
      setNext(false);
      setTexto("Selecciona las bebidas que comúnmente consumes a diario");
      setResult(0);
    }
    setBeverages(beveragesObj);
  };

  const sugarSum = () => {
    setNext(true);
    let suma = beverages.reduce((acc, beverage) => {
      return acc + beverage.cont * beverage.sugar;
    }, 0);
    setResult(suma);
    setTexto();
  };

  return (
    <div className="contador mb-5">
      <h1>Calculadora de azúcar</h1>
      <div className="container-fluid">
        <div className="my-5 btn-group flex-grow-1">
          <button
            className="btn btn-outline-info btn-lg"
            onClick={() => {
              Navigate("/calculator");
            }}
          >
            Regresa
          </button>
          <button className="btn btn-outline-success btn-lg" onClick={handdleReset}>
            Reiniciar
          </button>
        </div>
      </div>

      <div className="display mx-4 rounded-5 shadow-lg py-5" id="display">
        <h1 className="pt-3 pb-5">{texto}</h1>

        {!next ? (
          <>
            <div className="cards mb-5 container-fluid">
              {beverages.slice(0, edad >= 18 ? 42 : 27).map((card, index) => (
                <Card key={index} className="shadow-md">
                  <Card.Img variant="top" src={card.imageSrc} />
                  <Card.Body>
                    <Card.Title>{card.cont}</Card.Title>
                    <div className="btn-group">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={(e) => handleSum(e, index)}
                        disabled={card.cont >= 25}
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={(e) => handleSubstrac(e, index)}
                        disabled={card.cont === 0}
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={(e) => handleRedo(e, index)}
                        disabled={card.cont === 0}
                      >
                        <i className="bi bi-arrow-repeat"></i>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
              {edad < 18 ? (
                <Card className="shadow-md card-fill">
                  <Card.Img
                    variant="bottom"
                    src="/assets/logos/logo.png"
                    className="px-3 "
                  />
                </Card>
              ) : null}
            </div>
            <center>
              <Link
                className="btn btn-lg btn-info"
                onClick={() => {
                  sugarSum();
                }}
                to="display"
                smooth={true}
                duration={100}
              >
                Calcular
              </Link>
            </center>
          </>
        ) : (
          <section id="resultado" className="container-fluid result">
            <div className="text-center">
              <h1>Tu consumo total de azúcar:</h1>
              <p className="sugar-result">{result} </p>
			  <p className="sugar-text">gramos</p>
              <div className="healthy-message">
                {result > 25 ? (
                  <p className="text-rec"> Esto es demasiado, excedes los 25 gramos recomendados de azúcar al día </p>
                ) : (
                  <p>Esto es un consumo saludable de azúcar al día</p>
                )}
              </div>
            </div>
            <div className="pt-5">
              <h3>Su IMC es de: {imc}</h3>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Contador;
