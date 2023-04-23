import { configureStore } from "@reduxjs/toolkit";

import productReducer from './reducers/productSlice';
import detailsReducer from './reducers/detailsSlice';
import videoReducer from './reducers/videoSlice';
import editReducer from './reducers/editSlice';
import userReducer from './reducers/userSlice';


export default configureStore({
    reducer: {
        product: productReducer,
        details: detailsReducer,
        video: videoReducer, 
        edit: editReducer,
        user: userReducer,
    }
})