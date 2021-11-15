import React from "react";
import './header.css';
import logo from './images/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCart';
import NavbarA from "./NavbarA";


export const Header = () => {
    return (
        <div>
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
                <ShoppingCartSharpIcon />
            </div>
            <NavbarA />
        </div>
    )
}

export default Header;
