import React, { useState } from 'react'
import { Nav, Navbar, Button, Offcanvas } from 'react-bootstrap'
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/logo.png'
import './navbarA.css'

const NavbarA = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="nav-bar">
                <Navbar bg="dark" variant="dark" className="navbar">

                    <Button variant="dark" onClick={handleShow}>
                        <MenuIcon />
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} variant="dark">
                        <Offcanvas.Header closeButton className="offcanvas-body" variant="dark">
                            <Offcanvas.Title><img src={logo} alt="brand name" className="offcanvas-logo" /></Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body className="offcanvas-links">
                            <Nav.Link className="nav-link" href="#features">Mobiles</Nav.Link>
                            <Nav.Link className="nav-link" href="#home">Electronics</Nav.Link>
                            <Nav.Link className="nav-link" href="#pricing">Fashion</Nav.Link>
                            <Nav.Link className="nav-link" href="#home">SignIn</Nav.Link>
                            <Nav.Link className="nav-link" href="#features">LogIn</Nav.Link>
                            <Nav.Link className="nav-link" href="#pricing">MyOrders</Nav.Link>

                        </Offcanvas.Body>
                    </Offcanvas>


                    <Nav className="me-auto">
                        <Nav.Link className="nav-link" href="#features">Mobiles</Nav.Link>
                        <Nav.Link className="nav-link" href="#home">Electronics</Nav.Link>
                        <Nav.Link className="nav-link" href="#pricing">Fashion</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-link" href="#home">SignIn</Nav.Link>
                        <Nav.Link className="nav-link" href="#features">LogIn</Nav.Link>
                        <Nav.Link className="nav-link" href="#pricing">MyOrders</Nav.Link>
                    </Nav>

                </Navbar>
            </div>
        </div>
    )
}

export default NavbarA
