import {configureStore} from '@reduxjs/toolkit';
import productReducer from './reducers/product-reducer';
import authReducer from './reducers/auth-reducer';
import cartReducer   from './reducers/cart-reducer';
import likedReducer from './reducers/liked-reducer';

let store = configureStore({
    reducer:{
        productReducer,
        authReducer,
        cartReducer,
        likedReducer,
    }
})

export default store;







