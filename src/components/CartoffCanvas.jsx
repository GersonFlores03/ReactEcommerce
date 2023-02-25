import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCartProductsthunkName, getcheckthunkName, getDeletethunkName, ModificarthunkName } from '../store/slice/cartProduct.slice';


const CartoffCanvas = ({ show, handleClose }) => {




    const cartProduct = useSelector(state => state.cartProduct)

    let total = 0
    cartProduct.forEach(product => {
        const productoTotal = Number(product.product.price) * product.quantity;
        total += productoTotal
    })



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartProductsthunkName())
    }, [])

    console.log(cartProduct)

    const incrementNumber = (cart) => {
        dispatch(ModificarthunkName(cart.id, cart.quantity + 1))


    }

    const decrementNumber = (cart) => {
        dispatch(ModificarthunkName(cart.id, cart.quantity - 1))
    }



    return (
        <div>
            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <ul className='ScrollCart'>
                        {
                            cartProduct.map(cart => (
                                <li className='listasCart' key={cart.id}>

                                    <div className='Carrito'>

                                        <div className='FlexImgs'>
                                            <img className='img-cart' src={cart.product.images?.[0].url} alt="" />
                                            <div className='Flex-Column'>
                                                <h5> {cart.product.brand} </h5>
                                                <div>
                                                    <button className='ContadorCart' onClick={() => (decrementNumber(cart))}> - </button> <button className='Counter'> {cart.quantity} </button><button className='ContadorCart' onClick={() => incrementNumber(cart)}> + </button>
                                                </div>

                                            </div>
                                            <button onClick={() => dispatch(getDeletethunkName(cart.id))} className='Trash'> <i className='bx bx-trash'></i> </button>

                                        </div>

                                        <div className='Total'>

                                            <p>Total:</p>
                                            <p > ${cart.product.price} </p>

                                        </div>

                                    </div>

                                </li>

                            ))
                        }
                    </ul>
                    <hr />
                    <div className='Section-Buton'>
                        <div className='Total-Final'>
                            <p>Total:</p>
                            <p>$ {total} </p>

                        </div>
                        <div className='Buton-COT'>
                            <button className='Buton-Comprar' onClick={() => dispatch(getcheckthunkName())}>Comprar</button>

                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default CartoffCanvas;