import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getFilterthunkName } from '../store/slice/newProducts.slice';

const Products = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const newFilterProducts = newProductss.filter(news => news.id !== Number(id))

    const newProducts = useSelector(state => state.newProducts)

    const [isDetalles, setIsDetalles] = useState({})
    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id} `)
            .then(res => {
                setIsDetalles(res.data)
                dispatch(getFilterthunkName(res.data.category.id))
            })

    }, [id])

    console.log(isDetalles)

    return (
        <div className='Contendor-Productos'>
            <div className='Home'>
                <p> <Link className='Home' to={"/"}> Home  </Link> </p>
                <p className='Punto'> <i className='bx bxs-circle bx-ms'></i>  </p>
                <p> {isDetalles.brand} </p>
            </div>

            <div className='FlexProductos'>
                <div className='Carrusel'>
                    <Carousel className='Carousel' variant="dark">
                        <Carousel.Item className='item'>
                            <img className='Img' src={isDetalles.images?.[0].url} alt="" />

                        </Carousel.Item>
                        <Carousel.Item className='item'>
                            <img className='Img' src={isDetalles.images?.[1].url} alt="" />

                        </Carousel.Item>
                        <Carousel.Item className='item'>
                            <img className='Img' src={isDetalles.images?.[2].url} alt="" />

                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='Caracteriticas'>
                    <p> {isDetalles.brand} </p>
                    <h4> {isDetalles.title}  </h4>
                    <p className='Parrafo'> {isDetalles.description} </p>
                    <div className='Precio'>
                        <div>
                            <p>Price</p>
                            <h4> {isDetalles.price} </h4>
                        </div>
                        <div>
                            <p>Quantity</p>
                            <p><input type="number" /></p>
                        </div>

                    </div>
                    <div className='Boton'>
                        <button className='ButonComprar'> Add to car </button>
                    </div>
                </div>
            </div>


            <p className='ParrafoItems'>Discover similar items</p>

            <div className='Productos-Similares'>

                {
                    newProducts.map(isnew => (
                        <div key={isnew.id} onClick={() => navigate(`/product/${isnew.id}`)}  >
                            <Card className='Similar' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={isnew.images?.[0].url} style={{ width: "150px", height: "160px", objectFit: "contain", margin: "0 auto", padding: "1rem" }} />
                                <Card.Body>
                                    <Card.Title> {isnew.brand}  </Card.Title>
                                    <Card.Text className='Title'>
                                        <div>
                                            {isnew.title}
                                        </div>
                                        <div className='Buton-precio'>
                                            <div>
                                                <div>
                                                    <p>Price</p>
                                                </div>
                                                ${isnew.price}
                                            </div>
                                            <div>
                                                <button className='AddCart'> <i className='bx bx-cart bx-sm' ></i> </button>
                                            </div>
                                        </div>
                                    </Card.Text>


                                </Card.Body>
                            </Card>


                        </div>

                    ))
                }
            </div>
            <footer className='Footer'>
                <div className='Contenedor-Footer'>
                    <section className='Copyrigth'>
                        <p> <i className='bx bx-copyright bx-sm'></i> </p>

                        <p>Gerson Elmer Flores Narciso</p>
                    </section>
                    <section className='Redes'>
                        <section className='RedesSociales'>
                            <i className='bx bxl-linkedin bx-md' ></i>
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

export default Products;