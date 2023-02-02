import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCartProductsthunkName, getcheckthunkName, getDeletethunkName } from '../store/slice/cartProduct.slice';


const CartoffCanvas = ({ show, handleClose }) => {
    const [counterNumber, setCounterNumber] = useState(1)

    //const [deleteProduct , setDeleteProduct] = useState({})


    //const {id} = useParams()

    

    const cartProduct = useSelector(state => state.cartProduct)
     
    /*useEffect(()=>{
        axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`)
        .then(res =>{
            setDeleteProduct(res.data)
            dispatch(getDeletethunkName(res.data.id))
        } )
    },[id])*/

    //console.log(deleteProduct)

   

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartProductsthunkName())
    }, [])

    console.log(cartProduct)

    const incrementNumber = () => {
        setCounterNumber(counterNumber + 1)
        

    }

    const decrementNumber = () => {
        setCounterNumber(counterNumber - 1)
    }

    const totalProduct = () =>{
         
    }

    return (
        <div>
            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <button onClick={() => dispatch(getcheckthunkName())}>Comprar</button>
                    <ul>
                        {
                            cartProduct.map(cart => (
                                <li className='listasCart' key={cart.product.id}>

                                    <div className='Carrito'>

                                        <div className='FlexImgs'>
                                            <img className='img-cart' src={cart.product.images?.[0].url} alt="" />
                                            <div className='Flex-Column'>
                                                <h5> {cart.product.brand} </h5>
                                                <div>
                                                    <button className='ContadorCart' disabled={counterNumber === 1} onClick={decrementNumber}> - </button><button className='Counter'> {counterNumber}</button><button className='ContadorCart' onClick={incrementNumber}> + </button>
                                                </div>

                                            </div>
                                            <button onClick={()=> dispatch(getDeletethunkName(cart.id))} className='Trash'> <i className='bx bx-trash'></i> </button>

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
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default CartoffCanvas;