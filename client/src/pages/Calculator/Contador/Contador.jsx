import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Card from "react-bootstrap/Card";
import "./Contador.scss";
import beveragesObj from "./data";
import classnames from "classnames";

//import sugarCalc from "./main.js";

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
  //vemos el tipo de dato que es beveragesObj
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
    setTexto("En total consumes " + suma + " gramos de azucar");
  };

  return (
    <div className="contador mb-5">
      {/* Texto de calculadora */}
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
          <button
            className="btn btn-outline-success btn-lg"
            onClick={handdleReset}
          >
            Reiniciar
          </button>
        </div>
      </div>

      {/* Calculadora de bebidas */}
      <div className="display mx-4 rounded-5 shadow-lg py-5" id="display">
        <h1 className="pt-3 pb-5">{texto}</h1>

        {/* Tablero */}
        {!next ? (
          <>
            <div className="cards mb-5 container-fluid">
              {beverages.slice(0, edad > 18 ? 42 : 27).map((card, index) => (
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
                    {/* <Button variant="primary" className='justify-content-center'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              ))}
              {edad < 18 ? (
                <Card className="shadow-md card-fill">
                  <Card.Img
                    variant="bottom"
                    src="/assets/logo.png"
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
              {/* <!-- <h1 id="azucar"></h1>
                                <div className="contenderImg" id="1"></div> --> */}
            </center>
          </>
        ) : (
          <section id="resultado" className="container-fluid result">
            <div>
              <img
                src="/assets/cuchara.png"
                alt="cuchara"
                className="pb-5 cuchara"
              />
            </div>

            <p className="h3">
              Eso equivale a {(result / 15).toFixed(1)} x cucharadas soperas
            </p>
            <div
              className={classnames({
                "container rounded-5 mt-5": true,
                "text-result": true,
                "bg-success": result < 25,
                "bg-danger blink": result >= 25,
              })}
            >
              {result > 25 ? (
                <p className="h2 px-4">
                  Esto es demasiado, excedes los 25 gramos recomendados de
                  azucar al dia
                </p>
              ) : (
                <p className="h2">
                  Esto es un consumo saludable de azúcar al día
                </p>
              )}
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
