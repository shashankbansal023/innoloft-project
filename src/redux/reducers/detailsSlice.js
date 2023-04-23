import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        categories: [],
        businessModels: [],
        trl: {},
        investmentEffort : ''
    },

    reducers: {
        editCategories : (state , action) => {
            return { ...state , ...action.payload}; 
        },
        editBusinessModels: (state , action) => {
            return {...state , ...action.payload};
        },
        editTrl: (state, action) => {
            return {...state , ...action.payload}
        },
        editCost : (state, action) => {
            return {...state, ...action.payload};
        }, 
        saveDetails : (state , action ) => {
            return {...state , ...action.payload};
        }
    }
});

export const getProductDetails = (state) => state.details;

export const {editCategories , editBusinessModels , editTrl , editCost , saveDetails} = detailsSlice.actions;
export default detailsSlice.reducer;