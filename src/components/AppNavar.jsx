import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CartoffCanvas from './CartoffCanvas';



/* Toggle Menu  */



const AppNavar = () => {



    //const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    



    return (
        <div className='Navegacion'>
            <Navbar className='Navbar' bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" > <span className='TitleNavar'>E-Commerce</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login" >
                            <i className='bx bxs-log-in bx-sm icon' ></i>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/purchases" >
                            <i className='bx bx-store bx-sm icon'></i>
                            </Nav.Link>
                            <Nav.Link onClick={handleShow}>
                            <i className='bx bx-cart bx-sm icon' ></i>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/user" > 
                            <i className='bx bxs-user-circle bx-sm icon' ></i>
                             </Nav.Link>
                           
                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
             <CartoffCanvas show ={show} handleClose={handleClose}  />

        </div>

    );
};

export default AppNavar;