import { Carousel } from "react-bootstrap";

import './Carousel.scss';

export default function CarouselContainer(props) {
    return (
        <Carousel slide>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="main-title">{props.title1}</h3>
                <p>{props.desc1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="main-title">{props.title2}</h3>
                <p>{props.desc2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="main-title">{props.title3}</h3>
                <p>{props.desc3}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}