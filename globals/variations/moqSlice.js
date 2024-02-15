import { createSlice } from '@reduxjs/toolkit';

const moqSlice = createSlice({
    name: 'moq',
    initialState: {
        data: [],
        currentMoqData: {},
        lowestMin: 0,
        highestMin: 0
    },
    reducers: {
        setMOQ: (state, action) => {
            state.data = action.payload;
        },
        setCurrentMoqData: (state, action) => {
            state.currentMoqData = action.payload;
        },

        setLowestMin: (state, action) => {

            state.lowestMin = action.payload.reduce((minMinObject, currentObject) => {
                // Compare the 'min' values of the current object and the minMinObject
                if (currentObject.moq.min < minMinObject.moq.min) {
                    return currentObject; // Update minMinObject if the current 'min' is lower
                } else {
                    return minMinObject; // Keep the current minMinObject if the 'min' is not lower
                }
            }, action.payload[0]);

            // const highest_moq_Min = MOQ.reduce((maxMinObject, currentObject) => {
            //     // Compare the 'min' values of the current object and the maxMinObject
            //     if (currentObject.moq.min > maxMinObject.moq.min) {
            //         return currentObject; // Update maxMinObject if the current 'min' is higher
            //     } else {
            //         return maxMinObject; // Keep the current maxMinObject if the 'min' is not higher
            //     }
            // }, MOQ[0]);
        }
    },
});

export const { setMOQ, setCurrentMoqData } = moqSlice.actions;
export const activeMOQ = (state) => state.moq;

export default moqSlice.reducer;