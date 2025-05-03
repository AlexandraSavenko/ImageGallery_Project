import { configureStore } from "@reduxjs/toolkit";
import queryReducer from './QuerySlice'
import galleryReducer from './ResultSlice'
import modalReducer from './ModaleSlice'
export const store = configureStore({
    reducer: {
        query: queryReducer,
        gallery: galleryReducer,
        modal: modalReducer,
    }
})