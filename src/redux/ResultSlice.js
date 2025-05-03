import { createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "./galleryOps";

export const loadingResult = state => state.gallery.loading

const slice = createSlice({
    name: 'imagesGallery',
    initialState: {
        loading: false,
        fetchedImages: []
    },
    extraReducers: (builder) => {builder
        .addCase(fetchImages.pending, (state) => {state.loading = true})
        .addCase(fetchImages.fulfilled, (state,action) => {
            console.log(state.fetchedImages.length > 0)
            if(state.fetchedImages.length > 0) state.fetchedImages = [...state.fetchedImages, ...action.payload];
        state.fetchedImages = action.payload
            console.log(state.fetchedImages)
        state.loading = false;
    })}
    // reducers: {
    //     saveFetchedImages(state, action){
    //         state.fetchedImages = action.payload
    //     }
    // }
})

export const {saveFetchedImages} = slice.actions

export default slice.reducer