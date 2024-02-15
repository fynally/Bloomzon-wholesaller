import { createSlice } from "@reduxjs/toolkit";

const customizationSlice = createSlice({
    name: "customize",
    initialState: {
        extras: [],
        customizeMenuList: {

            printing: {
                id: 1,
                label: "Printing Method",
                options: [
                    {
                        id: 1,
                        name: "Silk screen printing & 1 color",
                        price: 1.65
                    },
                    {
                        id: 2,
                        name: "Silk screen printing & 2 color",
                        price: 1.95
                    },
                    {
                        id: 3,
                        name: "Silk screen printing & 3 color",
                        price: 2.55
                    },
                    {
                        id: 4,
                        name: "Silk screen printing & 4 color",
                        price: 3.11
                    },
                ]
            },

            fabric: {
                id: 2,
                label: "Fabric Type",
                options: [
                    {
                        id: 1,
                        name: "Knitted",
                        price: 11.58,
                    },
                    {
                        id: 2,
                        name: "Precious example",
                        price: 74.19,
                    },
                ]
            },

            feature: {
                id: 3,
                label: "Feature",
                options: [
                    {
                        id: 1,
                        name: "Breathable",
                        price: 10.42
                    },
                    {
                        id: 2,
                        name: "Cool data again",
                        price: 22.16
                    },
                    {
                        id: 333,
                        name: "Awesome date",
                        price: 17.95
                    },
                ]
            },
            supply: {
                id: 4,
                label: "Supply Type",
                options: [
                    {
                        id: 1,
                        name: "OEM service",
                        price: 55.32
                    },
                    {
                        id: 2,
                        name: "Another OEM service",
                        price: 48.54
                    },
                ]
            },

            material: {
                id: 5,
                label: "Material",
                options: [
                    {
                        id: 1,
                        name: "Polyester / Cotton",
                        price: 12.45
                    },
                    {
                        id: 2,
                        name: "Another cotton",
                        price: 56.09
                    },
                    {
                        id: 3,
                        name: "And yet another example",
                        price: 16.32
                    },
                ]
            },

            technics: {
                id: 6,
                label: "Technics",
                options: [
                    {
                        id: 1,
                        name: "Plain Dyed",
                        price: 10.42
                    },
                    {
                        id: 2,
                        name: "Blue Dyed too",
                        price: 22.16
                    },
                    {
                        id: 333,
                        name: "Something else again",
                        price: 17.95
                    },
                ]
            }

        },
        customizeImage: {
            productToDesign: '',
            designLogo: '',
            designText: ''
        }
    },
    reducers: {
        updateExtras: (state, action) => {
            const allExtra = action.payload;
            const existingIndex = state.extras.findIndex(entry => entry.label === allExtra.label);

            if (existingIndex !== -1) {
                // Item exists, replace the existing object with the new one
                state.extras[existingIndex] = allExtra;
            } else {
                // Item does not exist, add it to the extras array
                state.extras.push(allExtra);
            }
        },

        setCustomizeImage: (state, action) => {

            state.customizeImage = {
                ...state.customizeImage,
                ...action.payload
            };
        }

    }
})

export const { updateExtras, setCustomizeImage } = customizationSlice.actions
export const customizationExtra = state => state.customize
export default customizationSlice.reducer