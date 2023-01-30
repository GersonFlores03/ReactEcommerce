import { configureStore } from '@reduxjs/toolkit'
import isloadingSlice from './slice/isloading.slice'
import newProductsSlice from './slice/newProducts.slice'

export default configureStore({
    reducer: {
            isloading: isloadingSlice,
            newProducts : newProductsSlice
    }
})
