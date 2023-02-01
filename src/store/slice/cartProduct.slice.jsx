import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfi';
import { setloadings } from './isloading.slice';

export const cartProductSlice = createSlice({
    name: 'cartProduct',
    initialState: [],
    reducers: {
         setCartProduct : (state , action) =>{
            const cartProduct = action.payload
            return cartProduct
         }
    }
})

export const getCartProductsthunkName = () => (dispatch) => {
       dispatch(setloadings(true));
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart` ,getConfig() )
        .then(res => dispatch(setCartProduct(res.data)))
        .finally(() => dispatch(setloadings(false)));
}

export const { setCartProduct  } = cartProductSlice.actions;

export default cartProductSlice.reducer;
