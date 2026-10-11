import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    // configuration
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
       // Here we will write reducers functions to modify the slicce of the store corresponding to each action
       // these are actions and with all these actions we have reducer function attach to it which will modify state.
       addItem: (state, action)=>{ // this is reducer function

        // Mutating the state here
        state.items.push(action.payload); // payload is item that we will send from dispatch function
       },
       removeItem: (state,action)=>{ // these are all reducer functions but they will be mapped to actions
        state.items.pop();
       },
       clearCart:(state,action)=>{

        // RTK - either mutate the exisiting state or return a new state

        state.items.length = 0;   // or you can also use return {items:[]}

        // state =[] // this wont work becaue of immer also by doing this you are just changing the reference to the state not
        // actually changing the state or mutating the state
       }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;


// This cart slice is a big object which has

// {
//     actions: {addItem, removeItem, clearCart},
//     reducer 

// }