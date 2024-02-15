import { createSlice } from "@reduxjs/toolkit";

const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        colorsData: [],
        currentColor: {},
    },
    reducers: {
        setColors: (state, action) => {
            state.colorsData = action.payload
        },
        setCurrentColor: (state, action) => {
            state.currentColor = action.payload
        }
    }
})

export const { setColors, setCurrentColor } = colorsSlice.actions;
export const activeColor = (state) => state.colors;
export default colorsSlice.reducer