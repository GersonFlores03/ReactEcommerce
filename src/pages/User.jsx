import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getloadethunkName } from '../store/slice/isSignup.slice';

const User = () => {

    const isSignup = useSelector(state => state.isSignup)



    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getloadethunkName())
    }, [])

    const ultimo = isSignup[isSignup.length - 1]
    console.log(ultimo)

    console.log(isSignup)

    const logaut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }



    return (
        <div className='Contenedor-User'>
            <div className='Contenido-Usuario'>
                <div className='Usuarios'>
                    <section className='Mi-Usuario'>
                        <i className='bx bx-user bx-lg'></i>
                    </section>
                    <h4> {ultimo?.firstName} </h4>
                    <p>
                        <Nav className="me-auto">
                            <Nav.Link onClick={logaut} > <span className='Cerrar-sesion'> Cerrar sesion </span></Nav.Link>
                        </Nav>
                    </p>
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

export default User;