import { React, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { carouselData } from "../../Data";
import axios from "axios";
import "./News.scss";
import { useDocumentTitle } from "../../hooks/setdocumenttitle";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + "/News");
        setNews(res.data.docs);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useDocumentTitle("Noticias - ITASO");
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
        {news.map((card, index) => (
          <Card key={index} className="shadow-md">
            <Card.Img variant="top" src={card.img.url} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.desc[0].children[0].text}</Card.Text>
              {/* <Button variant="primary" className='justify-content-center'>Go somewhere</Button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
