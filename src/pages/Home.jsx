import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Dropdown, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFilterthunkName, getfilterthunkTitle, getPricethunkName, getProductsThank } from '../store/slice/newProducts.slice';


const Home = () => {
    const [category, setCategory] = useState([])
    const [isInnput, setIsInnput] = useState("")
    const [sum, setSum] = useState(0)
    const [res, setRes] = useState(0)
    const [productFilter, setProductFilter] = useState([])
    const newProducts = useSelector((state) => state.newProducts)

    useEffect(() => {
        setProductFilter(newProducts)
    }, [newProducts])

    const range = () => {
        const filterProductos = newProducts.filter((producto) => {
            return +producto.price <= +sum && +producto.price >= +res
        });
        setProductFilter(filterProductos)
    };







    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getProductsThank());

        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/categories`)
            .then(res => setCategory(res.data))
    }, [])

    

    return (
        <div className='Contenedor-General'>

            <div className='Input-Flex' >
                <div className='Filter-Category'>
                    <Accordion className='Acordion' defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Price</Accordion.Header>
                            <Accordion.Body>
                            <form onSubmit={range}>
                              From <input className='InputPrice' type="text"
                              value={sum} onChange={ e=>setSum(e.target.value)}
                              />
                               <div> 
                               To <input className='InputPrice' type="text"
                                value={res} onChange={e =>setRes(e.target.value)} />
                                        
                                </div>
                                <div className='Buton-input'> 
                                  <button type='submit'> Submit</button>
                                </div>
                                </form>


                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                    <Dropdown className='Categorys'>

                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Category

                        </Dropdown.Toggle>
                        <hr className='Raya' />

                        <Dropdown.Menu>

                            {
                                category.map(cate => (
                                    <Dropdown.Item key={cate.id} onClick={() => dispatch(getFilterthunkName(cate.id))} >
                                        {cate.name}
                                    </Dropdown.Item>
                                ))
                            }

                        </Dropdown.Menu>
                    </Dropdown>

                </div>



                <div className='Input-Contenedor'>

                    <InputGroup className="Input" size='md' style={{ width: "80%" }}  >
                        <Form.Control
                            placeholder="Find your Products"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={isInnput} onChange={e => setIsInnput(e.target.value)}
                        />
                        <Button onClick={() => dispatch(getfilterthunkTitle(isInnput))} variant="danger" id="button-addon2" size='md'>
                            <i className='bx bx-search-alt-2'></i>
                        </Button>
                    </InputGroup>

                    <div className='Cards'>
                        {
                            productFilter.map(news => (
                                <div className='CardsComponentes' key={news.id} onClick={() => navigate(`/product/${news.id}`)} >
                                    <Card className='Card' style={{ width: '18rem', height: "23rem" }}>
                                        <Card.Img variant="top" src={news.images?.[0].url}
                                            style={{ width: "150px", height: "160px", objectFit: "contain", margin: "0 auto", padding: "1rem" }} />
                                        <hr />
                                        <Card.Body>
                                            <Card.Title> {news.brand}  </Card.Title>
                                            <Card.Text className='Title'>
                                                <div className='Description'>
                                                    <p className='Parrafo-home'>{news.title} </p>

                                                </div>

                                                Price $:
                                                <div className='Price-Buton'>
                                                    <b> {news.price} </b>
                                                    <button className='AddCart'> <i className='bx bx-cart bx-sm' ></i> </button>
                                                </div>
                                            </Card.Text>


                                        </Card.Body>
                                    </Card>


                                </div>
                            ))}

                    </div>


                </div>



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

export default Home;