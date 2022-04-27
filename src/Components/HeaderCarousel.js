import {Carousel} from 'react-bootstrap';

import slide1 from '../Assets/slider1.jpg'
import slide2 from '../Assets/slider2.jpg'
import slide3 from '../Assets/slider3.jpg'

export default function HeaderCarousel(props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Jarvis Foods</h3>
                <p>Welcome to Jarvis Foods, for all of your dairy needs! (and more)</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Superior Products</h3>
                <p>We sell superior product brands including Best Choice, Hiland, and more!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Join Today</h3>
                <p>Create an account today, and browse our vast options!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )