//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navtest.scss";
function Navbar1() {
	return (
		<>
			{["lg"].map((expand) => (
				<Navbar
					key={expand}
					bg="dark"
					variant="dark"
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
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
							className="bg-change"
							placement="start">
							<Offcanvas.Header closeButton style={{color:'#ffffff8c'}}>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									<img
										src={logo}
										style={{  maxHeight: "2.6rem" }}
										className="ps-0 d-inline-block align-top"
										alt="logo itaso"></img>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-center flex-grow-1 ps-0">
									<Nav.Link
										eventkey={1}
										as={Link}
										to={"/profiles"}
										className="navlink">
										Perfiles
									</Nav.Link>
									<Nav.Link
										eventkey={2}
										as={Link}
										to={"/ers"}
										className="navlink">
										Eventos, reuniones y sesiones
									</Nav.Link>
									<NavDropdown
										title="Juegos"
										id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        aria-controls="responsive-navbar-nav"
										className="navlink">
										<NavDropdown.Item eventkey={3} as={Link} to={"/calculator"}>
											Calculadora
										</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item eventkey={4} as={Link} to={"/memorama"}>
											Memorama
										</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item eventkey={1} as={Link} to={"/ruleta"}>
											Ruleta
										</NavDropdown.Item>
									</NavDropdown>

									<Nav.Link
										eventkey={6}
										as={Link}
										to={"/news"}
										className="navlink">
										Noticias
									</Nav.Link>
									<Nav.Link
										eventkey={7}
										as={Link}
										to={"/survey"}
										className="navlink">
										Encuestas
									</Nav.Link>
									<Nav.Link
										eventkey={8}
										as={Link}
										to={"/about"}
										className="navlink">
										Nosotros
									</Nav.Link>
									<Nav.Link href="/forum" className="navlink">
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
