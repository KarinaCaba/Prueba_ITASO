import React from "react";
import { Link } from "react-router-dom";
import "./404.scss";
import logo2 from "./Images/logo2.png";
import fondo_calcu_06 from "./Images/fondo_calcu-06.png";

const NotFound = () => {
	return (
		<div className="NotFound">
			<section className="container-fluid pt-5">
				<div className="row sections">
					<div className="center">
						<img src={logo2} width="40%" alt="Logo itaso" />
					</div>
				</div>
				<section className="row pt-5 sections">
					<div className="prueba col text-center align-middle">
						<h2 className="mb-3">404 Not found</h2>
						<h3>La pagina que buscas no existe</h3>

						<Link
							role="button"
							className="btn btn-dark btn-lg mt-3 py-2 px-4"
							to="/">
							Inicio
						</Link>
					</div>
					<div className="col text-center align-middle">
						<div className="banner_img">
							<img
								className="img"
								src={fondo_calcu_06}
								width="200"
								height="200"
								alt="imagen 404"
							/>
						</div>
					</div>
				</section>
				<div className="burbujas">
					<div className="burbuja"></div>
					<div className="burbuja"></div>
					<div className="burbuja"></div>
					<div className="burbuja"></div>
					<div className="burbuja"></div>
					<div className="burbuja"></div>
					<div className="burbuja"></div>
					<div className="burbuja"></div>
					<div className="burbuja"></div>
					<div className="burbuja"></div>
				</div>
			</section>
		</div>
	);
};

export default NotFound;
