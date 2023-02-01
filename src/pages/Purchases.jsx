import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesthunkName } from '../store/slice/purchases.slice';

const Purchases = () => {

    const purchases = useSelector(state=>state.purchases)

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getPurchasesthunkName())
    }, [])

    //console.log(purchases)
    return (
        <div>
           <h1>Favoritos</h1>
           <ul>
              {
                purchases.map(purcha => (

                    <Link to={`/product/${purcha.product.id}`}> 
                    <li key={purcha.id}>
                        {purcha.product.brand}
                        <img src={purcha.product.images?.[0].url} style={{width:"200px"}} alt="" />
                    </li>
                    </Link>
                ))
              }
           </ul>
        </div>
    );
};

export default Purchases;