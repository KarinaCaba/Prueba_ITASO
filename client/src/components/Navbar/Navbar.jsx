//import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navtest.scss";
function Navbar1() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(!show);
	return (
		<>
			{["lg"].map((expand) => (
				<Navbar
					key={expand}
					bg="light"
					expand={expand}
					className="mb-0 " style={{Width:"40rem"}}>
					<Container fluid>
						<Navbar.Brand as={Link} to={"/"}>
							<img
								src={logo}
								style={{maxHeight: "2.6rem" }}
								className="ps-3 d-inline-block align-top"
								alt="logo itaso"></img>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleClose} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
							className="bg-change"
							show={show}
							placement="start">
							<Offcanvas.Header closeButton onClick={handleClose} style={{color:'#ffffff8c'}}>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									<Link to={'/'}
									onClick={handleClose}>
									
									<img
										src={logo}
										style={{  maxHeight: "2.6rem" }}
										className="ps-0 d-inline-block align-top"
										
										alt="logo itaso"></img>
										</Link>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-center flex-grow-1 ps-0">
									<Nav.Link
										eventkey={1}
										as={Link}
										to={"/profiles"}
										onClick={handleClose}
										className="navlink">
										Perfiles
									</Nav.Link>
									<Nav.Link
										eventkey={2}
										as={Link}
										to={"/ers"}
										onClick={handleClose}
										className="navlink">
										Eventos, reuniones y sesiones
									</Nav.Link>
									<NavDropdown
										title="Juegos"
										id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        aria-controls="responsive-navbar-nav"
										className="navlink">
										<NavDropdown.Item eventkey={3} as={Link} onClick={handleClose} to={"/calculator"}>
											Calculadora
										</NavDropdown.Item>
										
										<NavDropdown.Item eventkey={4} as={Link}  onClick={handleClose} to={"/memorama"}>
											Memorama
										</NavDropdown.Item>
										
										<NavDropdown.Item eventkey={1} as={Link} onClick={handleClose} to={"/ruleta"}>
											Ruleta
										</NavDropdown.Item>
									</NavDropdown>

									<Nav.Link
										eventkey={6}
										as={Link}
										to={"/news"}
										onClick={handleClose}
										className="navlink">
										Noticias
									</Nav.Link>
									<Nav.Link
										eventkey={7}
										as={Link}
										to={"/survey"}
										onClick={handleClose}
										className="navlink">
										Encuestas
									</Nav.Link>
									<Nav.Link
										eventkey={8}
										as={Link}
										to={"/about"}
										onClick={handleClose}
										className="navlink">
										Nosotros
									</Nav.Link>
									<Nav.Link href="/forum" onClick={handleClose} className="navlink">
										Foro
									</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}

export default Navbar1;
