import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        picture: '',
        name: '',
        description: ''
    },
    reducers: {
        deleteImg : (state , action) => {
           return {...state , ...action.payload};
        },
        editTitle : (state , action) => {
            return {...state , ...action.payload}
        },
        editDescription : (state, action) => {
            return {...state , ...action.payload};
        },
        saveProductDetails : (state , action) => {
            return {...state , ...action.payload};
        } 
    }

});

export const getProduct = (state) => state.product;

export const {deleteImg , editTitle , editDescription, saveProductDetails } = productSlice.actions;
export default productSlice.reducer;