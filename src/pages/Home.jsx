import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Dropdown, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFilterthunkName, getfilterthunkTitle, getProductsThank } from '../store/slice/newProducts.slice';


const Home = () => {
    const [category, setCategory] = useState([])
    const [isInnput, setIsInnput] = useState("")



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newProducts = useSelector(state => state.newProducts)
    useEffect(() => {
        dispatch(getProductsThank());

        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/categories`)
            .then(res => setCategory(res.data))
    }, [])

    console.log(category)

    return (
        <div className='Contenedor-General'>

            <div className='Input-Flex' >
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

                <div className='Input-Contenedor'>

                    <InputGroup className="Input" size='sm' style={{ width: "80%" }}  >
                        <Form.Control
                            placeholder="Find your Products"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={isInnput} onChange={e => setIsInnput(e.target.value)}
                        />
                        <Button onClick={() => dispatch(getfilterthunkTitle(isInnput))} variant="danger" id="button-addon2">
                        <i className='bx bx-search-alt-2'></i>
                        </Button>
                    </InputGroup>

                    <div className='Cards'>
                        {
                            newProducts.map(news => (
                                <div className='CardsComponentes' key={news.id} onClick={() => navigate(`/product/${news.id}`)} >
                                    <Card className='Card' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={news.images?.[0].url} style={{ width: "150px", height: "160px", objectFit: "contain", margin: "0 auto", padding: "1rem" }} />
                                        <Card.Body>
                                            <Card.Title> {news.brand}  </Card.Title>
                                            <Card.Text className='Title'>
                                                <div className='Columna'>
                                                    <section>
                                                        <p className='Description'> {news.title}</p>
                                                    </section>
                                                    <section className='Precio'>
                                                        Price: ${news.price}
                                                    </section>
                                                </div>
                                            </Card.Text>
                                            <div>
                                                <button className='AddCart'> <i className='bx bx-cart bx-sm' ></i> </button>
                                            </div>

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