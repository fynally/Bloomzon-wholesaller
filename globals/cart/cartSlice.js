// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => item.id !== action.payload.id);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectedCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
