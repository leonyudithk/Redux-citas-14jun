import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1641933600/food_frtbji.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1641933600/Hibiscus_Jalape%C3%B1o_Quick_Pickled_Veggies_Artful_Desperado_icfulx.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1641933600/Kuttu_Ki_Roti___Buckwheat_Flour_Flatbread_xy28va.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                                             <p>
                              Que tús alimentos sean tu farmacia.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;