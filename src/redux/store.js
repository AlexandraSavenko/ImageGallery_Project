import { configureStore } from "@reduxjs/toolkit";
import queryReducer from './QuerySlice'
import galleryReducer from './ResultSlice'
export const store = configureStore({
    reducer: {query: queryReducer,
        gallery: galleryReducer,

    }
})