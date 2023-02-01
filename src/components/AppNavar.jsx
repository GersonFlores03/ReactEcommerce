import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CartoffCanvas from './CartoffCanvas';



/* Toggle Menu  */



const AppNavar = () => {



    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const logaut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }



    return (
        <div className='Navegacion'>
            <Navbar className='Navbar' bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                            <Nav.Link as={Link} to="/purchases" >Purchases</Nav.Link>
                            <Nav.Link onClick={handleShow}> Cart</Nav.Link>
                            <Nav.Link onClick={logaut} >Log out</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
             <CartoffCanvas show ={show} handleClose={handleClose}  />

        </div>

    );
};

export default AppNavar;