import React, { useState, useEffect } from "react";
import './header.css';
import logo from './images/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCart';
import NavbarA from "./NavbarA";
import addToCart from '../reducers/addProduct.js';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




export const Header = () => {
    // const cart = useSelector((state) => state.addToCart);

    // const [cartValue, setCartValue] = useState(0);



    // useEffect(() => {
    //     let count = 0;
    //     cart.map((prod) => count= count+prod.quantity)
    //     setCartValue(count)
    // }, [cart, cartValue])


    return (
        <div className="header">
            <div className="upper-header">
                <img src={logo} alt="logo" style={{ height: "3rem" }} />
                <div style={{ display: "flex" }}><p>select your address</p>
                    <LocationOnIcon />
                </div>
                <div className="search">
                    <div style={{ backgroundColor: "grey", padding: "0.46rem 0.55rem", borderRadius: "2px 0 0 2px" }}>All</div>
                    <input type="text" />
                    <div style={{ backgroundColor: "orange", padding: "0.38rem", borderRadius: "0 2px 2px 0" }}>
                        <SearchIcon style={{ color: "white" }} />
                    </div>
                </div>
                <p>Returns and Orders</p>
                <Link to="/cart" style={{ textDecoration: "none", color: "white" }}><ShoppingCartSharpIcon /><span>{}</span></Link>
            </div>
            <NavbarA />
        </div>
    )
}

export default Header;
