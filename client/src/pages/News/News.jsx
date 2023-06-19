import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import "./News.scss";
import rally1 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-163 (1).jpg";
import rally2 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-64.jpg";
import rally3 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-93.jpg";

const cardsData = [
	{
		imageSrc: rally1,
		title: "Card Title 1",
		description:
			"Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
	},
	{
		imageSrc: rally2,
		title: "Card Title 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		imageSrc: rally3,
		title: "Card Title 3",
		description:
			"Tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.",
	},
	{
		imageSrc: rally1,
		title: "Card Title 1",
		description:
			"Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
	},
	{
		imageSrc: rally2,
		title: "Card Title 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		imageSrc: rally1,
		title: "Card Title 1",
		description:
			"Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
	},
	{
		imageSrc: rally2,
		title: "Card Title 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		imageSrc: rally1,
		title: "Card Title 1",
		description:
			"Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
	},
];
const carouselData = [
	{
		imageSrc: rally1,
		title: "First slide label",
		description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
	},
	{
		imageSrc: rally2,
		title: "Second slide label",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		imageSrc: rally3,
		title: "Third slide label",
		description:
			"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
	},
];

const News = () => {
	return (
		<div className="news">
			<Carousel className="mb-5 shadow-lg border-black border-5">
				{carouselData.map((slide, index) => (
					<Carousel.Item key={index}>
						<img
							className="d-block"
							src={slide.imageSrc}
							alt={`Slide ${index + 1}`}
						/>
						<Carousel.Caption>
							<h3>{slide.title}</h3>
							<p>{slide.description}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
				<div className="cards mb-5 container">
					{cardsData.map((card, index) => (
						<Card key={index} className="shadow-md">
							<Card.Img variant="top" src={card.imageSrc} />
							<Card.Body>
								<Card.Title>{card.title}</Card.Title>
								<Card.Text>{card.description}</Card.Text>
								{/* <Button variant="primary" className='justify-content-center'>Go somewhere</Button> */}
							</Card.Body>
						</Card>
					))}
				</div>
		</div>
	);
};

export default News;
