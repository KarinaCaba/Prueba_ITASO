import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import rally from "../Home/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-1.jpg";
import video from "../Home/ITASO_VIDEO_FINAL.mp4";
import poster from "./vid-poster.png";

const Home = () => {
	return (
		<div className="home container m-0 p-0 border-0">
			<div className="banner container pt-0 shadow-lg">
				<div className="wrapper">
					<div className="container pb-3  ">
						<h1 className="title fw-bolder ">Bienvenido al proyecto ITASO</h1>
					</div>

					<div className="container d-flex justify-content-center ps-3 pb-1">
						<p className="hero-description mt-2 p-0">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
							voluptatum nemo pariatur animi provident, corrupti, ipsam cum
							dignissimos omnis expedita quam odit? Sint doloremque distinctio
							exercitationem obcaecati quisquam, voluptatibus autem.
						</p>
					</div>
					<div className="btns mt-2 container">
						<div className="row">
						<div className="col ">
							<Link className="btn btn-info rounded-5 btn-download">
								<i className="bx bx-download"></i> Descargar manual
							</Link>
						</div>						
						</div>

					</div>
				</div>
			</div>

			<div className="about d-grid mb-5">
				<div className="row mx-auto">
					<div className="col-lg d-flex flex-column justify-content-center ">
						
							<img src={rally} className="shadow-lg rounded-3" alt="rally-itaso" width={"100%"}/>
						
					</div>

					<div className="text-group col d-grid">
						<div className="row about-info mx-auto">
							<h2 className="secondary-title fw-bolder">
								Lorem ipsum dolor sit amet consectetur adipisicing elit
							</h2>
						</div>

						<div className="row about-info mx-auto ">
							<p className="text-justify">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam porro iusto reprehenderit deserunt eligendi tenetur
								corrupti nisi nemo beatae cumque perferendis minima, temporibus
								pariatur? Cupiditate corporis commodi quasi eveniet nesciunt?
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<svg
					className="wave"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 100"
					preserveAspectRatio="none">
					<path
						className="wave-path"
						d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
						fill="currentColor"></path>
				</svg>
			</div>
			<div className="gallery container d-flex flex-column justify-content-center align-content-center ">
				<div className="text-group">
					<h2 className="secondary-title fw-bolder">
						Lorem ipsum dolor sit amet consectetur
					</h2>
					<div className="gall-info container w-75 pb-3">
					<p className="text-center mx-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
						accusantium officiis doloremque neque officia temporibus at
						explicabo iure laboriosam fugit recusandae molestias cum quae maxime
						nulla, quia accusamus ab.
					</p>
					</div>

				</div>
				<div className="container d-flex justify-content-center">
					<video
						id="vid"
						className="grid-image"
						src={video}
						controls
						width={"75%"}
						poster={poster}></video>
				</div>
			</div>

			<div className="download">
				<h2>¡Comparte tu experiencia con nosotros o haznos una pregunta!</h2>
				<Link className="btn-forum">Ir al foro</Link>
			</div>
		</div>
	);
};

export default Home;
