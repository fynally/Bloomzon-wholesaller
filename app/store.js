import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import companiesReducer from '../globals/company/companySlice';
import cartReducer from '../globals/cart/cartSlice';
import tempCartReducer from '../globals/cart/tempCartSlice';
import moqReducer from '../globals/variations/moqSlice';
import sizesReducer from '../globals/variations/sizesSlice';
import colorsReducer from '../globals/variations/colorsSlice';
import customizeReducer from '../globals/customization/customizationSlice';
import shippingReducer from '../globals/shipping/shippingSlice';

export const store = configureStore({
    reducer: {
        companies: companiesReducer,
        cart: cartReducer,
        moq: moqReducer,
        sizes: sizesReducer,
        colors: colorsReducer,
        tempCart: tempCartReducer,
        customize: customizeReducer,
        shipping: shippingReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
