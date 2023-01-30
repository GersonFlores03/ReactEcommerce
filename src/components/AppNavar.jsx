import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



/* Toggle Menu  */



const AppNavar = () => {

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)


    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }

        setIsMenuClicked(!isMenuClicked)
    }



    return (
        <div className='Navegacion'>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                            <Nav.Link as={Link} to="/purchases" >Purchases</Nav.Link>
                            <Nav.Link >Cart</Nav.Link>
                            <Nav.Link>
                                <div className='Hamburguesa'>
                                    <nav>
                                        <div className='Burger-menu' onClick={updateMenu}>
                                            <div className={burgerClass}> <i className='bx bx-shopping-bag'></i> </div>
                                             

                                        </div>
                                    </nav>
                                    <div className={menuClass}>
                                        <h4 className='TitleCarrito'>
                                        Carrito de Compras
                                        </h4>
                                    </div>
                                </div>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>

    );
};

export default AppNavar;