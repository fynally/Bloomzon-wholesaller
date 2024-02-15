import { createSlice } from "@reduxjs/toolkit";

const sizesSlice = createSlice({
    name: 'sizes',
    initialState: {
        allSizes: [],
        selectedSize: {}
    },
    reducers: {
        setSizes: (state, action) => {
            state.allSizes = action.payload
        },
        setSelectedSize: (state, action) => {
            state.selectedSize = action.payload
        }
    }
})

export const { setSizes, setSelectedSize } = sizesSlice.actions;
export const sizeData = (state) => state.sizes;
export default sizesSlice.reducer 