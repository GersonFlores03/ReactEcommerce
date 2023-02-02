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
       return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart` ,getConfig() )
        .then(res => dispatch(setCartProduct(res.data)))
        .finally(() => dispatch(setloadings(false)));
}

export const getAddFavoritethunkName = (raw) => (dispatch) => {
       dispatch(setloadings(true));
       return axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, raw , getConfig())
        .then(() => dispatch(getCartProductsthunkName()))
        .catch(()=>alert("hubo un error"))
        .finally(() => dispatch(setloadings(false)));
}

export const getcheckthunkName = () => (dispatch) => {
    dispatch(setloadings(true));
    return axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases` , [] , getConfig())
        .then(() => dispatch(getCartProductsthunkName()))
        .finally(() => dispatch(setloadings(false)));
}

export const getDeletethunkName = (id) => (dispatch) => {
       dispatch(setloadings(true));
       return axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`  , getConfig() )
        .then(() => dispatch(getCartProductsthunkName()))
        .finally(() => dispatch(setloadings(false)));
}

export const { setCartProduct  } = cartProductSlice.actions;

export default cartProductSlice.reducer;
