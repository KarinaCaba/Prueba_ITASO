import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Contador.scss";
import beveragesObj from "./data";
//import sugarCalc from "./main.js";

const Contador = () => {
	const location = useLocation();
	const Navigate = useNavigate();
	console.log(location.state);
	console.log(beveragesObj);
	//vemos el tipo de dato que es beveragesObj
	console.log(typeof beveragesObj);
	useEffect(() => {
		if (!location.state) {
			Navigate("/calculator");
		}
	}, [location.state, Navigate]);

	return (
		<div className="contador">
			{/* Texto de calculadora  */}
			<h1>Calculadora de azúcar</h1>
			<a className="bcktndx" href="contador.html">
				<p>Volver a empezar</p>
			</a>

			{/* <Calculadora de bebidas */}
			<div className="display" id="display">
				<center>
					<h1>Selecciona las bebidas que comúnmente consumes a diario</h1>
				</center>

				{/* Tablero  */}
				<div className="cards mb-5 container">
					{beveragesObj.map((card, index) => (
						<Card key={index} className="shadow-md">
							<Card.Img variant="top" src={card.imageSrc} />
							<Card.Body>
								<Card.Title>{card.sugarValue}</Card.Title>
								<Card.Text>{card.description}</Card.Text>
								{/* <Button variant="primary" className='justify-content-center'>Go somewhere</Button> */}
							</Card.Body>
						</Card>
					))}
				</div>
				<center>
					<button id="calcBtn">Calcular</button>
					{/* <!-- <h1 id="azucar"></h1>
                <div className="contenderImg" id="1"></div> --> */}
				</center>
			</div>
		</div>
	);
};

export default Contador;
