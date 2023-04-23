import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        details: {},
        company: {},
    },
    reducers: {
        changeUserDetails : (state, action) => {
            return { ...state,
                 ...action.payload , 
                 company:
                     { 
                        ...action.payload.company ,
                         address :
                          {  ...action.payload.company.address , 
                            country: {...action.payload.company.address.country},
                            city: { ...action.payload.company.address.city}  
                         } }};
        } 
    }
});

export const fetchUser = (state) => state.user;
export const {changeUserDetails} = userSlice.actions;
export default userSlice.reducer;