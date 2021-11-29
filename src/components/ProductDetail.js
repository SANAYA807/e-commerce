// import { Link } from 'react-router-dom'
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import './productDetail.css'
import data from './data/products-data'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { increment } from '../actions/index.js';




const getData = (id) => {
    return data.find(prod => prod.id === id)
}

const ProductDetail = () => {

    const dispatch = useDispatch();


    let params = useParams();
    let navigate = useNavigate();
    let product = getData(parseInt(params.id))
    return (
        <div className="container">

            <div>
                <Button onClick={() => navigate("/")}>go back</Button>
                <img src={product.imgsrc} alt="" srcset="" />

            </div>

            <div className="details">
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <p>{product.description}</p>


                <Button variant="dark" onClick={() => dispatch(increment)}>Add To Cart</Button>


            </div>
        </div>
    )
}

export default ProductDetail
