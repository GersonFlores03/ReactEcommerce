import { configureStore } from '@reduxjs/toolkit'
import  cartProductSlice  from './slice/cartProduct.slice'
import isloadingSlice from './slice/isloading.slice'
import isSignupSlice from './slice/isSignup.slice'
import newProductsSlice from './slice/newProducts.slice'
import  purchasesSlice  from './slice/purchases.slice'

export default configureStore({
    reducer: {
            isloading: isloadingSlice,
            newProducts : newProductsSlice,
            purchases: purchasesSlice,
            cartProduct: cartProductSlice,
            isSignup: isSignupSlice
    }
})
