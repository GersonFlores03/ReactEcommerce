import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setloadings } from './isloading.slice';

export const newProducts = createSlice({
    name: 'newProducts',
    initialState: [],
    reducers: {

        setProducts: (state , action) =>{
            const news = action.payload
            return  news
        }

    }
})

export const getProductsThank = () => dispatch =>{
         dispatch(setloadings(true))
         axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products`)
         .then(res => dispatch(setProducts(res.data)))
         .finally(()=> dispatch(setloadings(false)));
}
export  const getFilterthunkName = (id) => (dispatch) => {
         dispatch(setloadings(true));
         axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id} `)
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setloadings(false)));
}
export const getfilterthunkTitle = (isInnput) => (dispatch) => {
    dispatch(setloadings(true));
       axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/?title=${isInnput} `)
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setloadings(false)));
}

export const { setProducts } = newProducts.actions;

export default newProducts.reducer;
