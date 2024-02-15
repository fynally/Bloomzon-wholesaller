import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
    name: "shipping",
    initialState: {
        shipping: {
            shipFrom: {},
            shipTo: {},
            shipMethod: {}
        }
    },
    reducers: {

        setShipping: (state, action) => {
            state.shipping = {
                ...state.shipping,
                ...action.payload
            }
        }

    }
})

export const { setShipping } = shippingSlice.actions
export const shippingData = state => state.shipping
export default shippingSlice.reducer