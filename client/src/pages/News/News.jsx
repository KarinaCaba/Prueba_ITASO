import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { carouselData, cardsData } from "../../Data";
import "./News.scss";

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
