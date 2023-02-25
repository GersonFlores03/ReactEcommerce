import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneUserthunkName } from '../store/slice/isSignup.slice';

const Signup = () => {
     
    const {register , handleSubmit} = useForm();
    const navigate = useNavigate();
     const dispatch = useDispatch();
     
    const submit = (data) => {
        console.log(data)
        axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/users` , data)
        .then(res =>{
            localStorage.setItem( "token" , res.data.token)
            navigate("/login")
            dispatch(()=>getOneUserthunkName())
        })
        .catch(error =>{
            if(error.response.status=== 401){
                alert("Credencial Incorrecta")
            }
            console.log(error)
        })
    }

   
     

    return (
        <div className='Contenedor-Registro'>
            <div className='Registro-Nuevo'> 
            <div className='Formulario'> 
            <form className='Father' onSubmit={handleSubmit(submit)}>
            <div className='Face'>  
            <h4>New account</h4>
            </div>
            <div className='Contenedor-inputs'>
            <div className='DatosInputs'>  
            <div className='Contenedor-Dates'>
                  <section className='label'> 
                  <label htmlFor="firstName"> </label>
                  </section>
                  <section className='input'> 
                  <input
                  placeholder='FirstName'
                  type="text" 
                  id='firstName' 
                   {...register("firstName")} 
                   />
                </section>
            </div>
            <div className='Contenedor-Dates'>
                  <section> 
                  <label htmlFor="lastName"> </label>
                  </section>
                  <section className='input'> 
                  <input
                  placeholder='LastName'
                  type="text" 
                  id='lastName' 
                   {...register("lastName")} 
                   />
                </section>
            </div>
            <div className='Contenedor-Dates'>
                  <section> 
                   <label htmlFor="email"> </label>
                   </section>
                   <section className='input'> 
                   <input
                   placeholder='Email'
                   type="text" 
                   id='email' 
                    {...register("email")} 
                    />
                    </section>
            </div>
          
            <div className='Contenedor-Dates'>
                   <section> 
                   <label htmlFor="password"> </label>
                   </section>
                   <section className='input'> 
                    <input
                    placeholder='Password'
                    type="password" 
                    id='password'
                    {...register("password")}
                    />
                    </section>
            </div>
            <div className='Contenedor-Dates'>
                   <section> 
                   <label htmlFor="phone"> </label>
                   </section>
                   <section className='input'> 
                    <input
                    placeholder='Phone'
                    type="number" 
                    id='phone'
                    {...register("phone")}
                    />
                    </section>
            </div>
            <button className='ButonRegistro' type='submit'> Log in </button>
            </div>
            </div>
         
            

        </form>
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

export default Signup;