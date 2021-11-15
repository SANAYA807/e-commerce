import React from 'react'
import { Carousel } from 'react-bootstrap'
import Product from './Product'
import data from './data/products-data'
import carousel1 from './images/carousel1.jpg'
import carousel2 from './images/carousel2.jpg'
import carousel3 from './images/carousel3.jpg'
import './home.css'



const Home = () => {
    return (
        <>
            <Carousel indicators="false" >
                <Carousel.Item >
                    <div className="gradient"></div>
                    <img
                        className="d-block w-100 "
                        src={carousel1}
                        alt="First slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <div className="gradient"></div>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <div className="gradient"></div>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
            <div className="container">
                {data.map(prod => <Product name={prod.name} price={prod.price} description={prod.description} imgsrc={prod.imgsrc} />)}
            </div>

        </>
    )
}

export default Home
