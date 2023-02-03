import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const submit = (data) => {
        console.log(data)
        axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/users/login`, data)
            .then(res => {

                localStorage.setItem("token", res.data.token)
                navigate("/")
            })
            .catch(error => {
                if (error.response.status === 401) {
                    alert("Credencial Incorrecta")
                }
                console.log(error)
            })
    }


    return (

        <>
            <h1 className='Registro'>Registro</h1>

            <div className='Input-Registro'>



                <Form className='Contenedor-Formulario' onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='Barra-Input' style={{ width: "15rem" }}  type="email" placeholder="Enter email"
                            {...register("email")} />


                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='Barra-Input' style={{ width: "15rem" }} type="password" placeholder="Password"
                            {...register("password")} />
                    </Form.Group>

                    <Button className='Buton-login' variant="primary" type="submit">
                        Submit
                    </Button>
                    <div className='test'>
                         <h5 className='Tes-data'>Test data</h5>
                        
                         <p>john@gmail.com</p>
                         <p>john1234</p>   
                    </div>
                </Form>
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
        </>
    );
};

export default Login;