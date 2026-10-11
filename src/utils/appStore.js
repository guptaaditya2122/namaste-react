import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice"


const appStore = configureStore({
    // this is a reducer for this store and is responsible for modifying app store. 
    // This reducer is combination of multiple reducers from slices
    reducer: {
        cart: cartReducer
        // user:userReducer  it we had user slice also 
    }
});


export default appStore;