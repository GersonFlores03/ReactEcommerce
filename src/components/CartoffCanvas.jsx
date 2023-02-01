import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProductsthunkName } from '../store/slice/cartProduct.slice';

const CartoffCanvas = ({show ,handleClose}) => {
 
       const cartProduct = useSelector(state=> state.cartProduct)
       const dispatch = useDispatch()

       useEffect(()=>{
         dispatch(getCartProductsthunkName())
       },[])

       console.log(cartProduct)

    return (
        <div>
              <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                      <ul>
                        {
                            cartProduct.map(cart =>(
                                <li key={cart.product.id}>
                                    <h1> {cart.product.brand} </h1>
                                </li>
                            ))
                        }
                      </ul>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default CartoffCanvas;