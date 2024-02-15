import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
    name: 'companies',
    initialState: {
        companies: [],
        company: {},
        products: [],
        minMOQ: {}
    },
    reducers: {
        setCompanies: (state, action) => {

            state.companies = action.payload
        },

        setCompany: (state, action) => {

            state.company = action.payload
        },

        setProducts: (state, action) => {
            state.products = action.payload;

            // Use map to create an array of minMOQ values for each data object
            state.minMOQ = state.products.map((data, index) => {
                return data.moqs.base.reduce((maxMinObject, currentObject) => {
                    // Compare the 'min' values of the current object and the maxMinObject
                    return currentObject.moq.min > maxMinObject.moq.min ? currentObject : maxMinObject;
                }, data.moqs.base[0]);
            });
        }

    },
})

// Action creators are generated for each case reducer function
export const { setCompanies, setCompany, setProducts } = companySlice.actions
export const companyState = (state) => state.companies
export default companySlice.reducer