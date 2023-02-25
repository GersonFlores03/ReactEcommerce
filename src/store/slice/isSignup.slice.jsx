import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfi';
import { setloadings } from './isloading.slice';

export const isSignup = createSlice({
    name: 'isSignup',
    initialState: [],
    reducers: {
          setIsSignup: (state , action) =>{
             const Signup = action.payload
             return Signup
          }
    }
})

export const getisSignupthunkName = () => (dispatch) => {
    dispatch(setloadings(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/users` ,getConfig())
        .then((res) => dispatch(setIsSignup(res.data)))
        .finally(() => dispatch(setloadings(false)));
}

export const getOneUserthunkName = (data) => (dispatch) => {
    dispatch(setloadings(true));
return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/users/${data}` ,getConfig() )
        .then((res) => dispatch(setIsSignup(res.data)))
        .finally(() => dispatch(setloadings(false)));
}

export const getloadethunkName = () => (dispatch) => {
    dispatch(setloadings(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/users/me`, getConfig() )
        .then(() => dispatch(getisSignupthunkName()))
        .finally(() => dispatch(setloadings(false)));
}

export const { setIsSignup  } = isSignup.actions;

export default isSignup.reducer;
