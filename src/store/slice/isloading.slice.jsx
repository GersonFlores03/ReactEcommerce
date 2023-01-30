import { createSlice } from '@reduxjs/toolkit';

export const isloadingSlice = createSlice({
    name: 'isloading',
    initialState: false,
    reducers: {

        setloadings: (state, action) => {
            const isloading = action.payload
            return isloading
        }

    }
})

export const { setloadings} = isloadingSlice.actions;

export default isloadingSlice.reducer;
