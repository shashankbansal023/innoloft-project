import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
    name: 'edit',
    initialState: {
        product : false,
        video : false,
        details: false,
    },
    reducers: {
        toggleEdit : (state , action) => {
            return {...state , ...action.payload}
        },
    }
});

export const getEditMode = (state) => state.edit;
export const { toggleEdit } = editSlice.actions;
export default editSlice.reducer;


