import React from 'react';
import './product.css';
import { Card, Button } from 'react-bootstrap';
import data from './data/products-data';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/index.js';


const Product = () => {
    const dispatch = useDispatch();


    return (
        <div className="container">
            {
                data.map(prod =>

                    <Card className="card" >
                        <Card.Body className="card">
                        <Link className="info" to={`/${prod.id}`}>
                                <Card.Text>
                                {prod.name}
                                </Card.Text>
                                <strong>${prod.price}</strong>
                            
                            
                            
                            </Link>
                            <img className="product-image" src={prod.imgsrc} />
                            <Button variant="dark" onClick={() => dispatch(addProduct(prod))}> Add to Cart</Button>
                        </Card.Body>
                    </Card>



                )
            }

        </div>


    )
}

export default Product;
