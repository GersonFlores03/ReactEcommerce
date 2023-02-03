import React, { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesthunkName } from '../store/slice/purchases.slice';

const Purchases = () => {

    const purchases = useSelector(state => state.purchases)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesthunkName())
    }, [])

    console.log(purchases)
    return (
        <div>
            <h1 className='Titulo-purchases'>My Purchases</h1>
            <div className='Contenedor-Purchases'>
                {
                    purchases.map(purcha => (
                        <div key={purcha.id}>
                            <Link className='Links' to={`/product/${purcha.product?.id}`}>
                                <Card className='CardPurchases' style={{ width: '18rem', height: "20rem" }}>
                                    <Card.Img className='img-purchases' variant="top" src={purcha.product?.images?.[0].url}
                                        style={{ width: "150px", height: "160px", objectFit: "contain", margin: "0 auto", padding: "1rem" }}
                                    />
                                    <hr />
                                    <Card.Body>
                                        <Card.Title>{purcha.product?.brand}</Card.Title>
                                        <Card.Text>
                                            {purcha.product?.title}
                                             {purcha.product?.userId} 

                                        </Card.Text>
                                    </Card.Body>

                                </Card>

                            </Link>
                        </div>

                    ))}

            </div>

            <footer className='Footer'>
                <div className='Contenedor-Footer'>
                    <section className='Copyrigth'>
                        <p> <i className='bx bx-copyright bx-sm'></i> </p>

                        <p>Gerson Elmer Flores Narciso</p>
                    </section>
                    <section className='Redes'>
                        <section className='RedesSociales'>
                            <a href="https://www.linkedin.com/in/gerson-flores-narciso-52628b256/"> <i className='bx bxl-linkedin bx-md' ></i>   </a>
                        </section>
                        <section>
                            <i className='bx bxl-instagram-alt bx-md'></i>
                        </section>
                    </section>
                </div>
            </footer>
        </div>
    );
};

export default Purchases;