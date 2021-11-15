import React from 'react';
import './product.css';
import { Card, Button } from 'react-bootstrap';
import ProductDetail from './ProductDetail';



const Product = ({ imgsrc, name, description, price }) => {
    return (
        <Card className="card" >
            <Card.Img variant="top" className="product-image" src={imgsrc} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <h2>Rs.{price}</h2>
                <Button variant="dark">Add to Cart</Button>
            </Card.Body>
        </Card>

    )
}

export default Product;
