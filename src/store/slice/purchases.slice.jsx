import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfi';
import { setloadings } from './isloading.slice';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {

        setPurchases : (state , action) =>{
            const ispurchases = action.payload
            return ispurchases
        }

    }
})

export const getPurchasesthunkName = () => (dispatch) => {
    dispatch(setloadings(true));
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases` , getConfig())
        .then(res => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setloadings(false)));
}

export const { setPurchases  } = purchasesSlice.actions;

export default purchasesSlice.reducer;
