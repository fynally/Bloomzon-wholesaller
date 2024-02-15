// tempCartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tempCartSlice = createSlice({
    name: 'tempCart',
    initialState: {
        selectedProduct: {},
        temporalCart: [],
        temporalSizes: [],
        tempColorVariation: [],
        temporalItems: 0,
        temporalTypes: 0,
        temporalAmount: 0,
    },

    reducers: {

        selectProduct: (state, action) => {
            state.selectedProduct = action.payload
        },

        addItem: (state, action) => {
            const { id, color, price, size, image } = action.payload;

            const existingIndex = state.temporalCart.findIndex(entry => entry.color === color && entry.size.label === size.label);

            if (existingIndex !== -1) {
                state.temporalCart[existingIndex].qty += 1;
            } else {
                state.temporalCart.push({ id, color, price, size, qty: 1, image });
            }

            // Filter out duplicates based on color and size.label
            state.tempColorVariation = state.temporalCart.filter((item, index, self) =>
                index === self.findIndex((t) => (
                    t.color === item.color && t.size.label === item.size.label
                ))
            );


            // handle temporalSizes
            state.temporalSizes = Array.from(new Set(state.temporalCart.map(item => item.size)));

            // Remove duplicates by comparing properties
            state.temporalSizes = state.temporalSizes.filter((obj, index, arr) => {
                return !arr.slice(0, index).some(otherObj => (
                    obj.id === otherObj.id &&
                    obj.in_stock === otherObj.in_stock &&
                    obj.label === otherObj.label &&
                    obj.price === otherObj.price &&
                    obj.value === otherObj.value
                ));
            });

            // Calculate derived values
            state.temporalItems = state.temporalCart.reduce((acc, obj) => acc + obj.qty, 0);

            state.temporalTypes = state.temporalCart.length;
        },

        // addItem: (state, action) => {
        //     const { id, color, price, size, image } = action.payload;

        //     const existingIndex = state.temporalCart.findIndex(
        //         (entry) =>
        //             entry.variations &&
        //             entry.variations.colors.some((c) => c.color === color) &&
        //             entry.variations.sizes.some((s) => s.label === size)
        //     );

        //     if (existingIndex !== -1) {
        //         state.temporalCart[existingIndex].qty += 1;
        //     } else {
        //         state.temporalCart.push({
        //             id,
        //             color,
        //             price,
        //             size,
        //             qty: 1,
        //             image,
        //             variations: { colors: [{ color }], sizes: [{ label: size }] }, // Add variations if not present
        //         });
        //     }

        //     // Calculate derived values
        //     state.temporalItems = state.temporalCart.reduce((acc, obj) => acc + obj.qty, 0);
        //     state.temporalTypes = state.temporalCart.length;
        // },


        removeItem: (state, action) => {
            const { color, size } = action.payload;
            const existingIndex = state.temporalCart.findIndex(entry => entry.color === color && entry.size.label === size.label);

            if (existingIndex !== -1) {
                const updatedQuantity = state.temporalCart[existingIndex].qty - 1;
                if (updatedQuantity < 1) {
                    state.temporalCart.splice(existingIndex, 1);
                } else {
                    state.temporalCart[existingIndex].qty = updatedQuantity;
                }
            }

            // handle temporalSizes
            state.temporalSizes = Array.from(new Set(state.temporalCart.map(item => item.size)));

            // Remove duplicates by comparing properties
            state.temporalSizes = state.temporalSizes.filter((obj, index, arr) => {
                return !arr.slice(0, index).some(otherObj => (
                    obj.id === otherObj.id &&
                    obj.in_stock === otherObj.in_stock &&
                    obj.label === otherObj.label &&
                    obj.price === otherObj.price &&
                    obj.value === otherObj.value
                ));
            });

            // Calculate derived values
            state.temporalItems = state.temporalCart.reduce((acc, obj) => acc + obj.qty, 0);
            state.temporalTypes = state.temporalCart.length;
        },
    },

});

export const { addItem, removeItem, selectProduct } = tempCartSlice.actions;
export const userTempCart = (state) => state.tempCart;
export default tempCartSlice.reducer;
