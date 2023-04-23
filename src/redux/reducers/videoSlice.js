import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        url: ''
    },
    reducers: {
        editVideoUrl : (state , action) => {
            return { ...state , ...action.payload} ;
        }
    }
});

export const getVideoUrl = (state ) => state.video;

export const { editVideoUrl } = videoSlice.actions;
export default videoSlice.reducer;