import React from "react";
import { Link } from "react-router-dom";
import "./Calculator.scss";
import rally1 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-163 (1).jpg";
import rally2 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-64.jpg";
import { team } from "../../Data";

import { useState, useEffect } from 'react';

const Calculator = () => {
  const azucarV = [
    16, /*Alimento lácteo bebible con probióticos naturales sabor fresa*/
    7, /*Agua de fruta con jugo natural de naranja*/
    1, /*Agua saborizada o agua infusionada*/
    48, /*Bebida de té verde sabor pepino con miel*/
    21, /*Bebida de pulpa de mango*/
    27, /*Bebida carbonatada de cola*/
    24, /*Chocolate en polvo*/
    6, /*Queso petit suisse sabor fresa*/
    41, /*Yogurt bebible sabor fresa*/
    47, /*Bebida energética*/
    31, /*Bebida carbonatada sabor naranja*/
    30, /*Bebida carbonatada sabor toronja*/
    42, /*Concentrado de horchata*/
    28, /*Concentrado de jamaica*/
    49, /*Néctar clarificado de manzana*/
    31, /*Néctar de piña*/
    45, /*Bebida carbonatada de cola*/
    25, /*Leche sabor chocolate*/
    33, /*Bebida a base de té negro sabor limón*/
    29, /*Bebida carbonatada sabor manzana*/
    0, /*Bebida carbonatada*/
    37, /*Bebida deportiva*/
    32, /*Bebida carbonatada sabor uva*/
    0, /*Polvo para preparar agua de sabor*/
    29, /*Bebida carbonatada sabor lima-limón*/
    9, /*Producto a base de leche fermentada con lactobacilos*/
    41, /*Yogurt bebible sabor fresa*/
    0, /*Ron*/
    17, /*Gin-tonic*/
    0, /*Brandy/Coñac*/
    0, /*Mezcal*/
    4, /*Tinto de mesa*/
    0, /*Whisky*/
    15, /*Paloma*/
    27, /*Mojito*/
    4, /*Michelada clásica*/
    19, /*Cuba*/
    78, /*Piña colada*/
    46, /*Margarita*/
    2, /*Pulque natural*/
    0, /*Martini seco*/
    3, /*Regular*/
  ];

  const [edad, setEdad] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [maxBebidas, setMaxBebidas] = useState(0);

  const increaseValue = (element) => {
    const value = document.getElementById(element).innerHTML;
    const incrementedValue = parseInt(value) + 1;
    document.getElementById(element).innerHTML = incrementedValue;
  };

  const decreaseValue = (element) => {
    const value = document.getElementById(element).innerHTML;
    const decrementedValue = parseInt(value) - 1 < 0 ? 0 : parseInt(value) - 1;
    document.getElementById(element).innerHTML = decrementedValue;
  };

  const reset = (element) => {
    document.getElementById(element).innerHTML = 0;
  };

  const getVariables = () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const edadParam = parseInt(params.get("Edad"));
    const pesoParam = parseInt(params.get("Peso"));
    const alturaParam = parseInt(params.get("Altura"));

    setEdad(edadParam);
    setPeso(pesoParam);
    setAltura(alturaParam);
  };

  useEffect(() => {
    getVariables();
  }, []);

  const generateBeverages = () => {
    const board = document.getElementById("board");
    const maxBebidasValue = (edad < 18) ? 28 : 43;
    setMaxBebidas(maxBebidasValue);

   /*for (let i = 1; i < maxBebidasValue; i++) {
      board.innerHTML +=
      `<div className="container">
        <center>
          <img src={require(`../../../media/03-juegos/01-calculadora/images/beverages/${i}.png`).default} />
        </center>
        <p className="contar" id={`contar${i}`}>0</p>
        <div>
          <button onClick={() => decreaseValue(`contar${i}`)} className="decr" id="decr">
            <span className="material-icons-outlined">remove</span>
          </button>
          <button onClick={() => increaseValue(`contar${i}`)} className="incr" id="incr">
            <span className="material-icons-outlined">add</span>
          </button>
          <button onClick={() => reset(`contar${i}`)} className="reset" id="reset">
            <span className="material-icons-outlined">cached</span>
          </button>
        </div>
      </div>`;
    }*/
  };

  const sugarCalc = () => {
    let azucar = 0;
    for (let i = 1; i < maxBebidas; i++) {
      const value = document.getElementById(`contar${i}`).innerHTML;
      azucar += parseInt(value) * azucarV[i - 1];
    }

    document.getElementById("display").innerHTML = "";
    const display = document.getElementById("display");
    const h1 = document.createElement("h1");
    const cDiario = document.createElement("h1");

    h1.innerHTML = `En total consumes ${azucar} gramos de azúcar`;
    display.appendChild(h1);

    document.getElementById("display").innerHTML += `
      <br>
      <img src={require("../../../media/03-juegos/01-calculadora/images/cuchara.png").default} />
      <h1>x${(azucar / 15).toFixed(1)} cucharadas soperas</h1>
    `;

    let color;
    if (azucar > 25) {
      color = '#ff0000';
      cDiario.innerHTML += `
        <div className="display2" id="textBox">
          <h1>Tu consumo se excede del recomendado diario de 25 gramos</h1>
        </div>
      `;
    } else {
      color = '#008000';
      cDiario.innerHTML += `
        <div className="display2" id="textBox">
          <h1>Tu consumo se encuentra debajo del recomendado diario de 25 gramos</h1>
        </div>
      `;
    }
    display.appendChild(cDiario);

    document.getElementById('textBox').style.backgroundColor = color;

    if (azucar > 25) {
      const blink = document.getElementById('textBox');
      setInterval(() => {
        blink.style.opacity = blink.style.opacity === '0' ? '1' : '0';
      }, 800);
    }

    if (edad >= 18) {
      const IMC = document.createElement("h1");
      IMC.innerHTML = `<br /><br />Su IMC es ${(peso / Math.pow(altura / 100, 2)).toFixed(3)}`;
      display.appendChild(IMC);
    }
  };

  useEffect(() => {
    generateBeverages();
  }, []);

  return (
    <>
      {/* HTML y elementos JSX adicionales... */}
    </>
  );
};

export default Calculator;
