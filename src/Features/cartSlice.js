import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart : [],
    quantity: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action) =>{
            const newItem = action.payload;

            const existingItem = state.cart.find((item)=> item.id === newItem.id)

            if(existingItem){
                existingItem.quantity++;
            }else{
                state.cart.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.title,
                    image: newItem.image,
                })
            }
        },

        removeFromCart: (state,action) =>{
            const id= action.payload;
            console.log("====>>>>>",id)
            const existingItem = state.cart.find((item)=> item.id === id.id)
            console.log("hello",existingItem);
            if(existingItem.quantity === 1 ){
                state.cart = state.cart.filter(item=> item.id!== id.id);
            }else{
                existingItem.quantity--;
            }
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;